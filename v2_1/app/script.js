let timeoutBusca = null;
const TODOS_HORARIOS = ['09:00','10:00','11:00','13:00','14:00','15:00','16:00'];

document.addEventListener('DOMContentLoaded',()=>{const c=document.getElementById('data');if(c)c.min=new Date().toLocaleDateString('sv-SE',{timeZone:'America/Sao_Paulo'});});

function limparTexto(v){return typeof v==='string'?v.trim():'';}

function alternarCampos(ja){
    const cadastro=document.getElementById('camposCadastro'),
    existente=document.getElementById('camposJaCadastrado');
    if(ja){cadastro.classList.add('hidden');
        existente.classList.remove('hidden');
        ['nome','email','cep','endereco'].forEach(id=>document.getElementById(id).required=false);
        document.getElementById('nomeIdentificacao').required=true;}else{cadastro.classList.remove('hidden');existente.classList.add('hidden');
    ['nome','email','cep','endereco'].forEach(id=>document.getElementById(id).required=true);
    document.getElementById('nomeIdentificacao').required=false;}}

function preencherHorarios(horarios){const s=document.getElementById('horario');
    s.innerHTML='<option value="">Selecione um horário</option>';
    horarios.forEach(h=>{const o=document.createElement('option');
        o.value=h;o.textContent=h;s.appendChild(o);});
    }
function validarData(input){if(!input.value)return;const d=new Date(input.value+'T00:00:00');
    if([0,6].includes(d.getDay())){alert('Atendimento apenas em dias úteis (Segunda a Sexta-feira).');
        input.value='';preencherHorarios([]);
        return;}atualizarHorariosDisponiveis(input.value);
    }



async function atualizarHorariosDisponiveis(data){
    if(!data)return;try{const r=await fetch(`/api/agendamentos/disponiveis?data=${encodeURIComponent(data)}`);const d=await r.json();if(!r.ok)throw new Error(d.mensagem||'Não foi possível consultar os horários.');
    preencherHorarios(d.horariosDisponiveis||[]);}catch(e){console.error(e);preencherHorarios([]);alert(e.message||'Não foi possível consultar os horários disponíveis.');}}

async function buscarCidadaos(termo){
    clearTimeout(timeoutBusca);
    const list=document.getElementById('listaCidadaos');
    list.innerHTML='';termo=limparTexto(termo);
    if(termo.length<3)return;timeoutBusca=setTimeout(async()=>{try{const r=await fetch(`/api/agendamentos/buscar?termo=${encodeURIComponent(termo)}`);
    const d=await r.json();
    if(!r.ok)throw new Error(d.mensagem||'Falha na busca.');
    (d.nomes||[]).forEach(nome=>{const o=document.createElement('option');
    o.value=nome;list.appendChild(o);
});}catch(e){console.error(e);}},300);
}

const form=document.getElementById('formAgendamento');



if(form)form.addEventListener('submit',async e=>{e.preventDefault();
    const ja=document.querySelector('input[name="temCadastro"]:checked')?.value==='sim';
    const nome=ja?document.getElementById('nomeIdentificacao').value:document.getElementById('nome').value;
    const data=document.getElementById('data').value;
    const horario=document.getElementById('horario').value.trim();
    if(!data){alert('Por favor, selecione uma data.');return;}
    if(!horario){alert('Por favor, selecione um horário válido.');return;}
        const[ano,mes,dia]=data.split('-');
        const dados={nome:limparTexto(nome),motivo:limparTexto(document.getElementById('motivo').value),data,horario,email:limparTexto(document.getElementById('email').value),cep:limparTexto(document.getElementById('cep').value),endereco:limparTexto(document.getElementById('endereco').value),jaTemCadastro:ja};
        try{const r=await fetch('/api/agendamentos',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(dados)});const resposta=await r.json();
        if(!r.ok)throw new Error(resposta.mensagem||'Não foi possível realizar o agendamento.');document.getElementById('mensagem').innerHTML=`Agendamento confirmado com sucesso!<br>📅 Dia: ${dia}/${mes}/${ano} às 🕒 ${horario}`;form.reset();alternarCampos(false);preencherHorarios(TODOS_HORARIOS);}catch(e){console.error(e);alert(e.message||'Ocorreu um erro ao realizar o agendamento.');}});
