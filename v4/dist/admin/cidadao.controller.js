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
exports.AdminCidadaosController = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcryptjs"));
const prisma_service_1 = require("../prisma.service");
const admin_guard_1 = require("../common/guards/admin.guard");
let AdminCidadaosController = class AdminCidadaosController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listar(busca) {
        const where = {};
        if (busca && busca.trim()) {
            const termo = busca.trim();
            where.OR = [
                { nome: { contains: termo } },
                { email: { contains: termo } },
                { telefone: { contains: termo } },
            ];
        }
        const cidadaos = await this.prisma.cidadaos.findMany({
            where,
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                criado_em: true,
            },
            orderBy: { nome: 'asc' },
            take: 100,
        });
        const resultado = cidadaos.map((c) => ({
            ...c,
            criado_em: c.criado_em ? c.criado_em.toISOString().slice(0, 10) : '',
        }));
        return { cidadaos: resultado };
    }
    async obterDetalhes(id) {
        const cidadao = await this.prisma.cidadaos.findUnique({
            where: { id },
            select: {
                id: true,
                nome: true,
                email: true,
                telefone: true,
                cep: true,
                endereco: true,
                criado_em: true,
            },
        });
        if (!cidadao)
            throw new common_1.NotFoundException('Cidadão não encontrado.');
        const agendamentos = await this.prisma.agendamentos.findMany({
            where: { cidadao_id: id },
            orderBy: [{ data: 'desc' }, { horario: 'desc' }],
        });
        const agendamentosFormatados = agendamentos.map((a) => {
            const dataStr = a.data ? a.data.toISOString().slice(0, 10) : '';
            const [ano, mes, dia] = dataStr.split('-');
            return {
                id: a.id,
                data_br: `${dia}/${mes}/${ano}`,
                horario: a.horario ? a.horario.toISOString().slice(11, 16) : '',
                motivo: a.motivo,
                status: a.status,
                atendimento: a.atendimento,
                tratativa: a.tratativa,
            };
        });
        return {
            cidadao: {
                ...cidadao,
                criado_em: cidadao.criado_em ? cidadao.criado_em.toISOString().slice(0, 10) : '',
            },
            agendamentos: agendamentosFormatados,
        };
    }
    async alterarSenha(id, senha) {
        if (!senha || senha.trim().length < 6) {
            throw new common_1.BadRequestException('A nova senha deve ter pelo menos 6 caracteres.');
        }
        const cidadao = await this.prisma.cidadaos.findUnique({ where: { id } });
        if (!cidadao)
            throw new common_1.NotFoundException('Cidadão não encontrado.');
        const senha_hash = await bcrypt.hash(senha.trim(), 12);
        await this.prisma.cidadaos.update({
            where: { id },
            data: { senha_hash },
        });
        return { mensagem: 'Senha alterada com sucesso.' };
    }
};
exports.AdminCidadaosController = AdminCidadaosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('busca')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminCidadaosController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminCidadaosController.prototype, "obterDetalhes", null);
__decorate([
    (0, common_1.Patch)(':id/senha'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)('senha')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], AdminCidadaosController.prototype, "alterarSenha", null);
exports.AdminCidadaosController = AdminCidadaosController = __decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Controller)('admin/cidadaos'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminCidadaosController);
//# sourceMappingURL=cidadao.controller.js.map