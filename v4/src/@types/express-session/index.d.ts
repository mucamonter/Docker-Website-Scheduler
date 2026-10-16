import 'express-session';
import type { agendamentos$agendamento_participantesArgs, DateTimeFieldRefInput } from '../../generated/prisma/internal/prismaNamespace';
import type { agendamento_participantes, agendamento_slots, agendamentos_atendimento, agendamentos_status, agendamentos_tipo_atendimento, cidadaos } from '@prisma/client';

declare module 'express-session' {
  interface SessionData {
    
    papel?: 'admin' | 'visualizador' | 'cidadao' | string; 
    req?: 'Requirement';
    cidadaoId?: Intl;
    nome?: string;
    motivo?: string;
    tratativa: string;
    data?: Date;
    horario?: DateTimeFieldRefInput;
    atendimento?: agendamentos_atendimento;
    tipoagendamento?: agendamentos_tipo_atendimento;
    email?: String;
    telefone?: String;
    email?: String;
    cep?: String;
    endereco?: String;
    data_registro?: Date;
    status?: agendamentos_status;
    agendamento_participantes?: agendamento_participantes;
    agendamento_slots?: agendamento_slots;
    cidadaos?: cidadaos;
    
  }
}
