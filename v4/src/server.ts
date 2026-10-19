// @ts-check

import express,  { type Request, type Response, type NextFunction } from 'express';
import type { RequestHandler } from 'express';
import session from 'express-session';
import path from 'path';
import bcrypt from 'bcryptjs';


import { defineConfig } from "prisma/config";
import { PrismaClient } from '@prisma/client/extension';
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { dataValida } from './db';
import { exigirAdmin } from './funcionts';
import { normalizarParticipantes } from './funcionts';
import { diaUtil } from './funcionts';
import { blocosValidos } from './funcionts';
import { valorAtendimento } from './funcionts';
import { valorStatus } from './funcionts';
import { valorTipo } from './funcionts';
import { prepararBanco } from './db';

//

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//------------------------------------------------------------

declare module 'express-session' {
  interface SessionData {
    papel?: string;
    usuario?: string;
    usuarioId?: number;
    usuarioNome?: string;
    cidadaoId?: number;
    cidadaoEmail?: string;
    cidadaoNome?: string;
  }
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "mysql://root:Ardmim321@.1270.0.1:3306/V2_DB?connection_timeout=30",
  },
}); 


const adapter = new PrismaMariaDb({
  host: "db",
  port: 3306,
  user: 'root',
  password: 'Ardmin321',
  database: 'V2_DB',
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });


const app = express();
const PORT = Number(process.env.PORT || 3000);

//server-side
// --------------------------------------------------------
//app
const HORARIOS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
const STATUS = ['cancelado', 'pedido_nao_atendido', 'pedido_atendido', 'pedido_pendente'];
const ATENDIMENTO = ['no_paco', 'marcado'];
const TIPOS_ATENDIMENTO = ['unico', 'grupo'];
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



const texto = (v:string) => typeof v === 'string' ? v.trim() : '';




/**
 * @param {String} v
 */










app.patch('/api/admin/agendamentos/:id', exigirAdmin, async (req: Request, res: Response) => {
  const id = Number(req.params.id), nome = texto(req.body.nome), email = texto(req.body.email), telefone = texto(req.body.telefone), endereco = texto(req.body.endereco), motivo = texto(req.body.motivo), data = texto(req.body.data), horario = texto(req.body.horario), status = valorStatus(texto(req.body.status)), atendimento = valorAtendimento(texto(req.body.atendimento)), tratativa = texto(req.body.tratativa), tipo = valorTipo(texto(req.body.tipo_atendimento)) || 'unico';
  const participantes = normalizarParticipantes(req.body.participantes), blocos = blocosValidos(req.body.blocos);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ mensagem: 'ID inválido.' });
  if (!nome || !motivo || !data || !status || !atendimento) return res.status(400).json({ mensagem: 'Preencha os dados obrigatórios.' });
  if (!dataValida(data) || data < hoje() || !diaUtil(data)) return res.status(400).json({ mensagem: 'Data inválida.' });
  if (status === 'pedido_atendido' && !tratativa) return res.status(400).json({ mensagem: 'Informe a tratativa para concluir o atendimento.' });
  if (tipo === 'grupo') { if (!participantes.length) return res.status(400).json({ mensagem: 'Adicione pelo menos o representante do grupo.' }); if (!blocos.length) return res.status(400).json({ mensagem: 'Selecione pelo menos um bloco de horário.' }); }
  const conn = await prisma.$connect();
  try {
    await conn.beginTransaction();
    const [r] = await conn.execute('UPDATE agendamentos SET nome=?,email=?,telefone=?,endereco=?,motivo=?,data=?,horario=?,status=?,atendimento=?,tipo_atendimento=?,blocos_json=?,tratativa=? WHERE id=?', [nome, email || null, telefone || null, endereco || null, motivo, data, `${(tipo === 'grupo' ? blocos[0] : horario)}:00`, status, atendimento, tipo, tipo === 'grupo' ? JSON.stringify(blocos) : null, status === 'pedido_atendido' ? tratativa : null, id]);
    if (!r.affectedRows) { await conn.rollback(); return res.status(404).json({ mensagem: 'Atendimento não encontrado.' }); }
    await conn.execute('DELETE FROM agendamento_slots WHERE agendamento_id=?', [id]);
    if (status !== 'cancelado') { for (const h of (tipo === 'grupo' ? blocos : [horario])) await conn.execute('INSERT INTO agendamento_slots (agendamento_id,data,horario_inicio) VALUES (?,?,?)', [id, data, `${h}:00`]); }
    await conn.execute('DELETE FROM agendamento_participantes WHERE agendamento_id=?', [id]);
    if (tipo === 'grupo') for (let i = 0; i < participantes.length; i++) await conn.execute('INSERT INTO agendamento_participantes (agendamento_id,nome,telefone,principal) VALUES (?,?,?,?)', [id, participantes[i].nome, participantes[i].telefone || null, i === 0 ? 1 : 0]);
    await conn.commit(); res.json({ sucesso: true });
  } catch (e:any) { await conn.rollback(); if (e.code === 'ER_DUP_ENTRY') return res.status(409).json({ mensagem: 'Um ou mais blocos de horário já estão ocupados.' }); console.error(e); res.status(500).json({ mensagem: 'Não foi possível editar o atendimento.' }); } finally { conn.release(); }
});

