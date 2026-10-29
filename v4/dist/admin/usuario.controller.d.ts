import { PrismaService } from '../prisma.service';
export declare class AdminUsuariosController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listar(): Promise<{
        usuarios: {
            criado_em: string;
            id: number;
            email: string;
            nome: string;
            papel: import("@prisma/client").$Enums.usuarios_admin_papel;
        }[];
    }>;
    criar(body: any): Promise<{
        sucesso: boolean;
        id: number;
    }>;
    atualizar(id: number, body: any): Promise<{
        sucesso: boolean;
    }>;
    excluir(id: number): Promise<{
        sucesso: boolean;
    }>;
}
