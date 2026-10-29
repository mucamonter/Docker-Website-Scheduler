// 1. Declarar constantes e variáveis de estado
const HORARIOS = ['09:00','09:30','10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'];
const STATUS = { cancelado: 'Cancelado', pedido_nao_atendido: 'Não atendido', pedido_atendido: 'Atendido', pedido_pendente: 'Pendente' };
const ATEND = { no_paco: 'No Paço', marcado: 'telefone' };

let papel = '', cache = [];
let timer = null;

const $ = id => document.getElementById(id);
const esc = v => String(v ?? '').replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c]));

// Converte YYYY-MM-DD em DD/MM/YYYY
const br = v => {
  if (!v) return '';
  const [a, m, d] = String(v).slice(0, 10).split('-');
  return d + '/' + m + '/' + a;
};

// 2. Função async para verificar permissão do usuário
async function verificar() {
  try {
    const r = await fetch('/api/admin/me');
    const texto = await r.text();
    let d;
    try {
      d = JSON.parse(texto);
    } catch (e) {
      console.error('Servidor não retornou JSON ao verificar sessão. Resposta:', texto);
      return false;
    }

    // CORREÇÃO: Verifica se possui 'papel' retornado do backend
    if (!r.ok || (!d.papel && !d.autenticado)) {
      location.href = '/login.html';
      return false;
    }

    papel = d.papel;
    if ($('perfil')) $('perfil').textContent = papel === 'admin' ? 'Administrador' : 'Balconista';
    
    if (papel !== 'admin') {
      document.querySelectorAll('.admin-only').forEach(x => x.remove());
      $('abaPendencias')?.remove();
    }
    
    return true;
  } catch (e) {
    console.error('Erro ao verificar sessão:', e);
    return false;
  }
}

function mostrarAba(nome) {
  ['Atendimentos', 'Pendencias', 'Usuarios', 'Cidadaos'].forEach(x => $('painel' + x)?.classList.add('hidden'));
  $('painel' + nome)?.classList.remove('hidden');
  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('ativo'));
  const b = $('aba' + nome);
  if (b) b.classList.add('ativo');
}

function montarSelectsGrupo(inicio = '', fim = '', ocupados = []) {
  const ocup = new Set(ocupados);
  const disponiveis = HORARIOS.filter(h => !ocup.has(h));
  const mk = (valor) => disponiveis.map(h => `<option value="${h}" ${h === valor ? 'selected' : ''}>${h}</option>`).join('');
  if ($('grupoInicio')) $('grupoInicio').innerHTML = mk(inicio || disponiveis[0] || '');
  if ($('grupoFim')) $('grupoFim').innerHTML = mk(fim || disponiveis[Math.min(1, disponiveis.length - 1)] || '');
  atualizarFimGrupo();
}

function atualizarFimGrupo() {
  const inicio = $('grupoInicio')?.value;
  if (!inicio) return;
  const i = HORARIOS.indexOf(inicio);
  const ocupados = window.horariosOcupadosGrupo || new Set();
  const opcoes = HORARIOS.slice(i + 1).filter(h => !ocupados.has(h));
  if ($('grupoFim')) $('grupoFim').innerHTML = opcoes.map(h => `<option value="${h}">${h}</option>`).join('');
  if ($('mensagemHorariosGrupo')) {
    $('mensagemHorariosGrupo').textContent = opcoes.length 
      ? 'Escolha quando o atendimento termina. Todos os blocos entre início e fim serão reservados.' 
      : 'Não há horário disponível após o início escolhido.';
  }
}

async function carregarHorariosGrupo(data, inicio = '', fim = '') {
  window.horariosOcupadosGrupo = new Set();
  if (!data) { montarSelectsGrupo(inicio, fim, []); return; }
  try {
    const r = await fetch('/api/admin/horarios?data=' + encodeURIComponent(data));
    const texto = await r.text();
    let x;
    try { x = JSON.parse(texto); } catch (err) { throw new Error('Erro na resposta de horários do servidor.'); }
    if (!r.ok) throw Error(x.mensagem);
    window.horariosOcupadosGrupo = new Set(x.horariosOcupados || []);
    montarSelectsGrupo(inicio, fim, [...window.horariosOcupadosGrupo]);
  } catch (e) {
    if ($('mensagemHorariosGrupo')) $('mensagemHorariosGrupo').textContent = e.message;
    montarSelectsGrupo('', '', []);
  }
}

