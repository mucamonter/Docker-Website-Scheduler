
import express,  { type Request, type Response, type NextFunction } from 'express';
import { defineConfig } from "prisma/config";
import { PrismaClient } from './generated/prisma/client';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import bcrypt from 'bcryptjs';
import { dataValida } from './db';
import { exigirCidadao } from './funcionts';
import { diaUtil } from './funcionts';
import { exigirStaff } from './funcionts';
import { hoje } from './funcionts';
import { aplicarBuscaAgendamentos } from './funcionts';
import { exigirAdmin } from './funcionts';
import { valorAtendimento } from './funcionts';
import { valorStatus } from './funcionts';
import { valorTipo } from './funcionts';
import { normalizarParticipantes } from './funcionts';
import { blocosValidos } from './funcionts';
import type { DataISO } from './types/data';
import { agendamentos_tipo_atendimento } from './generated/prisma/enums';



const app = express();
const adapter = new PrismaMariaDb({
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'Ardmim321',
  database: 'V2_DB',
  connectTimeout: 5000, 
  connectionLimit: 10
});
const prisma = new PrismaClient({ adapter });
const ADMIN_USER: any = process.env.ADMIN_USER;
const ADMIN_PASSWORD: any = process.env.ADMIN_PASSWORD;

const HORARIOS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
const STATUS = ['cancelado', 'pedido_nao_atendido', 'pedido_atendido', 'pedido_pendente'];
const ATENDIMENTO = ['no_paco', 'marcado'];

const texto  = (v:string) => typeof v === 'string' ? v.trim() : '';



app.get('/api/health', async (req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true, database: process.env.DB_NAME || 'V2_DB' });
  }
  catch (e:any) {
    res.status(503).json({ ok: false, mensagem: 'Banco de dados indisponível.' });
  }
});

app.post('/api/login', async (req: Request, res: Response) => {
  const login = texto(req.body.login).toLowerCase();
  const senha = typeof req.body.senha === 'string' ? req.body.senha : '';
  if (!login || !senha) return res.status(400).json({ mensagem: 'Informe o login e a senha.' });
  try {
    if (login === ADMIN_USER.toLowerCase() && senha === ADMIN_PASSWORD) {
      return req.session.regenerate(err => {
        if (err) return res.status(500).json({ mensagem: 'Não foi possível iniciar a sessão.' });
        req.session.papel = 'admin'; req.session.usuario = ADMIN_USER;
        res.json({ sucesso: true, tipo: 'admin', redirect: '/admin.html' });
      });
    }
    const staff = await prisma.$queryRaw<Array<{ id: number; nome: string; email: string; senha_hash: string; papel: string }>>`SELECT id,nome,email,senha_hash,papel FROM usuarios_admin WHERE LOWER(email)= ${login} LIMIT 1`;

    const staffUser = staff[0];
    if (staffUser && await bcrypt.compare(senha, staffUser.senha_hash)) {
      return req.session.regenerate(err => {
        if (err) return res.status(500).json({ mensagem: 'Não foi possível iniciar a sessão.' });
        req.session.papel = staffUser.papel; req.session.usuario = staffUser.email; req.session.usuarioId = staffUser.id; req.session.usuarioNome = staffUser.nome;
        res.json({ sucesso: true, tipo: staffUser.papel, redirect: '/admin.html' });
      });
    }
    const rows = await prisma.$executeRaw`SELECT id,nome,email,senha_hash FROM cidadaos WHERE LOWER(email)= ${login} LIMIT 1`;
    if (!rows.length || !(await bcrypt.compare(senha, rows[0].senha_hash))) return res.status(401).json({ mensagem: 'Usuário ou senha inválidos.' });
    const c = rows[0];
    req.session.regenerate(err => {
      if (err) return res.status(500).json({ mensagem: 'Não foi possível iniciar a sessão.' });
      req.session.papel = 'cidadao'; req.session.cidadaoId = c.id; req.session.cidadaoEmail = c.email; req.session.cidadaoNome = c.nome;
      res.json({ sucesso: true, tipo: 'cidadao', redirect: '/cidadao.html' });
    });
  } catch (e:any) { console.error('Erro no login:', e); res.status(500).json({ mensagem: 'Erro interno no servidor.' }); }
});

app.post('/api/logout', (req: Request, res: Response) => req.session.destroy(() => res.json({ sucesso: true })));
app.get('/api/admin/me', (req: Request, res: Response) => req.session?.papel ? res.json({ autenticado: true, usuario: req.session.usuario || req.session.cidadaoEmail, papel: req.session.papel }) : res.status(401).json({ autenticado: false }));

