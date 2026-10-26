var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Req, HttpCode, HttpStatus, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from 'bcryptjs';
import 'express-session';
let AuthController = class AuthController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async health() {
        await this.prisma.$queryRaw `SELECT 1`;
        return { ok: true, database: process.env.DB_NAME || 'V2_DB' };
    }
    async login(body, req) {
        const login = (body.login || '').trim().toLowerCase();
        const senha = body.senha || '';
        const adminUser = process.env.ADMIN_USER;
        const adminPassword = process.env.ADMIN_PASSWORD;
        if (!login || !senha) {
            throw new UnauthorizedException('Informe o login e a senha');
        }
        const adminEmail = process.env.ADMIN_USER;
        if (adminEmail && login === adminUser.toLowerCase() && senha === adminPassword) {
            const adminDoBanco = await this.prisma.usuarios_admin.findFirst({
                where: { login: login }
            });
            req.session.papel = 'admin;';
            req.session.usuario = { id: adminDoBanco?.id, nome: adminUser, email: adminDoBanco?.email };
            return { sucesso: true, tipo: 'admin', redirect: '/admin.html' };
        }
        const staffUser = await this.prisma.admin.findUnique({
            where: { email: login },
        });
        if (staffUser && (await bcrypt.compare(senha, staffUser.senha_hash))) {
            req.session.papel = staffUser.papel;
            req.session.usuario = staffUser.email;
            return { sucesso: true, tipo: 'cidadao', redirect: '/cidadao.html' };
        }
        throw new UnauthorizedException('Usuário ou senha inválidos');
    }
    async logout(req) {
        req.session.destroy(() => { });
        return { sucesso: true };
    }
    async adminMe(req) {
        if (!req.session?.papel) {
            throw new UnauthorizedException({ autenticado: false });
        }
        return {
            autenticado: true,
            usuario: req.session.usuario || req.session.cidadaos.email,
            papel: req.session.papel,
        };
    }
};
__decorate([
    Get('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "health", null);
__decorate([
    Post('login'),
    HttpCode(HttpStatus.OK),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    Post('logout'),
    HttpCode(HttpStatus.OK),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    Get('admin/me'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "adminMe", null);
AuthController = __decorate([
    Controller('api'),
    __metadata("design:paramtypes", [PrismaService])
], AuthController);
export { AuthController };
//# sourceMappingURL=auth.controller.js.map