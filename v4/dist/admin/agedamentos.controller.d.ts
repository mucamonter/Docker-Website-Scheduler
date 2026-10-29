import { PrismaService } from '../prisma.service';
export declare class AdminAgendamentosController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listar(busca?: string, dataStr?: string, status?: string, atendimento?: string): Promise<{
        agendamentos: {
            id: number;
            nome: string;
            motivo: string | null;
            tratativa: string | null;
            data: string;
            horario: string;
            email: string | null;
            telefone: string | null;
            endereco: string | null;
            status: import("@prisma/client").$Enums.agendamentos_status;
            atendimento: import("@prisma/client").$Enums.agendamentos_atendimento;
            tipo_atendimento: import("@prisma/client").$Enums.agendamentos_tipo_atendimento;
            cidadao_id: number | null;
            participantes_total: number;
        }[];
    }>;
    obterDetalhes(id: number): Promise<{
        participantes: {
            nome: string;
            telefone: string | null;
            principal: boolean;
        }[];
        blocos: string[];
    }>;
    atualizarAgendamento(id: number, body: any): Promise<{
        sucesso: boolean;
    }>;
    excluirAgendamento(id: number): Promise<{
        sucesso: boolean;
    }>;
}
