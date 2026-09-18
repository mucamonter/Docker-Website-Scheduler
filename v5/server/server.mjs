import express from 'express';
import session from 'express-session';
import path from 'path';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import { pool } from './db.mjs';
const { adapter } = pool;


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT || 3000);
const HORARIOS = ['09:00','09:30','10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'];
const STATUS = ['cancelado','pedido_nao_atendido','pedido_atendido','pedido_pendente'];
const ATENDIMENTO = ['no_paco','marcado'];
const TIPOS_ATENDIMENTO = ['unico','grupo'];
const HORARIOS_BLOCO = HORARIOS.map(h => ({ inicio: h, fim: (() => { const [hh,mm]=h.split(':').map(Number); const d=new Date(2000,0,1,hh,mm+30); return `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`; })() }));
const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!ADMIN_USER || !ADMIN_PASSWORD || !process.env.SESSION_SECRET) {
  throw new Error('ADMIN_USER, ADMIN_PASSWORD e SESSION_SECRET devem estar configurados no ambiente.');
}

app.use(express.json({ limit: '100kb' }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax', secure: false, maxAge: 8 * 60 * 60 * 1000 }
}));

const texto = v => typeof v === 'string' ? v.trim() : '';
function dataValida(v) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
  const [a,m,d] = v.split('-').map(Number);
  const x = new Date(Date.UTC(a,m-1,d));
  return x.getUTCFullYear()===a && x.getUTCMonth()===m-1 && x.getUTCDate()===d;
}
function diaUtil(v) {
  const [a,m,d] = v.split('-').map(Number);
  return ![0,6].includes(new Date(Date.UTC(a,m-1,d)).getUTCDay());
}
function hoje() {
  return new Intl.DateTimeFormat('en-CA', { timeZone:'America/Sao_Paulo', year:'numeric', month:'2-digit', day:'2-digit' }).format(new Date());
}
function exigirAdmin(req,res,next) {
  if (req.session?.papel === 'admin' || req.session?.papel === 'visualizador') return next();
  return res.status(401).json({ mensagem:'Acesso administrativo necessário.' });
}
function exigirStaff(req,res,next) {
  if (req.session?.papel === 'admin' || req.session?.papel === 'visualizador') return next();
  return res.status(401).json({ mensagem:'Acesso ao painel necessário.' });
}
function exigirCidadao(req,res,next) {
  if (req.session?.papel === 'cidadao' && req.session?.cidadaoId) return next();
  return res.status(401).json({ mensagem:'Login de cidadão necessário.' });
}
function valorStatus(s) { return STATUS.includes(s) ? s : null; }
function valorAtendimento(s) { return ATENDIMENTO.includes(s) ? s : null; }
function valorTipo(s) { return TIPOS_ATENDIMENTO.includes(s) ? s : null; }
function normalizarParticipantes(lista) {
  if (!Array.isArray(lista)) return [];
  return lista.map(p => ({ nome: texto(p?.nome), telefone: texto(p?.telefone) })).filter(p => p.nome).slice(0, 100);
}
function blocosValidos(lista) {
  if (!Array.isArray(lista)) return [];
  return [...new Set(lista.map(texto))].filter(h => HORARIOS.includes(h));
}

async function colunaExiste(tabela, coluna) {
  const [rows] = await pool.execute(
    `SELECT COUNT(*) AS total
       FROM INFORMATION_SCHEMA.COLUMNS
      WHERE TABLE_SCHEMA = DATABASE()
        AND TABLE_NAME = ?
        AND COLUMN_NAME = ?`,
    [tabela, coluna]
  );
  return Number(rows[0]?.total || 0) > 0;
}