function blocosEntre(inicio, fim) {
  const a = HORARIOS.indexOf(inicio), b = HORARIOS.indexOf(fim);
  if (a < 0 || b < 0 || b <= a) return [];
  return HORARIOS.slice(a, b);
}

function adicionarParticipante(nome = '', telefone = '', principal = false) {
  const wrap = document.createElement('div'); 
  wrap.className = 'participante';
  wrap.innerHTML = `<div style="flex:1"><span class="principal">${principal ? 'REPRESENTANTE PRINCIPAL' : 'PARTICIPANTE'}</span><input class="pNome" maxlength="150" placeholder="Nome completo" value="${esc(nome)}" required></div>${principal ? '<div style="flex:0 0 220px"><label>Telefone</label><input class="pTelefone" maxlength="30" placeholder="Telefone" value="' + esc(telefone) + '"></div>' : '<div><button type="button" class="danger removerParticipante">Remover</button></div>'}`;
  wrap.querySelector('.removerParticipante')?.addEventListener('click', () => wrap.remove());
  $('participantes')?.appendChild(wrap);
}

async function carregarDetalhesGrupo(id) {
  try {
    const r = await fetch('/api/admin/agendamentos/' + id + '/detalhes');
    const texto = await r.text();
    let x;
    try { x = JSON.parse(texto); } catch (err) { throw new Error('Erro na resposta de detalhes do servidor.'); }
    if (!r.ok) throw Error(x.mensagem);
    return x;
  } catch (e) {
    alert(e.message);
    return { participantes: [], blocos: [] };
  }
}

async function abrirModalAtendimento(a = null) {
  const grupo = a?.tipo_atendimento === 'grupo';
  const dataHoje = new Date().toLocaleDateString('sv-SE', { timeZone: 'America/Sao_Paulo' });

  if ($('tituloAtendimento')) $('tituloAtendimento').textContent = a ? 'Gerenciar atendimento' : 'Novo atendimento';
  if ($('editId')) $('editId').value = a?.id || '';
  if ($('editNome')) $('editNome').value = a?.nome || '';
  if ($('editTelefone')) $('editTelefone').value = a?.telefone || '';
  if ($('editEndereco')) $('editEndereco').value = a?.endereco || '';
  if ($('editAtendimento')) $('editAtendimento').value = a?.atendimento || 'no_paco';
  
  if ($('editData')) $('editData').value = a?.data ? a.data.slice(0, 10) : dataHoje;
  if ($('editHorario')) $('editHorario').value = a?.horario || HORARIOS[0];
  
  if ($('editMotivo')) $('editMotivo').value = a?.motivo || '';
  if ($('editStatus')) $('editStatus').value = a?.status || 'pedido_pendente';
  if ($('editTratativa')) $('editTratativa').value = a?.tratativa || '';
  if ($('editTipo')) $('editTipo').value = grupo ? 'grupo' : 'unico';
  
  if ($('participantes')) $('participantes').innerHTML = '';
  let det = { participantes: [], blocos: [] };
  if (grupo && a?.id) det = await carregarDetalhesGrupo(a.id);
  if (grupo) {
    adicionarParticipante(det.participantes[0]?.nome || a?.nome || '', det.participantes[0]?.telefone || a?.telefone || '', true);
    det.participantes.slice(1).forEach(p => adicionarParticipante(p.nome, '', false));
  }
  
  aplicarModoGrupo(grupo);
  $('modalAtendimento')?.classList.add('aberto');
  
  if (grupo) {
    const blocos = det.blocos || [];
    const inicio = blocos[0] || HORARIOS[0];
    const fim = blocos.length ? HORARIOS[HORARIOS.indexOf(blocos[blocos.length - 1]) + 1] : HORARIOS[1];
    await carregarHorariosGrupo($('editData').value, inicio, fim);
  }
}

