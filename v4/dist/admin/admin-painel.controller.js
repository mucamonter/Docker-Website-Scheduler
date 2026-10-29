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
let AdminPainelController = class AdminPainelController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async obterHorariosOcupados(data) {
        if (!data)
            throw new common_1.BadRequestException('A data é obrigatória.');
        const agendamentos = await this.prisma.agendamentos.findMany({
            where: {
                data: new Date(data),
                status: { not: 'cancelado' }
            },
            select: { horario: true },
        });
        const horariosOcupados = agendamentos.map(a => a.horario);
        return { horariosOcupados };
    }
    async listarPendencias() {
        const agendamentos = await this.prisma.agendamentos.findMany({
            where: { status: 'pedido_pendente' },
            orderBy: { data: 'asc' },
        });
        return { agendamentos };
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
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminPainelController);
//# sourceMappingURL=admin-painel.controller.js.map