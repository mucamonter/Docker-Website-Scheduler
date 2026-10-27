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
exports.AgendamentoController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const admin_guard_1 = require("../common/guards/admin.guard");
const helpers_1 = require("../common/utils/helpers");
const date_util_1 = require("../common/utils/date.util");
let AgendamentoController = class AgendamentoController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async horariosDisponiveis(data) {
        if (!data || !(0, date_util_1.dataValida)(data))
            throw new common_1.BadRequestException('Data inválida.');
        if (!(0, helpers_1.diaUtil)(data))
            return { horariosOcupados: [], horariosDisponiveis: [] };
        return { horariosOcupados: [], horariosDisponiveis: helpers_1.HORARIOS };
    }
    async criarAgendamentoAdmin(body) {
        const nome = (body.nome || '').trim();
        const email = (body.email || '').trim().toLowerCase();
        const telefone = (body.telefone || '').trim();
        const endereco = (body.endereco || '').trim();
        const motivo = (body.motivo || '').trim();
        const dataStr = (body.data || '').trim();
        const horario = (body.horario || '').trim();
        const tipo = body.tipo_atendimento === 'grupo' ? 'grupo' : 'unico';
        const atendimento = body.atendimento === 'marcado' ? 'marcado' : 'no_paco';
        if (!nome || !motivo || !dataStr)
            throw new common_1.BadRequestException('Nome, motivo e data são obrigatórios.');
        if (!(0, date_util_1.dataValida)(dataStr) || dataStr < (0, helpers_1.hoje)() || !(0, helpers_1.diaUtil)(dataStr))
            throw new common_1.BadRequestException('Data inválida.');
        const participantes = (0, helpers_1.normalizarParticipantes)(body.participantes);
        const blocos = (0, helpers_1.blocosValidos)(body.blocos);
        if (tipo === 'grupo') {
            if (!participantes.length)
                throw new common_1.BadRequestException('Adicione pelo menos o representante do grupo.');
            if (!blocos.length)
                throw new common_1.BadRequestException('Selecione pelo menos um bloco de horário.');
        }
        const dataFormatada = new Date(dataStr);
        const slotsHorario = tipo === 'grupo' ? blocos : [horario];
        try {
            const novoAgendamento = await this.prisma.$transaction(async (tx) => {
                return await tx.agendamentos.create({
                    data: {
                        nome,
                        email: email || null,
                        telefone: telefone || null,
                        endereco: endereco || null,
                        motivo,
                        data: dataFormatada,
                        horario: new Date(`${dataStr}T${slotsHorario[0]}:00Z`),
                        status: 'pedido_pendente',
                        atendimento,
                        tipo_atendimento: tipo,
                        blocos_json: tipo === 'grupo' ? blocos : null,
                        agendamento_slots: {
                            create: slotsHorario.map((h) => ({
                                data: dataFormatada,
                                horario_inicio: new Date(`${dataStr}T${h}:00Z`),
                            })),
                        },
                        agendamento_participantes: {
                            create: participantes.map((p, index) => ({
                                nome: p.nome,
                                telefone: p.telefone || null,
                                principal: index === 0,
                            })),
                        },
                    },
                });
            });
            return { sucesso: true, id: novoAgendamento.id };
        }
        catch (e) {
            if (e.code === 'P2002') {
                throw new common_1.ConflictException('Um ou mais blocos de horário já estão ocupados.');
            }
            throw e;
        }
    }
};
exports.AgendamentoController = AgendamentoController;
__decorate([
    (0, common_1.Get)('agendamentos/disponiveis'),
    __param(0, (0, common_1.Query)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgendamentoController.prototype, "horariosDisponiveis", null);
__decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Post)('admin/agendamentos'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendamentoController.prototype, "criarAgendamentoAdmin", null);
exports.AgendamentoController = AgendamentoController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AgendamentoController);
//# sourceMappingURL=agendamento.controller.js.map