function aplicarModoGrupo(grupo) {
  if ($('editTipo')) $('editTipo').value = grupo ? 'grupo' : 'unico';
  if ($('toggleGrupo')) $('toggleGrupo').textContent = grupo ? 'Atendimento único' : 'Atendimento em grupo';
  $('blocoGrupo')?.classList.toggle('hidden', !grupo);
  $('blocoHorariosGrupo')?.classList.toggle('hidden', !grupo);
  $('campoHorario')?.classList.toggle('hidden', grupo);
  $('campoTelefone')?.classList.toggle('hidden', grupo);
  $('campoNome')?.classList.toggle('hidden', grupo);
  
  if ($('editNome')) { $('editNome').required = !grupo; $('editNome').disabled = grupo; }
  if ($('editTelefone')) { $('editTelefone').required = !grupo; $('editTelefone').disabled = grupo; }
  if ($('editHorario')) $('editHorario').disabled = grupo;
  if ($('editData')) $('editData').required = true;
  if ($('editMotivo')) $('editMotivo').required = true;
  if ($('grupoInicio')) $('grupoInicio').required = grupo;
  if ($('grupoFim')) $('grupoFim').required = grupo;
  
  const edicao = Boolean($('editId')?.value);
  $('editStatus')?.closest('div')?.classList.toggle('hidden', !edicao);
  $('editTratativa')?.closest('div')?.classList.toggle('hidden', !edicao);
  
  if (grupo) {
    if ($('editNome')) $('editNome').value = '';
    if ($('editTelefone')) $('editTelefone').value = '';
  }
}

function fecharModal(id) { $(id)?.classList.remove('aberto'); }

async function carregar() {
  const p = new URLSearchParams(), 
        b = $('busca')?.value.trim() || '', 
        d = $('filtroData')?.value || '', 
        s = $('filtroStatus')?.value || '', 
        a = $('filtroAtendimento')?.value || '';
  if (b) p.set('busca', b); 
  if (d) p.set('data', d); 
  if (s) p.set('status', s); 
  if (a) p.set('atendimento', a);
  
  const m = $('mensagem');
  if (m) m.textContent = '';
  
  try {
    const r = await fetch('/api/admin/agendamentos?' + p);
    const texto = await r.text();
    let x;
    try { x = JSON.parse(texto); } catch (err) { throw new Error('O servidor retornou uma resposta com erro (HTML).'); }
    if (!r.ok) throw Error(x.mensagem);
    cache = x.agendamentos || [];
    if ($('tabela')) {
      $('tabela').innerHTML = cache.length ? cache.map(a => `
        <tr class="${a.tipo_atendimento === 'grupo' ? 'grupo-row' : ''}">
          <td>${br(a.data)}</td>
          <td>${esc(a.horario)}${a.tipo_atendimento === 'grupo' ? '<br><span class="small">' + (a.horario ? 'início' : '') + '</span>' : ''}</td>
          <td><span class="tag ${a.tipo_atendimento === 'grupo' ? 'grupo-tag' : ''}">${a.tipo_atendimento === 'grupo' ? 'GRUPO' : esc(ATEND[a.atendimento] || a.atendimento)}</span></td>
          <td><b>${esc(a.nome)}</b>${a.tipo_atendimento === 'grupo' ? `<br><span class="small">${a.participantes_total || 'Várias'} pessoas</span>` : ''}</td>
          <td>${esc(a.telefone || '')}</td>
          <td>${esc(a.endereco || '')}</td>
          <td>${esc(a.motivo || '')}</td>
          <td>${esc(a.tratativa || '—')}</td>
          <td class="status">${esc(STATUS[a.status] || a.status)}</td>
          <td>${papel === 'admin' ? `<button onclick="editar(${a.id})">Gerenciar</button>` : ''}</td>
        </tr>`).join('') : '<tr><td colspan="10" class="vazio">Nenhum atendimento encontrado.</td></tr>';
    }
  } catch (e) {
    if (m) { m.textContent = e.message; m.className = 'erro'; }
  }
}

function editar(id) { const a = cache.find(x => x.id === id); if (a) abrirModalAtendimento(a); }

