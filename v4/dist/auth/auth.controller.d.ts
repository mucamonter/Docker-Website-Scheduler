import { PrismaService } from "../prisma.service";
import { Request } from "express";
import 'express-session';
export declare class AuthController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    health(): Promise<{
        ok: boolean;
        database: string;
    }>;
    login(body: {
        login?: string;
        senha?: string;
    }, req: Request): Promise<{
        sucesso: boolean;
        tipo: string;
        redirect: string;
    }>;
    logout(req: Request): Promise<{
        sucesso: boolean;
    }>;
    adminMe(req: Request): Promise<{
        autenticado: boolean;
        usuario: string | {
            id: number;
            nome: string;
            email: string;
            papel?: string;
        };
        papel: string;
    }>;
}