async function prepararBanco() {
  // Banco já existente: as alterações são feitas de forma idempotente.
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
    telefone VARCHAR(30) NULL,
    principal TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    INDEX idx_participante_agendamento (agendamento_id),
    CONSTRAINT fk_participante_agendamento FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
  ) ENGINE=InnoDB`);

  await pool.query(`CREATE TABLE IF NOT EXISTS agendamento_slots (
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
    const [idxs] = await pool.query("SHOW INDEX FROM agendamento_slots WHERE Key_name IN ('uk_agenda_slot','agenda_slot')");
    const nomes = [...new Set((idxs || []).map(i => i.Key_name).filter(Boolean))];
    for (const nome of nomes) {
      await pool.query(`ALTER TABLE agendamento_slots DROP INDEX \`${nome}\``);
    }
  } catch (e) {
    if (!/doesn't exist|not exist/i.test(e.message || '')) throw e;
  }

  try {
    const [idx] = await pool.query("SHOW INDEX FROM agendamentos WHERE Key_name = 'uk_agendamento_slot_ativo'");
    if (Array.isArray(idx) && idx.length) {
      await pool.query('ALTER TABLE agendamentos DROP INDEX uk_agendamento_slot_ativo');
    }
  } catch (e) {
    if (!/doesn't exist|not exist/i.test(e.message || '')) throw e;
  }

  try {
    const [col] = await pool.query("SHOW COLUMNS FROM agendamentos LIKE 'slot_ativo'");
    if (Array.isArray(col) && col.length) {
      await pool.query('ALTER TABLE agendamentos DROP COLUMN slot_ativo');
    }
  } catch (e) {
    if (!/doesn't exist|not exist/i.test(e.message || '')) throw e;
  }

  // Preenche os slots dos atendimentos existentes. Registros cancelados não ocupam horário.
  await pool.query("INSERT IGNORE INTO agendamento_slots (agendamento_id,data,horario_inicio) SELECT id,data,horario FROM agendamentos WHERE status <> 'cancelado'");

  // Migra status antigos antes de restringir o ENUM.
  const [statusCol] = await pool.query('SHOW COLUMNS FROM agendamentos LIKE \'status\'');
  if (!statusCol.length) {
    await pool.query("ALTER TABLE agendamentos ADD COLUMN status ENUM('cancelado','pedido_nao_atendido','pedido_atendido','pedido_pendente') NOT NULL DEFAULT 'pedido_pendente'");
  } else {
    // Primeiro ampliamos o ENUM para aceitar valores antigos e novos;
    // só depois fazemos a conversão e finalmente restringimos o ENUM.
    await pool.query("ALTER TABLE agendamentos MODIFY COLUMN status ENUM('cancelado','no_paco','no paço','atendido','pendente','agendado','feito','pedido_nao_atendido','pedido_atendido','pedido_pendente') NOT NULL DEFAULT 'pedido_pendente'");
    await pool.query("UPDATE agendamentos SET atendimento='no_paco' WHERE status='no_paco' OR status='no paço'");
    await pool.query("UPDATE agendamentos SET status='pedido_pendente' WHERE status='agendado' OR status='pendente' OR status='no_paco'");
    await pool.query("UPDATE agendamentos SET status='pedido_atendido' WHERE status='feito' OR status='atendido'");
    await pool.query("UPDATE agendamentos SET status='pedido_nao_atendido' WHERE status='pedido_nao_atendido'");
    await pool.query("ALTER TABLE agendamentos MODIFY COLUMN status ENUM('cancelado','pedido_nao_atendido','pedido_atendido','pedido_pendente') NOT NULL DEFAULT 'pedido_pendente'");
  }

  // A aplicação agora permite múltiplos atendimentos no mesmo horário. 
  // Por esse motivo, não há mais uma coluna/índice global de unicidade por slot.

  await pool.query(`CREATE TABLE IF NOT EXISTS usuarios_admin (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    papel ENUM('admin','visualizador') NOT NULL DEFAULT 'visualizador',
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uk_usuario_admin_email (email)
  ) ENGINE=InnoDB`);
}



app.get('/api/health', async (req,res) => {
  try { await pool.query('SELECT 1'); res.json({ok:true,database:process.env.DB_NAME||'V5_DB'}); }
  catch(e) { res.status(503).json({ok:false,mensagem:'Banco de dados indisponível.'}); }
});

app.post('/api/login', async (req,res) => {
  const login = texto(req.body.login).toLowerCase();
  const senha = typeof req.body.senha === 'string' ? req.body.senha : '';
  if (!login || !senha) return res.status(400).json({ mensagem:'Informe o login e a senha.' });
  try {
    if (login === ADMIN_USER.toLowerCase() && senha === ADMIN_PASSWORD) {
      return req.session.regenerate(err => {
        if (err) return res.status(500).json({mensagem:'Não foi possível iniciar a sessão.'});
        req.session.papel='admin'; req.session.usuario=ADMIN_USER;
        res.json({sucesso:true,tipo:'admin',redirect:'/admin.html'});
      });
    }
    const [staff] = await pool.execute('SELECT id,nome,email,senha_hash,papel FROM usuarios_admin WHERE LOWER(email)=? LIMIT 1',[login]);
    if (staff.length && await bcrypt.compare(senha, staff[0].senha_hash)) {
      return req.session.regenerate(err => {
        if (err) return res.status(500).json({mensagem:'Não foi possível iniciar a sessão.'});
        req.session.papel=staff[0].papel; req.session.usuario=staff[0].email; req.session.usuarioId=staff[0].id; req.session.usuarioNome=staff[0].nome;
        res.json({sucesso:true,tipo:staff[0].papel,redirect:'/admin.html'});
      });
    }
    const [rows]=await pool.execute('SELECT id,nome,email,senha_hash FROM cidadaos WHERE LOWER(email)=? LIMIT 1',[login]);
    if (!rows.length || !(await bcrypt.compare(senha, rows[0].senha_hash))) return res.status(401).json({mensagem:'Usuário ou senha inválidos.'});
    const c=rows[0];
    req.session.regenerate(err=>{
      if(err) return res.status(500).json({mensagem:'Não foi possível iniciar a sessão.'});
      req.session.papel='cidadao'; req.session.cidadaoId=c.id; req.session.cidadaoEmail=c.email; req.session.cidadaoNome=c.nome;
      res.json({sucesso:true,tipo:'cidadao',redirect:'/cidadao.html'});
    });
  } catch(e){ console.error('Erro no login:',e); res.status(500).json({mensagem:'Erro interno no servidor.'}); }
});

app.post('/api/logout',(req,res)=>req.session.destroy(()=>res.json({sucesso:true})));
app.get('/api/admin/me',(req,res)=>req.session?.papel ? res.json({autenticado:true,usuario:req.session.usuario||req.session.cidadaoEmail,papel:req.session.papel}) : res.status(401).json({autenticado:false}));

app.post('/api/cidadao/cadastro', async (req,res) => {
  const nome=texto(req.body.nome), email=texto(req.body.email).toLowerCase(), senha=typeof req.body.senha==='string'?req.body.senha:'', telefone=texto(req.body.telefone), cep=texto(req.body.cep), endereco=texto(req.body.endereco);
  if(!nome || !email || !senha) return res.status(400).json({mensagem:'Nome, e-mail e senha são obrigatórios.'});
  if(senha.length<6) return res.status(400).json({mensagem:'A senha deve ter pelo menos 6 caracteres.'});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({mensagem:'Informe um e-mail válido.'});
  try{
    const [existente]=await pool.execute('SELECT id FROM cidadaos WHERE email=?',[email]);
    if(existente.length) return res.status(409).json({mensagem:'Já existe uma conta com este e-mail.'});
    const hash=await bcrypt.hash(senha,12);
    const [r]=await pool.execute('INSERT INTO cidadaos (nome,email,telefone,senha_hash,cep,endereco) VALUES (?,?,?,?,?,?)',[nome,email,telefone||null,hash,cep||null,endereco||null]);
    res.status(201).json({sucesso:true,id:r.insertId});
  }catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível criar a conta.'});}
});

app.get('/api/cidadao/me',exigirCidadao,async(req,res)=>{
  try{const [rows]=await pool.execute('SELECT id,nome,email,telefone FROM cidadaos WHERE id=?',[req.session.cidadaoId]);if(!rows.length)return res.status(401).json({mensagem:'Conta não encontrada.'});res.json({cidadao:rows[0]});}
  catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível carregar a conta.'});}
});

app.get('/api/cidadao/meus-agendamentos',exigirCidadao,async(req,res)=>{
  try{
    const [rows]=await pool.execute(`SELECT a.id,a.nome,a.motivo,a.tratativa,DATE_FORMAT(a.data,'%d/%m/%Y') data_br,TIME_FORMAT(a.horario,'%H:%i') horario,a.email,a.telefone,a.status,a.atendimento FROM agendamentos a WHERE a.cidadao_id=? ORDER BY a.data DESC,a.horario DESC,a.id DESC`,[req.session.cidadaoId]);
    const [cid]=await pool.execute('SELECT id,nome,email,telefone FROM cidadaos WHERE id=?',[req.session.cidadaoId]);
    res.json({cidadao:cid[0],agendamentos:rows});
  }catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível carregar seus agendamentos.'});}
});

app.patch('/api/cidadao/agendamentos/:id/cancelar',exigirCidadao,async(req,res)=>{
  const id=Number(req.params.id); if(!Number.isInteger(id)||id<1)return res.status(400).json({mensagem:'ID inválido.'});
  const conn=await pool.getConnection();
  try{await conn.beginTransaction();const [r]=await conn.execute("UPDATE agendamentos SET status='cancelado' WHERE id=? AND cidadao_id=? AND status='pedido_pendente'",[id,req.session.cidadaoId]);if(!r.affectedRows){await conn.rollback();return res.status(404).json({mensagem:'Agendamento não encontrado ou não pode mais ser cancelado.'});}await conn.execute('DELETE FROM agendamento_slots WHERE agendamento_id=?',[id]);await conn.commit();res.json({sucesso:true});}
  catch(e){await conn.rollback();console.error(e);res.status(500).json({mensagem:'Não foi possível cancelar o agendamento.'});}finally{conn.release();}
});

app.get('/api/agendamentos/disponiveis', async(req,res)=>{
  const data=texto(req.query.data);
  if(!dataValida(data)) return res.status(400).json({mensagem:'Data inválida.'});
  if(!diaUtil(data)) return res.json({horariosOcupados:[],horariosDisponiveis:[]});
  res.json({horariosOcupados:[],horariosDisponiveis:HORARIOS});
});

app.post('/api/agendamentos',exigirCidadao,async(req,res)=>{
  const motivo=texto(req.body.motivo),data=texto(req.body.data),horario=texto(req.body.horario);
  if(!motivo||!data||!horario)return res.status(400).json({mensagem:'Informe o motivo, a data e o horário.'});
  if(!dataValida(data)||data<hoje()||!diaUtil(data)||!HORARIOS.includes(horario))return res.status(400).json({mensagem:'Data ou horário inválido.'});
  const conn=await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [c]=await conn.execute('SELECT id,nome,email,telefone FROM cidadaos WHERE id=? LIMIT 1',[req.session.cidadaoId]);
    if(!c.length){await conn.rollback();return res.status(401).json({mensagem:'Conta de cidadão não encontrada.'});}
    const x=c[0];
    const [r]=await conn.execute("INSERT INTO agendamentos (cidadao_id,nome,motivo,data,horario,email,telefone,status,atendimento,tipo_atendimento) VALUES (?,?,?,?,?,?,?,'pedido_pendente','marcado','unico')",[x.id,x.nome,motivo,data,`${horario}:00`,x.email,x.telefone||null]);
    await conn.execute('INSERT INTO agendamento_slots (agendamento_id,data,horario_inicio) VALUES (?,?,?)',[r.insertId,data,`${horario}:00`]);
    await conn.commit();
    res.status(201).json({sucesso:true,id:r.insertId,data,horario});
  } catch(e) { await conn.rollback(); if(e.code==='ER_DUP_ENTRY')return res.status(409).json({mensagem:'Este horário já está reservado. Escolha outro horário.'}); console.error(e); res.status(500).json({mensagem:'Não foi possível salvar o agendamento.'}); } finally { conn.release(); }
});

function aplicarBuscaAgendamentos(req, isViewer){
  const data=texto(req.query.data), busca=texto(req.query.busca), status=texto(req.query.status), atendimento=texto(req.query.atendimento);
  const where=[],params=[];
  if(data){if(!dataValida(data))throw new Error('Data inválida.');where.push('a.data=?');params.push(data);}
  if(status){if(!STATUS.includes(status))throw new Error('Status inválido.');where.push('a.status=?');params.push(status);}
  if(atendimento){if(!ATENDIMENTO.includes(atendimento))throw new Error('Tipo de atendimento inválido.');where.push('a.atendimento=?');params.push(atendimento);}
  if(busca){const t=`%${busca}%`;where.push(`(a.nome LIKE ? OR a.email LIKE ? OR a.telefone LIKE ? OR a.cep LIKE ? OR a.endereco LIKE ? OR a.motivo LIKE ? OR a.tratativa LIKE ? OR CAST(a.data AS CHAR) LIKE ? OR TIME_FORMAT(a.horario,'%H:%i') LIKE ? OR a.status LIKE ? OR a.atendimento LIKE ? OR EXISTS (SELECT 1 FROM agendamento_participantes gp WHERE gp.agendamento_id=a.id AND (gp.nome LIKE ? OR gp.telefone LIKE ?)))`);params.push(t,t,t,t,t,t,t,t,t,t,t,t,t);}
  return {where,params};
}

app.get('/api/admin/horarios',exigirStaff,async(req,res)=>{
  const data=texto(req.query.data);
  if(!dataValida(data)||!diaUtil(data)) return res.json({horariosOcupados:[],horariosDisponiveis:[]});
  res.json({horariosOcupados:[],horariosDisponiveis:HORARIOS});
});

app.get('/api/admin/agendamentos',exigirStaff,async(req,res)=>{
  try{
    const isViewer=req.session.papel==='visualizador'; const {where,params}=aplicarBuscaAgendamentos(req,isViewer);
    const limit=500;
    const sql=`SELECT a.id,a.nome,a.motivo,a.tratativa,DATE_FORMAT(a.data,'%Y-%m-%d') data,TIME_FORMAT(a.horario,'%H:%i') horario,a.email,a.telefone,a.cep,a.endereco,DATE_FORMAT(a.data_registro,'%Y-%m-%d %H:%i:%s') data_registro,a.status,a.atendimento,a.tipo_atendimento,a.cidadao_id,(SELECT COUNT(*) FROM agendamento_participantes gp2 WHERE gp2.agendamento_id=a.id) participantes_total FROM agendamentos a ${where.length?'WHERE '+where.join(' AND '):''} ORDER BY a.data ASC,a.horario ASC,a.id ASC LIMIT ${limit}`;
    const [rows]=await pool.execute(sql,params);res.json({agendamentos:rows,papel:req.session.papel});
  }catch(e){res.status(400).json({mensagem:e.message||'Não foi possível carregar os agendamentos.'});}
});

app.get('/api/admin/agendamentos/:id/detalhes',exigirAdmin,async(req,res)=>{
  const id=Number(req.params.id);
  if(!Number.isInteger(id)||id<1)return res.status(400).json({mensagem:'ID inválido.'});
  try {
    const [p]=await pool.execute('SELECT nome,telefone,principal FROM agendamento_participantes WHERE agendamento_id=? ORDER BY principal DESC,id ASC',[id]);
    const [s]=await pool.execute("SELECT TIME_FORMAT(horario_inicio,'%H:%i') horario FROM agendamento_slots WHERE agendamento_id=? ORDER BY horario_inicio ASC",[id]);
    res.json({participantes:p,blocos:s.map(x=>x.horario)});
  } catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível carregar os detalhes.'});}
});

app.get('/api/admin/pendencias',exigirAdmin,async(req,res)=>{
  try{
    const [rows]=await pool.execute(`SELECT a.id,a.nome,a.motivo,a.tratativa,DATE_FORMAT(a.data,'%Y-%m-%d') data,TIME_FORMAT(a.horario,'%H:%i') horario,a.email,a.telefone,a.status,a.atendimento FROM agendamentos a WHERE a.status='pedido_pendente' AND (a.tratativa IS NULL OR TRIM(a.tratativa)='') ORDER BY a.data ASC,a.horario ASC,a.id ASC`);
    res.json({agendamentos:rows});
  }catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível carregar as pendências.'});}
});

app.post('/api/admin/agendamentos',exigirAdmin,async(req,res)=>{
  const nome=texto(req.body.nome),email=texto(req.body.email).toLowerCase(),telefone=texto(req.body.telefone),endereco=texto(req.body.endereco),motivo=texto(req.body.motivo),data=texto(req.body.data),horario=texto(req.body.horario),atendimento=valorAtendimento(texto(req.body.atendimento))||'no_paco',tipo=valorTipo(texto(req.body.tipo_atendimento))||'unico';
  const participantes=normalizarParticipantes(req.body.participantes);
  const blocos=blocosValidos(req.body.blocos);
  if(!nome||!motivo||!data)return res.status(400).json({mensagem:'Nome, motivo e data são obrigatórios.'});
  if(!dataValida(data)||data<hoje()||!diaUtil(data))return res.status(400).json({mensagem:'Data inválida.'});
  if(tipo==='grupo'){
    if(!participantes.length) return res.status(400).json({mensagem:'Adicione pelo menos o representante do grupo.'});
    if(!blocos.length) return res.status(400).json({mensagem:'Selecione pelo menos um bloco de horário.'});
  }
  const conn=await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [r]=await conn.execute("INSERT INTO agendamentos (nome,email,telefone,endereco,motivo,data,horario,status,atendimento,tipo_atendimento,blocos_json) VALUES (?,?,?,?,?,?,?,'pedido_pendente', ?, ?, ?)",[nome,email||null,telefone||null,endereco||null,motivo,data,`${(tipo==='grupo'?blocos[0]:horario)}:00`,atendimento,tipo,tipo==='grupo'?JSON.stringify(blocos):null]);
    const slots=tipo==='grupo'?blocos:[horario];
    for(const h of slots) await conn.execute('INSERT INTO agendamento_slots (agendamento_id,data,horario_inicio) VALUES (?,?,?)',[r.insertId,data,`${h}:00`]);
    if(tipo==='grupo'){
      for(let i=0;i<participantes.length;i++) await conn.execute('INSERT INTO agendamento_participantes (agendamento_id,nome,telefone,principal) VALUES (?,?,?,?)',[r.insertId,participantes[i].nome,participantes[i].telefone||null,i===0?1:0]);
    }
    await conn.commit(); res.status(201).json({sucesso:true,id:r.insertId});
  } catch(e) { await conn.rollback(); if(e.code==='ER_DUP_ENTRY')return res.status(409).json({mensagem:'Um ou mais blocos de horário já estão ocupados.'}); console.error(e); res.status(500).json({mensagem:'Não foi possível criar o atendimento.'}); } finally { conn.release(); }
});

