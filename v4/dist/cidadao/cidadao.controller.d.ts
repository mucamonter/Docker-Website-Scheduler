import { Request } from "express";
import { PrismaService } from "../prisma.service";
declare module 'express-session' {
    interface SessionData {
        cidadaoId?: number;
    }
}
export declare class CidadaoController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    cadastrar(body: {
        nome?: string;
        email?: string;
        senha?: string;
        telefone?: string;
        cep?: string;
        endereco?: string;
    }): Promise<{
        sucesso: boolean;
        id: number;
    }>;
    obterPerfil(req: Request): Promise<{
        cidadao: {
            id: number;
            email: string;
            nome: string;
            telefone: string | null;
        } | null;
    }>;
    meusAgendamentos(req: Request): Promise<{
        cidadao: {
            id: number;
            email: string;
            nome: string;
            telefone: string | null;
        } | null;
        agendamentos: {
            id: number;
            email: string | null;
            nome: string;
            motivo: string | null;
            tratativa: string | null;
            data: Date;
            horario: Date;
            atendimento: import("@prisma/client").$Enums.agendamentos_atendimento;
            telefone: string | null;
            cep: string | null;
            endereco: string | null;
            data_registro: Date;
            status: import("@prisma/client").$Enums.agendamentos_status;
            cidadao_id: number | null;
            tipo_atendimento: import("@prisma/client").$Enums.agendamentos_tipo_atendimento;
            blocos_json: import("@prisma/client/runtime/client").JsonValue | null;
        }[];
    }>;
    cancelarAgendamento(id: number, req: Request): Promise<{
        sucesso: boolean;
    }>;
}
