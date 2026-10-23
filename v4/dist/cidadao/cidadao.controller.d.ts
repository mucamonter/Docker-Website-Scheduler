import { Request } from "express";
import { PrismaService } from "../prisma/prisma.service";
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
        id: any;
    }>;
    obterPerfil(req: Request): Promise<{
        cidadao: any;
    }>;
    meusAgendamentos(req: Request): Promise<{
        cidadao: any;
        agendamentos: any;
    }>;
    cancelarAgendamento(id: number, req: Request): Promise<any>;
}
