import { PrismaService } from '../prisma.service';
export declare class AdminPainelController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    obterHorariosOcupados(data: string): Promise<{
        horariosOcupados: Date[];
    }>;
    listarPendencias(): Promise<{
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
}
