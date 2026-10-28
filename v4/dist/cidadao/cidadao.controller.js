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
exports.CidadaoController = void 0;
const common_1 = require("@nestjs/common");
const cidadao_guard_1 = require("./cidadao.guard");
const prisma_service_1 = require("../prisma.service");
const bcrypt = __importStar(require("bcryptjs"));
let CidadaoController = class CidadaoController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async cadastrar(body) {
        const nome = (body.nome || '').trim();
        const email = (body.email || '').trim().toLowerCase();
        const senha = body.senha || '';
        if (!nome || !email || !senha)
            throw new common_1.BadRequestException('Nome, e-mail e senha são obrigatórios');
        if (senha.length < 6)
            throw new common_1.BadRequestException('A senha deve ter pelo menos 6 caracteres');
        const existente = await this.prisma.cidadaos.findUnique({ where: { email } });
        if (existente) {
            throw new common_1.ConflictException('Este e-mail já está cadastrado.');
        }
        const senha_hash = await bcrypt.hash(senha, 12);
        const novoCidadao = await this.prisma.cidadaos.create({
            data: {
                nome,
                email,
                senha_hash,
                telefone: body.telefone,
                cep: body.cep,
                endereco: body.endereco,
            },
        });
        return { sucesso: true, id: novoCidadao.id };
    }
    async obterPerfil(req) {
        const cidadao = await this.prisma.cidadaos.findUnique({
            where: { id: req.session.cidadaoId },
            select: {
                id: true, nome: true, email: true, telefone: true
            },
        });
        return { cidadao };
    }
    async meusAgendamentos(req) {
        const cidadaoId = req.session.cidadaoId;
        const [cidadao, agendamentos] = await Promise.all([
            this.prisma.cidadaos.findUnique({
                where: { id: cidadaoId },
                select: { id: true, nome: true, email: true, telefone: true },
            }),
            this.prisma.agendamentos.findMany({
                where: { cidadao_id: cidadaoId },
                orderBy: [{ data: 'desc' }, { horario: 'desc' }],
            }),
        ]);
        return { cidadao, agendamentos };
    }
    async cancelarAgendamento(id, req) {
        const cidadaoId = req.session.cidadaoId;
        return await this.prisma.$transaction(async (tx) => {
            const agendamento = await tx.agendamentos.findFirst({
                where: { id, cidadao_id: cidadaoId, status: 'pedido_pendente' },
            });
            if (!agendamento) {
                throw new common_1.NotFoundException('Agendamento não encontrado ou não pode mais ser cancelado');
            }
            await tx.agendamentos.update({
                where: { id },
                data: { status: 'cancelado' },
            });
            await tx.agendamento_slots.deleteMany({
                where: { agendamento_id: id },
            });
            return { sucesso: true };
        });
    }
};
exports.CidadaoController = CidadaoController;
__decorate([
    (0, common_1.Post)('cadastro'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadaoController.prototype, "cadastrar", null);
__decorate([
    (0, common_1.UseGuards)(cidadao_guard_1.CidadaoGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadaoController.prototype, "obterPerfil", null);
__decorate([
    (0, common_1.UseGuards)(cidadao_guard_1.CidadaoGuard),
    (0, common_1.Get)('meus-agendamentos'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadaoController.prototype, "meusAgendamentos", null);
__decorate([
    (0, common_1.UseGuards)(cidadao_guard_1.CidadaoGuard),
    (0, common_1.Patch)('agendamentos/:id/cancelar'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CidadaoController.prototype, "cancelarAgendamento", null);
exports.CidadaoController = CidadaoController = __decorate([
    (0, common_1.Controller)('api/cidadao'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CidadaoController);
//# sourceMappingURL=cidadao.controller.js.map