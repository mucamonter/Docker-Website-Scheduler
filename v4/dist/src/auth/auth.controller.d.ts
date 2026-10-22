import { PrismaService } from "../admin/admin.controller";
import { Request } from "express";
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
        Redirect: string;
        redirect?: undefined;
    } | {
        sucesso: boolean;
        tipo: string;
        redirect: string;
        Redirect?: undefined;
    }>;
}