app.delete('/api/admin/agendamentos/:id', exigirStaff, async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ mensagem: 'ID inválido.' });
  try {
    const r = await prisma.$executeRaw`DELETE FROM agendamentos WHERE id=${id}`;
    if (!r.affectedRows) return res.status(404).json({ mensagem: 'Atendimento não encontrado.' });
    res.json({ sucesso: true });
  } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível excluir o atendimento.' }); }
});

app.patch('/api/admin/agendamentos/:id/status', exigirAdmin, async (req: Request, res: Response) => {
  const id = Number(req.params.id), status = valorStatus(texto(req.body.status)), tratativa = texto(req.body.tratativa);
  if (!Number.isInteger(id) || id < 1 || !status) return res.status(400).json({ mensagem: 'Status inválido.' });
  if (status === 'pedido_atendido' && !tratativa) return res.status(400).json({ mensagem: 'Informe a tratativa ao concluir o atendimento.' });
  const conn = await prisma.$connect();
  try {
    await conn.beginTransaction(); const [a] = await conn.execute('SELECT data,horario,tipo_atendimento,blocos_json FROM agendamentos WHERE id=? FOR UPDATE', [id]); if (!a.length) { await conn.rollback(); return res.status(404).json({ mensagem: 'Atendimento não encontrado.' }); }
    await conn.execute('UPDATE agendamentos SET status=?,tratativa=? WHERE id=?', [status, status === 'pedido_atendido' ? tratativa : null, id]);
    if (status === 'cancelado') await conn.execute('DELETE FROM agendamento_slots WHERE agendamento_id=?', [id]);
    else { const [slots] = await conn.execute('SELECT horario_inicio FROM agendamento_slots WHERE agendamento_id=?', [id]); if (!slots.length) { 
      const blocos = Array.isArray(a[0].blocos_json) ? a[0].blocos_json : (typeof a[0].blocos_json === 'string' ? JSON.parse(a[0].blocos_json || '[]') : []); const hs = a[0].tipo_atendimento === 'grupo' && blocos.length ? blocos : [a[0].horario.toString().slice(0, 5)]; for (const h of hs) await conn.execute('INSERT INTO agendamento_slots (agendamento_id,data,horario_inicio) VALUES (?,?,?)', [id, a[0].data, h + ':00']); } }
    await conn.commit(); res.json({ sucesso: true });
  } catch (e:any) { await conn.rollback(); if (e.code === 'ER_DUP_ENTRY') return res.status(409).json({ mensagem: 'O horário está ocupado por outro atendimento.' }); console.error(e); res.status(500).json({ mensagem: 'Não foi possível alterar o status.' }); } finally { conn.release(); }
});

