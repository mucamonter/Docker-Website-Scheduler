const express = require('express');
const session = require('express-session');
const path = require('path');
const pool = require('./db');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = Number(process.env.PORT || 3000);
const HORARIOS = ['09:00','10:00','11:00','13:00','14:00','15:00','16:00'];
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin';

app.use(express.json({ limit: '100kb' }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'chave-local',
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
  if (req.session?.admin === true) return next();
  return res.status(401).json({ mensagem:'Acesso administrativo necessário.' });
}

app.get('/api/health', async (req,res) => {
  try { await pool.query('SELECT 1'); res.json({ok:true,database:process.env.DB_NAME||'V2_DB'}); }
  catch(e) { res.status(503).json({ok:false,mensagem:'Banco de dados indisponível.'}); }
});

app.post('/api/login', (req,res) => {
  const usuario = texto(req.body.usuario);
  const senha = typeof req.body.senha === 'string' ? req.body.senha : '';
  if (usuario !== ADMIN_USER || senha !== ADMIN_PASSWORD) return res.status(401).json({mensagem:'Usuário ou senha inválidos.'});
  req.session.admin = true;
  req.session.usuario = usuario;
  res.json({sucesso:true});
});
app.post('/api/logout', (req,res) => req.session.destroy(() => res.json({sucesso:true})));
app.get('/api/admin/me', (req,res) => req.session?.admin ? res.json({autenticado:true,usuario:req.session.usuario}) : res.status(401).json({autenticado:false}));

function exigirCidadao(req,res,next) {
  if (req.session?.cidadaoId) return next();
  return res.status(401).json({ mensagem:'Login de cidadão necessário.' });
}

app.post('/api/cidadao/cadastro', async (req,res) => {
  const nome=texto(req.body.nome), email=texto(req.body.email).toLowerCase(), senha=typeof req.body.senha==='string'?req.body.senha:'', cep=texto(req.body.cep), endereco=texto(req.body.endereco);
  if(!nome || !email || !senha) return res.status(400).json({mensagem:'Nome, e-mail e senha são obrigatórios.'});
  if(senha.length < 6) return res.status(400).json({mensagem:'A senha deve ter pelo menos 6 caracteres.'});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({mensagem:'Informe um e-mail válido.'});
  try {
    const [existente]=await pool.execute('SELECT id FROM cidadaos WHERE email=?',[email]);
    if(existente.length) return res.status(409).json({mensagem:'Já existe uma conta com este e-mail.'});
    const hash=await bcrypt.hash(senha,12);
    const [r]=await pool.execute('INSERT INTO cidadaos (nome,email,senha_hash,cep,endereco) VALUES (?,?,?,?,?)',[nome,email,hash,cep||null,endereco||null]);
    res.status(201).json({sucesso:true,id:r.insertId});
  } catch(e){ console.error(e); res.status(500).json({mensagem:'Não foi possível criar a conta.'}); }
});

app.post('/api/cidadao/login', async (req,res) => {
  const email=texto(req.body.email).toLowerCase(), senha=typeof req.body.senha==='string'?req.body.senha:'';
  if(!email || !senha) return res.status(400).json({mensagem:'Informe e-mail e senha.'});
  try {
    const [rows]=await pool.execute('SELECT id,nome,email,senha_hash FROM cidadaos WHERE email=?',[email]);
    if(!rows.length || !(await bcrypt.compare(senha,rows[0].senha_hash))) return res.status(401).json({mensagem:'E-mail ou senha inválidos.'});
    req.session.admin=false; req.session.cidadaoId=rows[0].id; req.session.cidadaoEmail=rows[0].email; req.session.cidadaoNome=rows[0].nome;
    res.json({sucesso:true,nome:rows[0].nome});
  } catch(e){ console.error(e); res.status(500).json({mensagem:'Não foi possível realizar o login.'}); }
});

app.get('/api/cidadao/me', exigirCidadao, async (req,res) => {
  try {
    const [rows]=await pool.execute('SELECT id,nome,email,cep,endereco FROM cidadaos WHERE id=?',[req.session.cidadaoId]);
    if(!rows.length) return res.status(401).json({mensagem:'Conta não encontrada.'});
    res.json({cidadao:rows[0]});
  } catch(e){ console.error(e); res.status(500).json({mensagem:'Não foi possível carregar a conta.'}); }
});

app.get('/api/cidadao/meus-agendamentos', exigirCidadao, async (req,res) => {
  try {
    const [rows]=await pool.execute(`SELECT a.id,a.nome,a.motivo,DATE_FORMAT(a.data,'%d/%m/%Y') data_br,TIME_FORMAT(a.horario,'%H:%i') horario,a.email,a.cep,a.endereco,a.status FROM agendamentos a WHERE a.cidadao_id=? OR (a.cidadao_id IS NULL AND LOWER(a.email)=?) ORDER BY a.data DESC,a.horario DESC,a.id DESC`,[req.session.cidadaoId,req.session.cidadaoEmail]);
    if(rows.length){
      await pool.execute('UPDATE agendamentos SET cidadao_id=? WHERE cidadao_id IS NULL AND LOWER(email)=?',[req.session.cidadaoId,req.session.cidadaoEmail]);
    }
    const [cid]=await pool.execute('SELECT id,nome,email,cep,endereco FROM cidadaos WHERE id=?',[req.session.cidadaoId]);
    res.json({cidadao:cid[0],agendamentos:rows});
  } catch(e){ console.error(e); res.status(500).json({mensagem:'Não foi possível carregar seus agendamentos.'}); }
});

app.patch('/api/cidadao/agendamentos/:id/cancelar', exigirCidadao, async (req,res) => {
  const id=Number(req.params.id);
  if(!Number.isInteger(id)||id<1) return res.status(400).json({mensagem:'ID inválido.'});
  try {
    const [r]=await pool.execute("UPDATE agendamentos SET status='cancelado' WHERE id=? AND cidadao_id=? AND status='agendado'",[id,req.session.cidadaoId]);
    if(!r.affectedRows) return res.status(404).json({mensagem:'Agendamento não encontrado ou não pode mais ser cancelado.'});
    res.json({sucesso:true});
  } catch(e){ console.error(e); res.status(500).json({mensagem:'Não foi possível cancelar o agendamento.'}); }
});

app.get('/api/agendamentos/disponiveis', async (req,res) => {
  const data = texto(req.query.data);
  if (!dataValida(data)) return res.status(400).json({mensagem:'Data inválida.'});
  if (!diaUtil(data)) return res.json({horariosOcupados:HORARIOS,horariosDisponiveis:[]});
  try {
    const [rows] = await pool.execute("SELECT TIME_FORMAT(horario,'%H:%i') horario FROM agendamentos WHERE data=? AND status <> 'cancelado'", [data]);
    const ocup = new Set(rows.map(r=>r.horario));
    res.json({horariosOcupados:[...ocup],horariosDisponiveis:HORARIOS.filter(h=>!ocup.has(h))});
  } catch(e) { console.error(e); res.status(500).json({mensagem:'Não foi possível consultar os horários.'}); }
});

app.get('/api/agendamentos/buscar', async (req,res) => {
  const termo = texto(req.query.termo);
  if (termo.length < 3) return res.json({nomes:[]});
  try {
    const [rows] = await pool.execute("SELECT DISTINCT nome FROM agendamentos WHERE nome LIKE ? AND status <> 'cancelado' ORDER BY nome LIMIT 20", [`%${termo}%`]);
    res.json({nomes:rows.map(r=>r.nome)});
  } catch(e) { console.error(e); res.status(500).json({mensagem:'Não foi possível realizar a busca.'}); }
});

app.post('/api/agendamentos', async (req,res) => {
  let nome=texto(req.body.nome), motivo=texto(req.body.motivo), data=texto(req.body.data), horario=texto(req.body.horario);
  const ja=req.body.jaTemCadastro===true;
  let email=ja?'Já Cadastrado':texto(req.body.email), cep=ja?'Já Cadastrado':texto(req.body.cep), endereco=ja?'Já Cadastrado':texto(req.body.endereco);
  if(!nome||!motivo||!data||!horario) return res.status(400).json({mensagem:'Preencha todos os campos obrigatórios.'});
  if(!dataValida(data)) return res.status(400).json({mensagem:'Data inválida.'});
  if(data<hoje()) return res.status(400).json({mensagem:'Não é possível agendar para uma data passada.'});
  if(!diaUtil(data)) return res.status(400).json({mensagem:'Atendimento apenas em dias úteis.'});
  if(!HORARIOS.includes(horario)) return res.status(400).json({mensagem:'Horário inválido.'});
  try {
    let cidadaoId = req.session?.cidadaoId || null;
    if (cidadaoId) {
      const [conta]=await pool.execute('SELECT nome,email,cep,endereco FROM cidadaos WHERE id=?',[cidadaoId]);
      if(conta.length){ nome=conta[0].nome; email=conta[0].email; cep=conta[0].cep || cep; endereco=conta[0].endereco || endereco; }
    }
    const [r]=await pool.execute('INSERT INTO agendamentos (cidadao_id,nome,motivo,data,horario,email,cep,endereco,status) VALUES (?,?,?,?,?,?,?,?,\'agendado\')',[cidadaoId,nome,motivo,data,`${horario}:00`,email||null,cep||null,endereco||null]);
    res.status(201).json({sucesso:true,id:r.insertId,data,horario});
  } catch(e) {
    if(e.code==='ER_DUP_ENTRY') return res.status(409).json({sucesso:false,mensagem:'Este horário já está reservado. Escolha outro horário.'});
    console.error(e); res.status(500).json({mensagem:'Não foi possível salvar o agendamento.'});
  }
});

app.get('/api/admin/agendamentos', exigirAdmin, async (req,res) => {
  const data=texto(req.query.data), status=texto(req.query.status), nome=texto(req.query.nome);
  const where=[], params=[];
  if(data){if(!dataValida(data)) return res.status(400).json({mensagem:'Data inválida.'}); where.push('data=?'); params.push(data);}
  if(status){if(!['agendado','feito','cancelado'].includes(status)) return res.status(400).json({mensagem:'Status inválido.'}); where.push('status=?'); params.push(status);}
  if(nome){where.push('nome LIKE ?'); params.push(`%${nome}%`);}
  const sql=`SELECT id,nome,motivo,DATE_FORMAT(data,'%Y-%m-%d') data,TIME_FORMAT(horario,'%H:%i') horario,email,cep,endereco,DATE_FORMAT(data_registro,'%Y-%m-%d %H:%i:%s') data_registro,status FROM agendamentos ${where.length?'WHERE '+where.join(' AND '):''} ORDER BY data ASC, horario ASC, id ASC`;
  try { const [rows]=await pool.execute(sql,params); res.json({agendamentos:rows}); }
  catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível carregar os agendamentos.'});}
});

app.patch('/api/admin/agendamentos/:id', exigirAdmin, async (req,res) => {
  const id = Number(req.params.id);
  const nome = texto(req.body.nome), motivo = texto(req.body.motivo), data = texto(req.body.data);
  const horario = texto(req.body.horario), email = texto(req.body.email), cep = texto(req.body.cep), endereco = texto(req.body.endereco);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({mensagem:'ID inválido.'});
  if (!nome || !motivo || !data || !horario) return res.status(400).json({mensagem:'Nome, motivo, data e horário são obrigatórios.'});
  if (!dataValida(data)) return res.status(400).json({mensagem:'Data inválida.'});
  if (data < hoje()) return res.status(400).json({mensagem:'Não é possível alterar para uma data passada.'});
  if (!diaUtil(data)) return res.status(400).json({mensagem:'Atendimento apenas em dias úteis.'});
  if (!HORARIOS.includes(horario)) return res.status(400).json({mensagem:'Horário inválido.'});
  try {
    const [r] = await pool.execute(
      `UPDATE agendamentos SET nome=?, motivo=?, data=?, horario=?, email=?, cep=?, endereco=? WHERE id=?`,
      [nome, motivo, data, `${horario}:00`, email || null, cep || null, endereco || null, id]
    );
    if (!r.affectedRows) return res.status(404).json({mensagem:'Agendamento não encontrado.'});
    res.json({sucesso:true});
  } catch(e) {
    if (e.code === 'ER_DUP_ENTRY') return res.status(409).json({mensagem:'Esse dia e horário já estão ocupados por outro agendamento.'});
    console.error(e); res.status(500).json({mensagem:'Não foi possível editar o agendamento.'});
  }
});

app.patch('/api/admin/agendamentos/:id/status', exigirAdmin, async (req,res) => {
  const id=Number(req.params.id), status=texto(req.body.status);
  if(!Number.isInteger(id)||id<1) return res.status(400).json({mensagem:'ID inválido.'});
  if(!['agendado','feito','cancelado'].includes(status)) return res.status(400).json({mensagem:'Status inválido.'});
  try {
    const [r]=await pool.execute('UPDATE agendamentos SET status=? WHERE id=?',[status,id]);
    if(!r.affectedRows) return res.status(404).json({mensagem:'Agendamento não encontrado.'});
    res.json({sucesso:true});
  } catch(e){console.error(e);res.status(500).json({mensagem:'Não foi possível alterar o status.'});}
});

app.get('/', (req,res) => res.sendFile(path.join(__dirname,'..','app','login.html')));
app.get('/login', (req,res) => res.sendFile(path.join(__dirname,'..','app','login.html')));
app.get('/agendamento', (req,res) => res.sendFile(path.join(__dirname,'..','app','agendamento.html')));
app.get('/admin', exigirAdmin, (req,res) => res.sendFile(path.join(__dirname,'..','app','admin.html')));
app.get('/admin.html', exigirAdmin, (req,res) => res.sendFile(path.join(__dirname,'..','app','admin.html')));
app.get('/cadastro', (req,res) => res.sendFile(path.join(__dirname,'..','app','cadastro.html')));
app.get('/cidadao', exigirCidadao, (req,res) => res.sendFile(path.join(__dirname,'..','app','cidadao.html')));
app.get('/cidadao.html', exigirCidadao, (req,res) => res.sendFile(path.join(__dirname,'..','app','cidadao.html')));

app.use(express.static(path.join(__dirname, '..', 'app')));

app.use((req,res,next) => {
  if(req.method==='GET' && !req.path.startsWith('/api/')) return res.sendFile(path.join(__dirname,'..','app','login.html'));
  next();
});

app.listen(PORT,'0.0.0.0',()=>console.log(`Servidor iniciado na porta ${PORT}`));
