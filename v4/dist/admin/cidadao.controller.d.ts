import { PrismaService } from '../prisma.service';
export declare class AdminCidadaosController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listar(busca?: string): Promise<{
        cidadaos: {
            criado_em: string;
            id: number;
            email: string;
            nome: string;
            telefone: string | null;
        }[];
    }>;
    obterDetalhes(id: number): Promise<{
        cidadao: {
            criado_em: string;
            id: number;
            email: string;
            nome: string;
            telefone: string | null;
            cep: string | null;
            endereco: string | null;
        };
        agendamentos: {
            id: number;
            data_br: string;
            horario: string;
            motivo: string | null;
            status: import("@prisma/client").$Enums.agendamentos_status;
            atendimento: import("@prisma/client").$Enums.agendamentos_atendimento;
            tratativa: string | null;
        }[];
    }>;
    alterarSenha(id: number, senha?: string): Promise<{
        mensagem: string;
    }>;
}