// CORREÇÃO DA FUNÇÃO SALVAR (Estrutura única, e.preventDefault() no topo e tratamento seguro)
async function salvarAtendimento(e) {
  e.preventDefault(); // Impede o envio nativo do formulário HTML
  
  const msgEl = $('msgAtendimentoForm');
  if (msgEl) {
    msgEl.textContent = '';
    msgEl.className = 'mensagem';
  }

  const id = $('editId').value;
  const grupo = $('editTipo').value === 'grupo';
  const form = $('formAtendimento');

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const participantes = grupo 
    ? [...document.querySelectorAll('#participantes .participante')].map(p => ({
        nome: p.querySelector('.pNome').value.trim(),
        telefone: p.querySelector('.pTelefone')?.value.trim() || ''
      })) 
    : [];

  if (grupo && (!participantes.length || participantes.some(p => !p.nome))) {
    alert('Preencha o nome de todos os participantes antes de salvar.');
    return;
  }

  const blocos = grupo ? blocosEntre($('grupoInicio').value, $('grupoFim').value) : [];
  if (grupo && !blocos.length) {
    alert('Escolha um início e um fim válidos.');
    return;
  }

  const dados = {
    nome: grupo ? (participantes[0]?.nome || '') : $('editNome').value.trim(),
    telefone: grupo ? (participantes[0]?.telefone || '') : $('editTelefone').value.trim(),
    endereco: $('editEndereco').value.trim(),
    email: '',
    atendimento: $('editAtendimento').value,
    data: $('editData').value,
    horario: grupo ? blocos[0] : $('editHorario').value,
    motivo: $('editMotivo').value.trim(),
    status: $('editStatus').value,
    tratativa: $('editTratativa').value.trim(),
    tipo_atendimento: grupo ? 'grupo' : 'unico',
    participantes,
    blocos
  };

  try {
    const r = await fetch(id ? '/api/admin/agendamentos/' + id : '/api/admin/agendamentos', {
      method: id ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados)
    });

    const texto = await r.text();
    let x;
    try {
      x = JSON.parse(texto);
    } catch (err) {
      console.error('Resposta bruta do servidor:', texto);
      throw new Error('Erro interno no servidor. Verifique o console do navegador (F12) ou o Docker.');
    }

    if (!r.ok) throw new Error(x.mensagem || 'Erro ao salvar atendimento.');

    fecharModal('modalAtendimento');
    mostrarAba('Atendimentos');
    carregar();
  } catch (err) {
    if (msgEl) {
      msgEl.textContent = err.message;
      msgEl.className = 'mensagem erro';
    } else {
      alert(err.message);
    }
  }
}

async function carregarPendencias() {
  const r = await fetch('/api/admin/pendencias');
  const texto = await r.text();
  let x;
  try { x = JSON.parse(texto); } catch (err) { return; }
  if (!r.ok) { if ($('msgPendencias')) $('msgPendencias').textContent = x.mensagem; return; }
  if ($('tabelaPendencias')) {
    $('tabelaPendencias').innerHTML = x.agendamentos.length ? x.agendamentos.map(a => `<tr><td>${br(a.data)}</td><td>${esc(a.horario)}</td><td>${esc(a.nome)}</td><td>${esc(a.telefone || '')}</td><td>${esc(a.motivo || '')}</td><td>${esc(STATUS[a.status] || a.status)}</td><td><button onclick="editarPendente(${a.id})">Gerenciar</button></td></tr>`).join('') : '<tr><td colspan="7" class="vazio">Nenhuma pendência.</td></tr>';
  }
  cache = x.agendamentos || [];
}

function editarPendente(id) { const a = cache.find(x => x.id === id); if (a) abrirModalAtendimento(a); }

// Event Listeners
$('abaAtendimentos')?.addEventListener('click', () => { mostrarAba('Atendimentos'); carregar(); });
$('abaPendencias')?.addEventListener('click', () => { mostrarAba('Pendencias'); carregarPendencias(); });

