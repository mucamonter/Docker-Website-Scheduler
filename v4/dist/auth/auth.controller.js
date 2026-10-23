"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const bcrypt = __importStar(require("bcryptjs"));
require("express-session");
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
            throw new common_1.UnauthorizedException('Informe o login e a senha');
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
        throw new common_1.UnauthorizedException('Usuário ou senha inválidos');
    }
    async logout(req) {
        req.session.destroy(() => { });
        return { sucesso: true };
    }
    async adminMe(req) {
        if (!req.session?.papel) {
            throw new common_1.UnauthorizedException({ autenticado: false });
        }
        return {
            autenticado: true,
            usuario: req.session.usuario || req.session.cidadaos.email,
            papel: req.session.papel,
        };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('health'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "health", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('admin/me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "adminMe", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map