app.get('/api/admin/usuarios', exigirAdmin, async (req: Request, res: Response) => {
  try {
    const rows = await prisma.$executeRaw`SELECT id,nome,email,papel,DATE_FORMAT(criado_em,'%d/%m/%Y %H:%i') criado_em FROM usuarios_admin ORDER BY nome ASC`;

    res.json({ usuarios: rows });
  } catch (e:any) {
    console.error(e);

    res.status(500).json({ mensagem: 'Não foi possível carregar os usuários.' });

  }
});

app.post('/api/admin/usuarios', exigirAdmin, async (req: Request, res: Response) => { const nome = texto(req.body.nome), email = texto(req.body.email).toLowerCase(), senha = typeof req.body.senha === 'string' ? req.body.senha : '', papel = texto(req.body.papel); if (!nome || !email || senha.length < 6 || !['admin', 'visualizador'].includes(papel)) return res.status(400).json({ mensagem: 'Nome, e-mail, senha e perfil válidos são obrigatórios.' }); try { const [ex] = await prisma.$queryRaw`SELECT id FROM usuarios_admin WHERE email=${email}`; if (ex.length) return res.status(409).json({ mensagem: 'Já existe um usuário com esse e-mail.' }); const hash = await bcrypt.hash(senha, 12); await prisma.$queryRaw`INSERT INTO usuarios_admin (nome,email,senha_hash,papel) VALUES (${nome},${email},${hash},${papel})`;
 res.status(201).json({ sucesso: true }); } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível criar o usuário.' }); } });
app.patch('/api/admin/usuarios/:id', exigirAdmin, async (req: Request, res: Response) => {
  const id = Number(req.params.id), senha = typeof req.body.senha === 'string' ? req.body.senha : '', papel = texto(req.body.papel), nome = texto(req.body.nome); if (!Number.isInteger(id) || !nome || !['admin', 'visualizador'].includes(papel)) return res.status(400).json({ mensagem: 'Dados inválidos.' }); try {
    if (senha) {
      if (senha.length < 6) return res.status(400).json({ mensagem: 'A senha deve ter pelo menos 6 caracteres.' }); const hash = await bcrypt.hash(senha, 12);
      await prisma.$queryRaw`UPDATE usuarios_admin SET nome=${nome},papel=${papel},senha_hash=${hash} WHERE id=${id}`;
    } else await prisma.$queryRaw`UPDATE usuarios_admin SET nome=${nome},papel=${papel} WHERE id=${id}`;
     res.json({ sucesso: true });
  } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível alterar o usuário.' }); }
});
app.delete('/api/admin/usuarios/:id', exigirAdmin, async (req: Request, res: Response) => { const id = Number(req.params.id); if (!Number.isInteger(id) || id < 1) return res.status(400).json({ mensagem: 'ID inválido.' }); if (id === req.session.usuarioId) return res.status(400).json({ mensagem: 'Você não pode excluir o próprio usuário nesta tela.' }); try { const [r] = await prisma.$queryRaw`DELETE FROM usuarios_admin WHERE id=${id}`; if (!r.affectedRows) return res.status(404).json({ mensagem: 'Usuário não encontrado.' }); res.json({ sucesso: true }); } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível excluir o usuário.' }); } });

app.get('/api/admin/cidadaos', exigirAdmin, async (req: Request, res: Response) => { const busca = texto(req.query.busca); try { const where = []; const params = []; if (busca) { const t = `%${busca}%`; where.push('(c.nome LIKE ? OR c.email LIKE ? OR c.telefone LIKE ?)'); params.push(t, t, t); } const rows = await prisma.$queryRawUnsafe(`SELECT c.id,c.nome,c.email,c.telefone,DATE_FORMAT(c.criado_em,'%d/%m/%Y %H:%i') criado_em FROM cidadaos c ${where.length ? 'WHERE ' + where.join(' AND ') : ''} ORDER BY c.nome ASC LIMIT 500`, ...params); res.json({ cidadaos: rows }); } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível carregar os cidadãos.' }); } });
app.get('/api/admin/cidadaos/:id', exigirAdmin, async (req: Request, res: Response) => { const id = Number(req.params.id); if (!Number.isInteger(id) || id < 1) return res.status(400).json({ mensagem: 'ID inválido.' }); try { const c = await prisma.$queryRaw`SELECT id,nome,email,telefone,DATE_FORMAT(criado_em,\'%d/%m/%Y %H:%i\') criado_em FROM cidadaos WHERE id=${id}`; if (!c.length) return res.status(404).json({ mensagem: 'Cidadão não encontrado.' }); const a = await prisma.$queryRaw`SELECT id,motivo,DATE_FORMAT(data,'%d/%m/%Y') data_br,TIME_FORMAT(horario,'%H:%i') horario,status,atendimento,tratativa FROM agendamentos WHERE cidadao_id=${id} ORDER BY data DESC,horario DESC,id DESC`; res.json({ cidadao: c[0], agendamentos: a }); } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível carregar o cidadão.' }); } });
app.patch('/api/admin/cidadaos/:id/senha', exigirAdmin, async (req: Request, res: Response) => { const id = Number(req.params.id), senha = typeof req.body.senha === 'string' ? req.body.senha : ''; if (!Number.isInteger(id) || senha.length < 6) return res.status(400).json({ mensagem: 'Informe uma senha com pelo menos 6 caracteres.' }); try { const hash = await bcrypt.hash(senha, 12); const [r] = await prisma.$queryRaw`UPDATE cidadaos SET senha_hash=${hash} WHERE id=${id}`; if (!r.affectedRows) return res.status(404).json({ mensagem: 'Cidadão não encontrado.' }); res.json({ sucesso: true }); } catch (e:any) { console.error(e); res.status(500).json({ mensagem: 'Não foi possível alterar a senha.' }); } });

app.get('/', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '..', 'app', 'login.html')));
app.get('/login', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '..', 'app', 'login.html')));
app.get('/agendamento', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '..', 'app', 'agendamento.html')));
app.get('/admin', (req: Request, res: Response, next:NextFunction) => req.session?.papel === 'admin' || req.session?.papel === 'visualizador' ? res.sendFile(path.join(__dirname, '..', 'app', 'admin.html')) : res.redirect('/login.html'));
app.get('/admin.html', (req: Request, res: Response, next:NextFunction) => req.session?.papel === 'admin' || req.session?.papel === 'visualizador' ? res.sendFile(path.join(__dirname, '..', 'app', 'admin.html')) : res.redirect('/login.html'));
app.get('/cadastro', (req: Request, res: Response) => res.sendFile(path.join(__dirname, '..', 'app', 'cadastro.html')));
app.get('/cidadao', (req: Request, res: Response) => req.session?.papel === 'cidadao' ? res.sendFile(path.join(__dirname, '..', 'app', 'cidadao.html')) : res.redirect('/login.html'));
app.get('/cidadao.html', (req: Request, res: Response) => req.session?.papel === 'cidadao' ? res.sendFile(path.join(__dirname, '..', 'app', 'cidadao.html')) : res.redirect('/login.html'));
app.use(express.static(path.join(__dirname, '..', 'app')));
app.use((req: Request, res: Response, next:NextFunction) => { if (req.method === 'GET' && !req.path.startsWith('/api/')) return res.sendFile(path.join(__dirname, '..', 'app', 'login.html')); next(); });

async function iniciar() {
  try { await prepararBanco(); console.log('Banco de dados preparado com sucesso.'); app.listen(PORT, '0.0.0.0', () => console.log(`Servidor iniciado na porta ${PORT}`)); }
  catch (e:any) { console.error('Não foi possível preparar o banco de dados:', e); process.exit(1); }
}
iniciar();