app.post('/api/cidadao/cadastro', async (req: Request, res: Response) => {
  const nome = texto(req.body.nome), email = texto(req.body.email).toLowerCase(), senha = typeof req.body.senha === 'string' ? req.body.senha : '', telefone = texto(req.body.telefone), cep = texto(req.body.cep), endereco = texto(req.body.endereco);
  if (!nome || !email || !senha) return res.status(400).json({ mensagem: 'Nome, e-mail e senha são obrigatórios.' });
  if (senha.length < 6) return res.status(400).json({ mensagem: 'A senha deve ter pelo menos 6 caracteres.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ mensagem: 'Informe um e-mail válido.' });
  try {
    const existente = await prisma.$executeRaw`SELECT id FROM cidadaos WHERE email= ${email}`;
    if (existente.length) return res.status(409).json({ mensagem: 'Já existe uma conta com este e-mail.' });
    const hash = await bcrypt.hash(senha, 12);
    const r = await prisma.$queryRaw`INSERT INTO cidadaos (nome,email,telefone,senha_hash,cep,endereco) VALUES (${nome},${email},${telefone},${hash},${cep},${endereco})`;
    res.status(201).json({ sucesso: true, id: r.insertId });
  } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível criar a conta.' }); }
});

app.get('/api/cidadao/me', exigirCidadao, async (req: Request, res: Response) => {
  try { const rows = await prisma.$executeRaw`SELECT id,nome,email,telefone FROM cidadaos WHERE id=${req.session.cidadaoId}`;
   if (!rows.length) return res.status(401).json({ mensagem: 'Conta não encontrada.' }); res.json({ cidadao: rows }); }
  catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível carregar a conta.' }); }
});

app.get('/api/cidadao/meus-agendamentos', exigirCidadao, async (req: Request, res: Response) => {
  try {
    const rows = await prisma.$executeRaw`SELECT a.id,a.nome,a.motivo,a.tratativa,DATE_FORMAT(a.data,'%d/%m/%Y') data_br,TIME_FORMAT(a.horario,'%H:%i') horario,a.email,a.telefone,a.status,a.atendimento FROM agendamentos a WHERE a.cidadao_id=${req.session.cidadaoId} ORDER BY a.data DESC,a.horario DESC,a.id DESC`;
    const cid = await prisma.$executeRaw`SELECT id,nome,email,telefone FROM cidadaos WHERE id=${req.session.cidadaoId}`;
    res.json({ cidadao: cid[0], agendamentos: rows });
  } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível carregar seus agendamentos.' }); }
});

app.patch('/api/cidadao/agendamentos/:id/cancelar', exigirCidadao, async (req: Request, res: Response) => {
  const id = Number(req.params.id); if (!Number.isInteger(id) || id < 1) return res.status(400).json({ mensagem: 'ID inválido.' });
  const conn = await prisma.$connect();
  try { await conn.beginTransaction(); const [r] = await conn.execute("UPDATE agendamentos SET status='cancelado' WHERE id=? AND cidadao_id=? AND status='pedido_pendente'", [id, req.session.cidadaoId]); if (!r.affectedRows) { await conn.rollback(); return res.status(404).json({ mensagem: 'Agendamento não encontrado ou não pode mais ser cancelado.' }); } await conn.execute('DELETE FROM agendamento_slots WHERE agendamento_id=?', [id]); await conn.commit(); res.json({ sucesso: true }); }
  catch (e:any) { await conn.rollback(); console.error(e); res.status(500).json({ mensagem: 'Não foi possível cancelar o agendamento.' }); } finally { conn.release(); }
});

app.get('/api/agendamentos/disponiveis', async (req: Request, res: Response) => {
  const data = texto(typeof req.query.data === 'string' ? req.query.data : '');
  if (!dataValida(data)) return res.status(400).json({ mensagem: 'Data inválida.' });
  if (!diaUtil(data)) return res.json({ horariosOcupados: [], horariosDisponiveis: [] });
  res.json({ horariosOcupados: [], horariosDisponiveis: HORARIOS });
});

app.post('/api/agendamentos', exigirCidadao, async (req: Request, res: Response) => {
  const motivo = texto(req.body.motivo), data = texto(req.body.data), horario = texto(req.body.horario);
  if (!motivo || !data || !horario) return res.status(400).json({ mensagem: 'Informe o motivo, a data e o horário.' });
  if (!dataValida(data) || data < hoje() || !diaUtil(data) || !HORARIOS.includes(horario)) return res.status(400).json({ mensagem: 'Data ou horário inválido.' });
  const conn = await prisma.$connect();
  try {
    await conn.beginTransaction();
    const [c] = await conn.execute('SELECT id,nome,email,telefone FROM cidadaos WHERE id=? LIMIT 1', [req.session.cidadaoId]);
    if (!c.length) { await conn.rollback(); return res.status(401).json({ mensagem: 'Conta de cidadão não encontrada.' }); }
    const x = c[0];
    const [r] = await conn.execute("INSERT INTO agendamentos (cidadao_id,nome,motivo,data,horario,email,telefone,status,atendimento,tipo_atendimento) VALUES (?,?,?,?,?,?,?,'pedido_pendente','marcado','unico')", [x.id, x.nome, motivo, data, `${horario}:00`, x.email, x.telefone || null]);
    await conn.execute('INSERT INTO agendamento_slots (agendamento_id,data,horario_inicio) VALUES (?,?,?)', [r.insertId, data, `${horario}:00`]);
    await conn.commit();
    res.status(201).json({ sucesso: true, id: r.insertId, data, horario });
  } catch (e:any) { await conn.rollback(); if (e.code === 'ER_DUP_ENTRY') return res.status(409).json({ mensagem: 'Este horário já está reservado. Escolha outro horário.' }); console.error(e); res.status(500).json({ mensagem: 'Não foi possível salvar o agendamento.' }); } finally { conn.release(); }
});



app.get('/api/admin/horarios', exigirStaff, async (req: Request, res: Response) => {
  const data = texto(typeof req.query.data === 'string' ? req.query.data : '');
  if (!dataValida(data) || !diaUtil(data)) return res.json({ horariosOcupados: [], horariosDisponiveis: [] });
  res.json({ horariosOcupados: [], horariosDisponiveis: HORARIOS });
});

app.get('/api/admin/agendamentos', exigirStaff, async (req: Request, res: Response) => {
  try {
    const isViewer = req.session.papel === 'visualizador';
    const { where, params } = aplicarBuscaAgendamentos(req, isViewer);
    const limit = 500;
    const sql = `SELECT a.id,a.nome,a.motivo,a.tratativa,DATE_FORMAT(a.data,'%Y-%m-%d') data,TIME_FORMAT(a.horario,'%H:%i') horario,a.email,a.telefone,a.cep,a.endereco,DATE_FORMAT(a.data_registro,'%Y-%m-%d %H:%i:%s') data_registro,a.status,a.atendimento,a.tipo_atendimento,a.cidadao_id,(SELECT COUNT(*) FROM agendamento_participantes gp2 WHERE gp2.agendamento_id=a.id) participantes_total FROM agendamentos a ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY a.data ASC,a.horario ASC,a.id ASC LIMIT ${limit}`;
    const rows = await prisma.$executeRaw(prisma.raw(sql), ...params);
    
    res.json({ agendamentos: rows, papel: req.session.papel });
  } catch (e:any) { res.status(400).json({ mensagem: e.message || 'Não foi possível carregar os agendamentos.' }); }
});

app.get('/api/admin/agendamentos/:id/detalhes', exigirAdmin, async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ mensagem: 'ID inválido.' });
  try {
    const p = await prisma.$queryRaw`SELECT nome,telefone,principal FROM agendamento_participantes WHERE agendamento_id=${id} ORDER BY principal DESC,id ASC`;
    const s = await prisma.$queryRaw<{ horario: string}>`SELECT TIME_FORMAT(horario_inicio,'%H:%i') AS horario FROM agendamento_slots WHERE agendamento_id=${id} ORDER BY horario_inicio ASC`;
    res.json({ participantes: p, blocos: s.map(x => x.horario) });
  } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível carregar os detalhes.' }); }
});

