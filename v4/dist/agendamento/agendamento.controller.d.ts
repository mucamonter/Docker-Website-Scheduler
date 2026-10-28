import { PrismaService } from '../prisma.service';
export declare class AgendamentoController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    horariosDisponiveis(data?: string): Promise<{
        horariosOcupados: never[];
        horariosDisponiveis: string[];
    }>;
    criarAgendamentoAdmin(body: any): Promise<{
        sucesso: boolean;
        id: number;
    }>;
}
