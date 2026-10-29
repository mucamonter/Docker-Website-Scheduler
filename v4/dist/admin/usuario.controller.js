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
exports.AdminUsuariosController = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcryptjs"));
const prisma_service_1 = require("../prisma.service");
const admin_guard_1 = require("../common/guards/admin.guard");
let AdminUsuariosController = class AdminUsuariosController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listar() {
        const usuarios = await this.prisma.usuarios_admin.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
                papel: true,
                criado_em: true,
            },
            orderBy: { nome: 'asc' },
        });
        const resultado = usuarios.map((u) => ({
            ...u,
            criado_em: u.criado_em ? u.criado_em.toISOString().slice(0, 10) : '',
        }));
        return { usuarios: resultado };
    }
    async criar(body) {
        const nome = (body.nome || '').trim();
        const email = (body.email || '').trim().toLowerCase();
        const senha = body.senha || '';
        const papelInput = body.papel === 'admin' ? 'admin' : 'visualizador';
        if (!nome || !email || !senha) {
            throw new common_1.BadRequestException('Nome, e-mail e senha são obrigatórios.');
        }
        const existente = await this.prisma.usuarios_admin.findUnique({
            where: { email },
        });
        if (existente) {
            throw new common_1.ConflictException('Já existe um usuário cadastrado com este e-mail.');
        }
        const senha_hash = await bcrypt.hash(senha, 12);
        const novo = await this.prisma.usuarios_admin.create({
            data: {
                nome,
                email,
                senha_hash,
                papel: papelInput,
            },
        });
        return { sucesso: true, id: novo.id };
    }
    async atualizar(id, body) {
        const usuario = await this.prisma.usuarios_admin.findUnique({ where: { id } });
        if (!usuario)
            throw new common_1.NotFoundException('Usuário não encontrado.');
        const nome = (body.nome || usuario.nome).trim();
        const papelInput = body.papel === 'admin' ? 'admin' : 'visualizador';
        const dataUpdate = {
            nome,
            papel: papelInput,
        };
        if (body.senha && body.senha.trim().length >= 6) {
            dataUpdate.senha_hash = await bcrypt.hash(body.senha.trim(), 12);
        }
        await this.prisma.usuarios_admin.update({
            where: { id },
            data: dataUpdate,
        });
        return { sucesso: true };
    }
    async excluir(id) {
        const usuario = await this.prisma.usuarios_admin.findUnique({ where: { id } });
        if (!usuario)
            throw new common_1.NotFoundException('Usuário não encontrado.');
        await this.prisma.usuarios_admin.delete({ where: { id } });
        return { sucesso: true };
    }
};
exports.AdminUsuariosController = AdminUsuariosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminUsuariosController.prototype, "listar", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminUsuariosController.prototype, "criar", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminUsuariosController.prototype, "atualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminUsuariosController.prototype, "excluir", null);
exports.AdminUsuariosController = AdminUsuariosController = __decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Controller)('admin/usuarios'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminUsuariosController);
//# sourceMappingURL=usuario.controller.js.map