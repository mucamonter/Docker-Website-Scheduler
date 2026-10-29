import { PrismaService } from '../prisma.service';
export declare class AdminPainelController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    obterHorariosOcupados(dataStr?: string): Promise<{
        horariosOcupados: string[];
    }>;
    listarPendencias(): Promise<{
        agendamentos: {
            id: number;
            nome: string;
            telefone: string | null;
            motivo: string | null;
            status: import("@prisma/client").$Enums.agendamentos_status;
            data: string;
            horario: string;
        }[];
    }>;
}
