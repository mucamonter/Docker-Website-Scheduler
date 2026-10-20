export const HORARIOS = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'];
export const STATUS = ['cancelado', 'pedido_nao_atendido', 'pedido_atendido', 'pedido_pendente'];
export const ATENDIMENTO = ['no_paco', 'marcado'];
import express,  { type Request, type Response, type NextFunction } from 'express';
import { dataValida } from './db';
import type { DataISO } from './types/data';
import type { RequestHandler } from 'express';

const texto = (v:string) => typeof v === 'string' ? v.trim() : '';
const TIPOS_ATENDIMENTO = ['unico', 'grupo'];

 export function exigirCidadao(req: Request, res: Response, next:NextFunction) {
  if (req.session?.papel === 'cidadao' && req.session?.cidadaoId) return next();
  return res.status(401).json({ mensagem: 'Login de cidadão necessário.' });
}

export function diaUtil(v:string) {
  
  const match = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;

  const a = Number(match[1]);
  const m = Number(match[2]);
  const d = Number(match[3]);

  return ![0, 6].includes(new Date(Date.UTC(a, m - 1, d)).getUTCDay());
}

export function aplicarBuscaAgendamentos(req: Request, isViewer:boolean) {
  const data = texto(typeof req.query.data === 'string' ? req.query.data : ''), busca = texto(typeof req.query.busca === 'string' ? req.query.busca : ''), status = texto(typeof req.query.status === 'string' ? req.query.status : ''), atendimento = texto(typeof req.query.atendimento === 'string' ? req.query.atendimento : '');
  const where = [], params = [];
  if (data) { if (!dataValida(data)) throw new Error('Data inválida.'); where.push('a.data=?'); params.push(data); }
  if (status) { if (!STATUS.includes(status)) throw new Error('Status inválido.'); where.push('a.status=?'); params.push(status); }
  if (atendimento) { if (!ATENDIMENTO.includes(atendimento)) throw new Error('Tipo de atendimento inválido.'); where.push('a.atendimento=?'); params.push(atendimento); }
  if (busca) { const t = `%${busca}%`; where.push(`(a.nome LIKE ? OR a.email LIKE ? OR a.telefone LIKE ? OR a.cep LIKE ? OR a.endereco LIKE ? OR a.motivo LIKE ? OR a.tratativa LIKE ? OR CAST(a.data AS CHAR) LIKE ? OR TIME_FORMAT(a.horario,'%H:%i') LIKE ? OR a.status LIKE ? OR a.atendimento LIKE ? OR EXISTS (SELECT 1 FROM agendamento_participantes gp WHERE gp.agendamento_id=a.id AND (gp.nome LIKE ? OR gp.telefone LIKE ?)))`); params.push(t, t, t, t, t, t, t, t, t, t, t, t, t); }
  return { where, params };
}


export function hoje() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
}
export const exigirAdmin: RequestHandler = (req: Request, res: Response, next:NextFunction) => {
  const papeisPermitidos = ['admin', 'visualizador'];

  if (!req.session?.papel) {
    return res.status(401).json({ mensagem: 'Autenticação necessária.' });
  }

  if (!papeisPermitidos.includes(req.session.papel)) {
    return res.status(403).json({ mensagem: 'Acesso negado.' });
  }

  return next();
};
export function exigirStaff(req: Request, res: Response, next:NextFunction) {
  if (req.session?.papel === 'admin' || req.session?.papel === 'visualizador') return next();
  return res.status(401).json({ mensagem: 'Acesso ao painel necessário.' });
}

export function valorStatus(s:DataISO) { return STATUS.includes(s) ? s : null; }
export function valorAtendimento(s:DataISO) { return ATENDIMENTO.includes(s) ? s : null; }
export function valorTipo(s:DataISO) { return TIPOS_ATENDIMENTO.includes(s) ? s : null; }
export function normalizarParticipantes(lista:any) {
  if (!Array.isArray(lista)) return [];
  return lista.map(p => ({ nome: texto(p?.nome), telefone: texto(p?.telefone) })).filter(p => p.nome).slice(0, 100);
}
export function blocosValidos(lista:any) {
  if (!Array.isArray(lista)) return [];
  return [...new Set(lista.map(texto))].filter(h => HORARIOS.includes(h));
}

export function ehDataISO(s:string): s is DataISO{
const regexISO = /^\d{4}-\d{2}-\d{2}$/;
if (regexISO.test(s)) return false;
const data = new Date(s);
return !isNaN(data.getTime());
 }