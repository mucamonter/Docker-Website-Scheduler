const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const path = require('path');
const pool = require('./db');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const HORARIOS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
const STATUS = ['cancelado', 'pedido_nao_atendido', 'pedido_atendido', 'pedido_pendente'];
const ATENDIMENTO = ['no_paco', 'marcado'];
const TIPOS_ATENDIMENTO = ['unico', 'grupo'];
const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;


const HORARIOS_BLOCO = HORARIOS.map(


    h => ({
        inicio: h, fim: (() => { 
            const [hh,mm]=h.split(':').map(Number);
            const d=new Date(2000,0,1,hh,mm+30);
            return `${String(d.getHours()).padStart(2,'0')}`;})() }));

if (!ADMIN_USER || !ADMIN_PASSWORD || !process.env.SESSION_SECRET) {
    throw new Error(`ADMIN_USER, ADMIN_PASSWORD e SESSION_SECRET devem estar configurados no ambiente`);
}

app.use(express.json({ limit: '100kb'}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitializing: false,
    cookie: {httpOnly: true, sameSite: 'lax', secure: false, maxAge: 8 * 60 * 60 * 1000}
}));

const texto = v => typeof v === 'string' ? v.trim() : '';
function dataValida(v){
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
    const [a,m,d] = v.split('-').map(Number);
    const x = new Date(Date.UTC(a,m-1,d));
    return x.getUTFCFullYear()===a && x.getUTCMonth()===m-1 && x.getUTCDate()===d;
}

function diaUtil(v){
    const [a,m,d] = v.split('-').map(Number);
    return ![0,6].includes(new Date(Date.UTC(a,m-1,d)).getUTCDay());
}

function hoje() {
    return new Intl.DateTimeFormat('en-CA', { timeZone:'America/Sao_Paulo', year:'numeric', month:'2-digit', day:'2-digit'}).format(new Date());
}

function exigirAdmin(req,res,next){
    if (req.session?.papel === 'admin' || req.session?.papel === 'visualizador') return next();
    return res.status(401).json({ mensagem:'Acesso administrativo necessário.'});
}

function exigirStaff(req,res,next){
    if (req.session?.papel === 'admin' || req.session?.papel === 'visualizador') return next ();
}

function exigirCidadao(req,res,next){
    if (req.session?.papel === 'cidadao' && req.session?.cidadaoId) return next();
    return res.status(401).json({ mensagem: 'Login de cidadão necessário'});
}
function valorStatus(s) { return STATUS.includes(s) ? s : null; }
function valorAtendimento(s) { return ATENDIMENTO.includes(s) ? s : null; }
function normalizarParticipantes(lista){
    if (!Array.isArray(lista)) return [];
    return lista.map(p => ({ nome: texto(p?.nome), telefone: texto(p?.telefone) })).filter(p => p.nome).slice(0, 100);
} 
function blocosValidos(lista){
    if (!Array.isArray(lista)) return [];
    return [...new Set(lista.map)]
}

async function colunaExiste(tabela, coluna) {
    const [rows] = await pool.execute(
        `SELECT COUNT (*) AS total
          FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = DATABASE()
          AND TABLE_NAME = ?
          AND COLUMN_NAME = ?`,
        [tabela, coluna]
    );
    return Number(rows[0]?.total || 0) > 0;
}

async function prepararBanco(){
     if (!(await colunaExiste('cidadaos','telefone'))) {
    await pool.query('ALTER TABLE cidadaos ADD COLUMN telefone VARCHAR(30) NULL AFTER email');
  }

  if (!(await colunaExiste('agendamentos','telefone'))) {
    await pool.query('ALTER TABLE agendamentos ADD COLUMN telefone VARCHAR(30) NULL AFTER email');
  }
  if (!(await colunaExiste('agendamentos','atendimento'))) {
    await pool.query("ALTER TABLE agendamentos ADD COLUMN atendimento ENUM('no_paco','marcado') NOT NULL DEFAULT 'marcado' AFTER horario");
  }
  if (!(await colunaExiste('agendamentos','tratativa'))) {
    await pool.query('ALTER TABLE agendamentos ADD COLUMN tratativa TEXT NULL AFTER motivo');
  }
  if (!(await colunaExiste('agendamentos','tipo_atendimento'))) {
    await pool.query("ALTER TABLE agendamentos ADD COLUMN tipo_atendimento ENUM('unico','grupo') NOT NULL DEFAULT 'unico' AFTER atendimento");
  }
  if (!(await colunaExiste('agendamentos','blocos_json'))) {
    await pool.query('ALTER TABLE agendamentos ADD COLUMN blocos_json JSON NULL AFTER tipo_atendimento');
  }

  await pool.query(`CREATE TABLE IF NOT EXISTS agendamento_participantes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    agendamento_id INT UNSIGNED NOT NULL,
    nome VARCHAR(150) NOT NULL,
    principal TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    INDEX idx_participante_agendamento (agendamento_id),
    CONSTRAINT fk_participante_agendamento FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
    ) ENGINE=InnoDB`);

    await pool.query(`CREATE TABLE IF NOT EXISTS agendamento_slots(
        id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
        agendamento_id INT UNSIGNED NOT NULL,
        data DATE NOT NULL, 
        horario_inicio TIME NOT NULL,
        PRIMARY KEY (id),
        INDEX idx_slot_agendamento (agendamento_id),
        INDEX idx_agenda_slot_data_hora (data, horario_inicio),
        CONSTRAINT fk_slot_agendamento FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
        ) ENGINE=InnoDB`);

        try {
            const [idxs] = await pool.query("SHOW INDEX FROM agendamento_slots WHERE Key_name IN ('uk_agenda_slot', 'agenda_slot')");

            const nomes = [...new Set((idxs || []).map(i => i.Key_name).filter(Boolean))];
            for (const nome of nomes) {
                await pool.query(`Alter TABLE agendamento_slots DROP INDEX \`${nome}\``);
            }
        }catch (e) {
            if (!/doesn't exist|not exist/i.test(e.message || '')) throw e;
        }

        try{
            const [idx] = await pool.query("SHOW INDEX FROM agendamentos WHERE Key_name = 'uk_agendamento_slot_ativo");
            if (Array.isArray(idx) && idx.length) {
                await pool.query('ALTER TABLE agendamentos DROP INDEX uk_agendamento_slot_ativo');
            }
        } catch (e) {
            if (!/dosen't exist|not exist/i.test(e.messege || '')) throw e;
        }

        try{
            const [col] = await pool.query("SHOW COLUMNS FROM agendamentos LIKE 'slot_ativo'");
            if (Array.isArray(idx) && idx.length) {
                await pool.query('ALTER TABLE agendamentos DROP COLUMN slot_ativo');
            }
        }catch(e) {
            if (!/dosen't exist|not exist/i.test(e.messege || '')) throw e;
        }

        await pool.query


}