app.get('/api/admin/pendencias', exigirAdmin, async (req: Request, res: Response) => {
  try {
    const rows = await prisma.$executeRaw`SELECT a.id,a.nome,a.motivo,a.tratativa,DATE_FORMAT(a.data,'%Y-%m-%d') data,TIME_FORMAT(a.horario,'%H:%i') horario,a.email,a.telefone,a.status,a.atendimento FROM agendamentos a WHERE a.status='pedido_pendente' AND (a.tratativa IS NULL OR TRIM(a.tratativa)='') ORDER BY a.data ASC,a.horario ASC,a.id ASC`;
    res.json({ agendamentos: rows });
  } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível carregar as pendências.' }); }
});

app.post('/api/admin/agendamentos', exigirAdmin, async (req: Request, res: Response) => {   
  const nome = texto(req.body.nome);
  const email = texto(req.body.email).toLowerCase();
  const telefone = texto(req.body.telefone);
  const endereco = texto(req.body.endereco);
  const motivo = texto(req.body.motivo);
  const data = texto(req.body.data);
  const horario = texto(req.body.horario);
  
  const atendimento = valorAtendimento(texto(req.body.atendimento) as DataISO ) || 'no_paco';

  if (!dataValida(atendimento) || atendimento < hoje() || !diaUtil(atendimento)) { 
  return res.status(400).json({ mensagem: 'Data inválida.' });   
}
  
  // CORREÇÃO AQUI: Mudado de ":" para "=" e removido o "typeof"
  const tipo = valorTipo(texto(req.body.tipo_atendimento) as DataISO) || 'unico';   
  
  const participantes = normalizarParticipantes(req.body.participantes);   
  const blocos = blocosValidos(req.body.blocos);   
  
  // Validações de campos obrigatórios
  if (!nome || !motivo || !data) {
    return res.status(400).json({ mensagem: 'Nome, motivo e data são obrigatórios.' });   
  }
  
  // Validações de regras de negócio da data
  if (!dataValida(data) || data < hoje() || !diaUtil(data)) {
    return res.status(400).json({ mensagem: 'Data inválida.' });   
  }
  
  // Validações para atendimento em grupo
  if (tipo === 'grupo') {      
    if (!participantes.length) {
      return res.status(400).json({ mensagem: 'Adicione pelo menos o representante do grupo.' });     
    }
    if (!blocos.length) {
      return res.status(400).json({ mensagem: 'Selecione pelo menos um bloco de horário.' });   
    }
  }
  try {
 
  const resultado = await prisma.$transaction(async (tx) => {
    
    // 1. Executa o INSERT principal
    // Nota: O Prisma retorna o número de linhas afetadas no \$executeRaw, 
    // mas se você precisa do ID inserido no MySQL, usamos \$queryRaw para capturar o LAST_INSERT_ID()
    await tx.$executeRawUnsafe(
      "INSERT INTO agendamentos (nome,email,telefone,endereco,motivo,data,horario,status,atendimento,tipo_atendimento,blocos_json) VALUES (?,?,?,?,?,?,?,'pedido_pendente', ?, ?, ?)",
      nome, email || null, telefone || null, endereco || null, motivo, data, `${(tipo === 'grupo' ? blocos[0] : horario)}:00`, atendimento, tipo, tipo === 'grupo' ? JSON.stringify(blocos) : null
    );

    const novoAgendamento = await tx.prismaService.agendamento.create({
      data: {
        nome,
        data,
        horario,
        atendimento,
        agendamentos_tipo_atendimento,
        motivo,
        endereco,
        blocos,
      }
    });
    

    // Captura o ID gerado pelo auto_increment do INSERT anterior
    const id_gerado  = Number(resultado.id_gerado);
    
    const slots = tipo === 'grupo' ? blocos : [horario];
    
    // 2. Insere os Slots de agendamento
    for (const h of slots) {
      await tx.$executeRawUnsafe(
        'INSERT INTO agendamento_slots (agendamento_id,data,horario_inicio) VALUES (?,?,?)', 
        id_gerado, data, `${h}:00`
      );
    }

    // 3. Insere os participantes se for um grupo
    if (tipo === 'grupo') {
      for (let i = 0; i < participantes.length; i++) {
        await tx.$executeRawUnsafe(
          'INSERT INTO agendamento_participantes (agendamento_id,nome,telefone,principal) VALUES (?,?,?,?)', 
          id_gerado, participantes[i].nome, participantes[i].telefone || null, i === 0 ? 1 : 0
        );
      }
    }

    return id_gerado; // Retorna o ID para fora da transação
  });

  // Se chegou aqui, o commit foi automático
  return res.status(201).json({ sucesso: true, id: resultado });

} catch (e: any) {
  // O rollback já foi executado automaticamente pelo Prisma aqui!
  if (e.code === 'P2010' || e.message?.includes('ER_DUP_ENTRY')) { 
    return res.status(409).json({ mensagem: 'Um ou mais blocos de horário já estão ocupados.' }); 
  }
  
  console.error(e); 
  return res.status(500).json({ mensagem: 'Não foi possível criar o atendimento.' }); 
}}