app.patch('/api/admin/agendamentos/:id',exigirAdmin,async(req,res)=>{
  const id=Number(req.params.id),nome=texto(req.body.nome),email=texto(req.body.email),telefone=texto(req.body.telefone),endereco=texto(req.body.endereco),motivo=texto(req.body.motivo),data=texto(req.body.data),horario=texto(req.body.horario),status=valorStatus(texto(req.body.status)),atendimento=valorAtendimento(texto(req.body.atendimento)),tratativa=texto(req.body.tratativa),tipo=valorTipo(texto(req.body.tipo_atendimento))||'unico';
  const participantes=normalizarParticipantes(req.body.participantes),blocos=blocosValidos(req.body.blocos);
  if(!Number.isInteger(id)||id<1)return res.status(400).json({mensagem:'ID inválido.'});
  if(!nome||!motivo||!data||!status||!atendimento)return res.status(400).json({mensagem:'Preencha os dados obrigatórios.'});
  if(!dataValida(data)||data<hoje()||!diaUtil(data))return res.status(400).json({mensagem:'Data inválida.'});
  if(status==='pedido_atendido'&&!tratativa)return res.status(400).json({mensagem:'Informe a tratativa para concluir o atendimento.'});
  if(tipo==='grupo'){if(!participantes.length)return res.status(400).json({mensagem:'Adicione pelo menos o representante do grupo.'});if(!blocos.length)return res.status(400).json({mensagem:'Selecione pelo menos um bloco de horário.'});}
  const conn=await pool.getConnection();
  try {
    await conn.beginTransaction();
    const [r]=await conn.execute('UPDATE agendamentos SET nome=?,email=?,telefone=?,endereco=?,motivo=?,data=?,horario=?,status=?,atendimento=?,tipo_atendimento=?,blocos_json=?,tratativa=? WHERE id=?',[nome,email||null,telefone||null,endereco||null,motivo,data,`${(tipo==='grupo'?blocos[0]:horario)}:00`,status,atendimento,tipo,tipo==='grupo'?JSON.stringify(blocos):null,status==='pedido_atendido'?tratativa:null,id]);
    if(!r.affectedRows){await conn.rollback();return res.status(404).json({mensagem:'Atendimento não encontrado.'});}
    await conn.execute('DELETE FROM agendamento_slots WHERE agendamento_id=?',[id]);
    if(status!=='cancelado'){for(const h of (tipo==='grupo'?blocos:[horario])) await conn.execute('INSERT INTO agendamento_slots (agendamento_id,data,horario_inicio) VALUES (?,?,?)',[id,data,`${h}:00`]);}
    await conn.execute('DELETE FROM agendamento_participantes WHERE agendamento_id=?',[id]);
    if(tipo==='grupo') for(let i=0;i<participantes.length;i++) await conn.execute('INSERT INTO agendamento_participantes (agendamento_id,nome,telefone,principal) VALUES (?,?,?,?)',[id,participantes[i].nome,participantes[i].telefone||null,i===0?1:0]);
    await conn.commit();res.json({sucesso:true});
  } catch(e) {await conn.rollback();if(e.code==='ER_DUP_ENTRY')return res.status(409).json({mensagem:'Um ou mais blocos de horário já estão ocupados.'});console.error(e);res.status(500).json({mensagem:'Não foi possível editar o atendimento.'});} finally {conn.release();}
});

