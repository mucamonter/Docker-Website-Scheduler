"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPainelController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const admin_guard_1 = require("../common/guards/admin.guard");
const date_util_1 = require("../common/utils/date.util");
let AdminPainelController = class AdminPainelController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async obterHorariosOcupados(dataStr) {
        if (!dataStr || !(0, date_util_1.dataValida)(dataStr)) {
            throw new common_1.BadRequestException('Data válida é obrigatória.');
        }
        const dataFormatada = new Date(`${dataStr}T00:00:00Z`);
        const slots = await this.prisma.agendamento_slots.findMany({
            where: { data: dataFormatada },
            select: { horario_inicio: true },
        });
        const horariosOcupados = slots.map((s) => s.horario_inicio.toISOString().slice(11, 16));
        return { horariosOcupados };
    }
    async listarPendencias() {
        const agendamentos = await this.prisma.agendamentos.findMany({
            where: { status: 'pedido_pendente' },
            orderBy: [{ data: 'asc' }, { horario: 'asc' }],
        });
        const resultado = agendamentos.map((a) => ({
            id: a.id,
            nome: a.nome,
            telefone: a.telefone,
            motivo: a.motivo,
            status: a.status,
            data: a.data ? a.data.toISOString().slice(0, 10) : '',
            horario: a.horario ? a.horario.toISOString().slice(11, 16) : '',
        }));
        return { agendamentos: resultado };
    }
};
exports.AdminPainelController = AdminPainelController;
__decorate([
    (0, common_1.Get)('horarios'),
    __param(0, (0, common_1.Query)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminPainelController.prototype, "obterHorariosOcupados", null);
__decorate([
    (0, common_1.Get)('pendencias'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminPainelController.prototype, "listarPendencias", null);
exports.AdminPainelController = AdminPainelController = __decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminPainelController);
//# sourceMappingURL=painel.controller.js.map