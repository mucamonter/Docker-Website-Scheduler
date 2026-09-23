let timeoutBusca = null;
const TODOS_HORARIOS = ['09:00','09:30','10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30'];

document.addEventListener('DOMContentLoaded',()=>{
    const c=document.getElementById('data');
    if(c)c.min=new Date().toLocaleDateString('sv-SE',{timeZone:'America/Sao_Paulo'});});

    function limparTexto(v){
    return typeof v==='string'?v.trim():'';
}

function alternarCampos(ja){
    const cadastro=document.getElementById('camposCadastro'),existente=document.getElementById('camposJaCadastrado');
    if(ja){
        cadastro.classList.add('hidden');
        existente.classList.remove('hidden');
        ['nome','email','cep','endereco'].forEach(id=>document.getElementById(id).required=false);
        document.getElementById('nomeIdentificacao').required=true;
    }
    else{
        cadastro.classList.remove('hidden');
        existente.classList.add('hidden');
        ['nome','email','cep','endereco'].forEach(id=>document.getElementById(id).required=true);
        document.getElementById('nomeIdentificacao').required=false;
    }}

function validarData(input){
    if(!input.value)return;
    const d=new Date(input.value+'T00:00:00');
    if([0,6].includes(d.getDay())){
        alert('Atendimento apenas em dias úteis (Segunda a Sexta-feira).');
        input.value='';
        return;
    }
    atualizarHorariosDisponiveis(input.value);
}

async function atualizarHorariosDisponiveis(data){
    if(!data)return;
    try{const r=await fetch(`/api/agendamentos/disponiveis?data=${encodeURIComponent(data)}`);
    const d=await r.json();if(!r.ok)throw new Error(d.mensagem||'Não foi possível consultar os horários.');

}finally{};

async function buscarCidadaos(termo){ return carregarMeuCadastro(); }
async function carregarMeuCadastro(){
 const aviso=document.getElementById('avisoCadastro');
 const campo=document.getElementById('nomeIdentificacao');
 aviso.textContent='';
 try{
  const r=await fetch('/api/cidadao/me');
  if(r.status===401){
   aviso.textContent='Faça login para usar seu cadastro.';
   aviso.style.color='#b00020';
   campo.value='';
   setTimeout(()=>{location.href='/login.html';},800);
   return false;
  }
  const d=await r.json();
  if(!r.ok)throw new Error(d.mensagem||'Não foi possível carregar seu cadastro.');
  campo.value=d.cidadao.nome;
  const list=document.getElementById('listaCidadaos');
  list.innerHTML='';
  const o=document.createElement('option');o.value=d.cidadao.nome;list.appendChild(o);
  return true;
 }catch(e){aviso.textContent=e.message;aviso.style.color='#b00020';return false;}
}

document.querySelectorAll('input[name="temCadastro"]').forEach(r=>r.addEventListener('change',()=>{
 const ja=r.value==='sim' && r.checked;
 alternarCampos(ja);
 if(ja)carregarMeuCadastro();
}));

const form=document.getElementById('formAgendamento');

if(form)form.addEventListener('submit',async e=>{e.preventDefault();

const ja=document.querySelector('input[name="temCadastro"]:checked')?.value==='sim';
const nome=ja?document.getElementById('nomeIdentificacao').value:document.getElementById('nome').value;
const data=document.getElementById('data').value;
const horario=document.getElementById('horario').value.trim();
if(!data){alert('Por favor, selecione uma data.');return;}
if(!horario){alert('Por favor, selecione um horário válido.');return;
}

const[ano,mes,dia]=data.split('-');
const dados={nome:limparTexto(nome),motivo:limparTexto(document.getElementById('motivo').value),data,horario,email:limparTexto(document.getElementById('email').value),cep:limparTexto(document.getElementById('cep').value),endereco:limparTexto(document.getElementById('endereco').value),jaTemCadastro:ja};

try{const r=await fetch('/api/agendamentos',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(dados)});const resposta=await r.json();if(!r.ok)throw new Error(resposta.mensagem||'Não foi possível realizar o agendamento.');document.getElementById('mensagem').innerHTML=`Agendamento confirmado com sucesso!<br>📅 Dia: ${dia}/${mes}/${ano} às 🕒 ${horario}`;form.reset();alternarCampos(false);}catch(e){console.error(e);alert(e.message||'Ocorreu um erro ao realizar o agendamento.');}});