app.delete('/api/admin/agendamentos/:id',exigirStaff,async(req,res)=>{
  const id=Number(req.params.id);
  if(!Number.isInteger(id)||id<1)return res.status(400).json({mensagem:'ID inválido.'});
  try{
    const [r]=await pool.execute('DELETE FROM agendamentos WHERE id=?',[id]);
    if(!r.affectedRows)return res.status(404).json({mensagem:'Atendimento não encontrado.'});
    res.json({sucesso:true});
  }catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível excluir o atendimento.'});}
});

app.patch('/api/admin/agendamentos/:id/status',exigirAdmin,async(req,res)=>{
  const id=Number(req.params.id),status=valorStatus(texto(req.body.status)),tratativa=texto(req.body.tratativa);
  if(!Number.isInteger(id)||id<1||!status)return res.status(400).json({mensagem:'Status inválido.'});
  if(status==='pedido_atendido'&&!tratativa)return res.status(400).json({mensagem:'Informe a tratativa ao concluir o atendimento.'});
  const conn=await pool.getConnection();
  try{await conn.beginTransaction();const [a]=await conn.execute('SELECT data,horario,tipo_atendimento,blocos_json FROM agendamentos WHERE id=? FOR UPDATE',[id]);if(!a.length){await conn.rollback();return res.status(404).json({mensagem:'Atendimento não encontrado.'});}
    await conn.execute('UPDATE agendamentos SET status=?,tratativa=? WHERE id=?',[status,status==='pedido_atendido'?tratativa:null,id]);
    if(status==='cancelado') await conn.execute('DELETE FROM agendamento_slots WHERE agendamento_id=?',[id]);
    else {const [slots]=await conn.execute('SELECT horario_inicio FROM agendamento_slots WHERE agendamento_id=?',[id]);if(!slots.length){const blocos=Array.isArray(a[0].blocos_json)?a[0].blocos_json:(typeof a[0].blocos_json==='string'?JSON.parse(a[0].blocos_json||'[]'):[]);const hs=a[0].tipo_atendimento==='grupo'&&blocos.length?blocos:[a[0].horario.toString().slice(0,5)];for(const h of hs) await conn.execute('INSERT INTO agendamento_slots (agendamento_id,data,horario_inicio) VALUES (?,?,?)',[id,a[0].data,h+':00']);}}
    await conn.commit();res.json({sucesso:true});}catch(e){await conn.rollback();if(e.code==='ER_DUP_ENTRY')return res.status(409).json({mensagem:'O horário está ocupado por outro atendimento.'});console.error(e);res.status(500).json({mensagem:'Não foi possível alterar o status.'});}finally{conn.release();}
});