if ($('novoAtendimento')) $('novoAtendimento').onclick = () => abrirModalAtendimento();
if ($('toggleGrupo')) $('toggleGrupo').onclick = async () => { const g = $('editTipo').value !== 'grupo'; if (g) { $('participantes').innerHTML = ''; adicionarParticipante('', '', true); } aplicarModoGrupo(g); if (g) await carregarHorariosGrupo($('editData').value); };
if ($('adicionarParticipante')) $('adicionarParticipante').onclick = () => adicionarParticipante('', '', false);
if ($('fecharAtendimento')) $('fecharAtendimento').onclick = () => fecharModal('modalAtendimento');
if ($('formAtendimento')) $('formAtendimento').onsubmit = salvarAtendimento;

if ($('busca')) $('busca').addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(carregar, 250); });
if ($('filtroData')) $('filtroData').addEventListener('change', carregar);
if ($('filtroAtendimento')) $('filtroAtendimento').addEventListener('change', carregar);
if ($('filtroStatus')) $('filtroStatus').addEventListener('change', carregar);
if ($('editData')) $('editData').addEventListener('change', () => { if ($('editTipo').value === 'grupo') carregarHorariosGrupo($('editData').value); });
if ($('grupoInicio')) $('grupoInicio').addEventListener('change', atualizarFimGrupo);

if ($('sair')) $('sair').onclick = async () => { await fetch('/api/logout', { method: 'POST' }); location.href = '/login.html'; };

// Inicialização
verificar().then(ok => { if (ok) carregar(); });

// 1. Função para carregar a lista de usuários do painel
async function carregarUsuarios() {
  try {
    const r = await fetch('/api/admin/usuarios');
    const texto = await r.text();
    let x;
    try { x = JSON.parse(texto); } catch (err) { return; }
    if (!r.ok) throw new Error(x.mensagem || 'Erro ao carregar usuários.');

    if ($('tabelaUsuarios')) {
      $('tabelaUsuarios').innerHTML = x.usuarios.length ? x.usuarios.map(u => `
        <tr>
          <td><b>${esc(u.nome)}</b></td>
          <td>${esc(u.email)}</td>
          <td><span class="tag ${u.papel === 'admin' ? 'admin-tag' : ''}">${u.papel === 'admin' ? 'Administrador' : 'Balconista'}</span></td>
          <td>${br(u.criado_em)}</td>
          <td>
            <button onclick="editarUsuario(${u.id})">Editar</button>
            <button class="danger" onclick="excluirUsuario(${u.id})">Excluir</button>
          </td>
        </tr>
      `).join('') : '<tr><td colspan="5" class="vazio">Nenhum usuário encontrado.</td></tr>';
    }
  } catch (e) {
    console.error('Erro ao carregar usuários:', e);
  }
}

// 2. Função para carregar a lista de cidadãos cadastrados
async function carregarCidadaos() {
  const busca = $('buscaCidadao')?.value.trim() || '';
  try {
    const r = await fetch('/api/admin/cidadaos' + (busca ? '?busca=' + encodeURIComponent(busca) : ''));
    const texto = await r.text();
    let x;
    try { x = JSON.parse(texto); } catch (err) { return; }
    if (!r.ok) throw new Error(x.mensagem || 'Erro ao carregar cidadãos.');

    if ($('tabelaCidadaos')) {
      $('tabelaCidadaos').innerHTML = x.cidadaos.length ? x.cidadaos.map(c => `
        <tr>
          <td><b>${esc(c.nome)}</b></td>
          <td>${esc(c.email)}</td>
          <td>${esc(c.telefone || '—')}</td>
          <td>${br(c.criado_em)}</td>
          <td><button onclick="verDetalhesCidadao(${c.id})">Ver Histórico</button></td>
        </tr>
      `).join('') : '<tr><td colspan="5" class="vazio">Nenhum cidadão encontrado.</td></tr>';
    }
  } catch (e) {
    console.error('Erro ao carregar cidadãos:', e);
  }
}

// 3. Registre os Event Listeners das duas abas no final do arquivo .js (junto dos outros eventos)
$('abaUsuarios')?.addEventListener('click', () => { mostrarAba('Usuarios'); carregarUsuarios(); });
$('abaCidadaos')?.addEventListener('click', () => { mostrarAba('Cidadaos'); carregarCidadaos(); });

// Filtro de busca em tempo real para cidadãos
if ($('buscaCidadao')) {
  $('buscaCidadao').addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(carregarCidadaos, 250);
  });
}