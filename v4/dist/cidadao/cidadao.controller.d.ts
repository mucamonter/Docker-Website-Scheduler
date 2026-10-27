import { Request } from "express";
import { PrismaService } from "../prisma.service";
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
            nome: string;
            email: string;
            telefone: string;
        };
    }>;
    meusAgendamentos(req: Request): Promise<{
        cidadao: {
            id: number;
            nome: string;
            email: string;
            telefone: string;
        };
        agendamentos: {
            id: number;
            cidadao_id: number | null;
            nome: string;
            motivo: string | null;
            tratativa: string | null;
            data: Date;
            horario: Date;
            atendimento: import("@prisma/client").$Enums.agendamentos_atendimento;
            tipo_atendimento: import("@prisma/client").$Enums.agendamentos_tipo_atendimento;
            blocos_json: import("@prisma/client/runtime/client").JsonValue | null;
            email: string | null;
            telefone: string | null;
            cep: string | null;
            endereco: string | null;
            data_registro: Date;
            status: import("@prisma/client").$Enums.agendamentos_status;
        }[];
    }>;
    cancelarAgendamento(id: number, req: Request): Promise<{
        sucesso: boolean;
    }>;
}