app.get('/api/admin/usuarios',exigirAdmin,async(req,res)=>{try{const [rows]=await pool.execute("SELECT id,nome,email,papel,DATE_FORMAT(criado_em,'%d/%m/%Y %H:%i') criado_em FROM usuarios_admin ORDER BY nome ASC");res.json({usuarios:rows});}catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível carregar os usuários.'});}});
app.post('/api/admin/usuarios',exigirAdmin,async(req,res)=>{const nome=texto(req.body.nome),email=texto(req.body.email).toLowerCase(),senha=typeof req.body.senha==='string'?req.body.senha:'',papel=texto(req.body.papel);if(!nome||!email||senha.length<6||!['admin','visualizador'].includes(papel))return res.status(400).json({mensagem:'Nome, e-mail, senha e perfil válidos são obrigatórios.'});try{const [ex]=await pool.execute('SELECT id FROM usuarios_admin WHERE email=?',[email]);if(ex.length)return res.status(409).json({mensagem:'Já existe um usuário com esse e-mail.'});const hash=await bcrypt.hash(senha,12);await pool.execute('INSERT INTO usuarios_admin (nome,email,senha_hash,papel) VALUES (?,?,?,?)',[nome,email,hash,papel]);res.status(201).json({sucesso:true});}catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível criar o usuário.'});}});
app.patch('/api/admin/usuarios/:id',exigirAdmin,async(req,res)=>{const id=Number(req.params.id),senha=typeof req.body.senha==='string'?req.body.senha:'',papel=texto(req.body.papel),nome=texto(req.body.nome);if(!Number.isInteger(id)||!nome||!['admin','visualizador'].includes(papel))return res.status(400).json({mensagem:'Dados inválidos.'});try{if(senha){if(senha.length<6)return res.status(400).json({mensagem:'A senha deve ter pelo menos 6 caracteres.'});const hash=await bcrypt.hash(senha,12);await pool.execute('UPDATE usuarios_admin SET nome=?,papel=?,senha_hash=? WHERE id=?',[nome,papel,hash,id]);}else await pool.execute('UPDATE usuarios_admin SET nome=?,papel=? WHERE id=?',[nome,papel,id]);res.json({sucesso:true});}catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível alterar o usuário.'});}});
app.delete('/api/admin/usuarios/:id',exigirAdmin,async(req,res)=>{const id=Number(req.params.id);if(!Number.isInteger(id)||id<1)return res.status(400).json({mensagem:'ID inválido.'});if(id===req.session.usuarioId)return res.status(400).json({mensagem:'Você não pode excluir o próprio usuário nesta tela.'});try{const [r]=await pool.execute('DELETE FROM usuarios_admin WHERE id=?',[id]);if(!r.affectedRows)return res.status(404).json({mensagem:'Usuário não encontrado.'});res.json({sucesso:true});}catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível excluir o usuário.'});}});

app.get('/api/admin/cidadaos',exigirAdmin,async(req,res)=>{const busca=texto(req.query.busca);try{const where=[];const params=[];if(busca){const t=`%${busca}%`;where.push('(c.nome LIKE ? OR c.email LIKE ? OR c.telefone LIKE ?)');params.push(t,t,t);}const [rows]=await pool.execute(`SELECT c.id,c.nome,c.email,c.telefone,DATE_FORMAT(c.criado_em,'%d/%m/%Y %H:%i') criado_em FROM cidadaos c ${where.length?'WHERE '+where.join(' AND '):''} ORDER BY c.nome ASC LIMIT 500`,params);res.json({cidadaos:rows});}catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível carregar os cidadãos.'});}});
app.get('/api/admin/cidadaos/:id',exigirAdmin,async(req,res)=>{const id=Number(req.params.id);if(!Number.isInteger(id)||id<1)return res.status(400).json({mensagem:'ID inválido.'});try{const [c]=await pool.execute('SELECT id,nome,email,telefone,DATE_FORMAT(criado_em,\'%d/%m/%Y %H:%i\') criado_em FROM cidadaos WHERE id=?',[id]);if(!c.length)return res.status(404).json({mensagem:'Cidadão não encontrado.'});const [a]=await pool.execute(`SELECT id,motivo,DATE_FORMAT(data,'%d/%m/%Y') data_br,TIME_FORMAT(horario,'%H:%i') horario,status,atendimento,tratativa FROM agendamentos WHERE cidadao_id=? ORDER BY data DESC,horario DESC,id DESC`,[id]);res.json({cidadao:c[0],agendamentos:a});}catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível carregar o cidadão.'});}});
app.patch('/api/admin/cidadaos/:id/senha',exigirAdmin,async(req,res)=>{const id=Number(req.params.id),senha=typeof req.body.senha==='string'?req.body.senha:'';if(!Number.isInteger(id)||senha.length<6)return res.status(400).json({mensagem:'Informe uma senha com pelo menos 6 caracteres.'});try{const hash=await bcrypt.hash(senha,12);const [r]=await pool.execute('UPDATE cidadaos SET senha_hash=? WHERE id=?',[hash,id]);if(!r.affectedRows)return res.status(404).json({mensagem:'Cidadão não encontrado.'});res.json({sucesso:true});}catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível alterar a senha.'});}});

app.get('/',(req,res)=>res.sendFile(path.join(__dirname,'..','app','login.html')));
app.get('/login',(req,res)=>res.sendFile(path.join(__dirname,'..','app','login.html')));
app.get('/agendamento',(req,res)=>res.sendFile(path.join(__dirname,'..','app','agendamento.html')));
app.get('/admin',(req,res,next)=>req.session?.papel==='admin'||req.session?.papel==='visualizador'?res.sendFile(path.join(__dirname,'..','app','admin.html')):res.redirect('/login.html'));
app.get('/admin.html',(req,res,next)=>req.session?.papel==='admin'||req.session?.papel==='visualizador'?res.sendFile(path.join(__dirname,'..','app','admin.html')):res.redirect('/login.html'));
app.get('/cadastro',(req,res)=>res.sendFile(path.join(__dirname,'..','app','cadastro.html')));
app.get('/cidadao',(req,res)=>req.session?.papel==='cidadao'?res.sendFile(path.join(__dirname,'..','app','cidadao.html')):res.redirect('/login.html'));
app.get('/cidadao.html',(req,res)=>req.session?.papel==='cidadao'?res.sendFile(path.join(__dirname,'..','app','cidadao.html')):res.redirect('/login.html'));
app.use(express.static(path.join(__dirname,'..','app')));
app.use((req,res,next)=>{if(req.method==='GET'&&!req.path.startsWith('/api/'))return res.sendFile(path.join(__dirname,'..','app','login.html'));next();});

async function iniciar(){
  try { await prepararBanco(); console.log('Banco de dados preparado com sucesso.'); app.listen(PORT,'0.0.0.0',()=>console.log(`Servidor iniciado na porta ${PORT}`)); }
  catch(e){ console.error('Não foi possível preparar o banco de dados:',e); process.exit(1); }
}
iniciar();
