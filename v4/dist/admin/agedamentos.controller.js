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
exports.AdminAgendamentosController = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma.service");
const admin_guard_1 = require("../common/guards/admin.guard");
const helpers_1 = require("../common/utils/helpers");
const date_util_1 = require("../common/utils/date.util");
let AdminAgendamentosController = class AdminAgendamentosController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async listar(busca, dataStr, status, atendimento) {
        const where = {};
        if (dataStr) {
            if (!(0, date_util_1.dataValida)(dataStr))
                throw new common_1.BadRequestException('Data inválida.');
            where.data = new Date(`${dataStr}T00:00:00Z`);
        }
        if (status) {
            where.status = status;
        }
        if (atendimento) {
            where.atendimento = atendimento;
        }
        if (busca && busca.trim()) {
            const termo = busca.trim();
            where.OR = [
                { nome: { contains: termo } },
                { email: { contains: termo } },
                { telefone: { contains: termo } },
                { endereco: { contains: termo } },
                { motivo: { contains: termo } },
                { tratativa: { contains: termo } },
                { agendamento_participantes: { some: { nome: { contains: termo } } } },
            ];
        }
        const agendamentos = await this.prisma.agendamentos.findMany({
            where,
            take: 500,
            orderBy: [
                { data: 'asc' },
                { horario: 'asc' },
                { id: 'asc' },
            ],
            include: {
                _count: {
                    select: { agendamento_participantes: true },
                },
            },
        });
        const resultado = agendamentos.map((a) => ({
            id: a.id,
            nome: a.nome,
            motivo: a.motivo,
            tratativa: a.tratativa,
            data: a.data ? a.data.toISOString().slice(0, 10) : '',
            horario: a.horario ? a.horario.toISOString().slice(11, 16) : '',
            email: a.email,
            telefone: a.telefone,
            endereco: a.endereco,
            status: a.status,
            atendimento: a.atendimento,
            tipo_atendimento: a.tipo_atendimento,
            cidadao_id: a.cidadao_id,
            participantes_total: a._count.agendamento_participantes,
        }));
        return { agendamentos: resultado };
    }
    async obterDetalhes(id) {
        const agendamento = await this.prisma.agendamentos.findUnique({
            where: { id },
        });
        if (!agendamento) {
            throw new common_1.NotFoundException('Agendamento não encontrado.');
        }
        const [participantes, slots] = await Promise.all([
            this.prisma.agendamento_participantes.findMany({
                where: { agendamento_id: id },
                orderBy: [{ principal: 'desc' }, { id: 'asc' }],
                select: { nome: true, telefone: true, principal: true },
            }),
            this.prisma.agendamento_slots.findMany({
                where: { agendamento_id: id },
                orderBy: { horario_inicio: 'asc' },
                select: { horario_inicio: true },
            }),
        ]);
        const blocos = slots.map((s) => s.horario_inicio.toISOString().slice(11, 16));
        return { participantes, blocos };
    }
    async atualizarAgendamento(id, body) {
        const agendamentoExistente = await this.prisma.agendamentos.findUnique({
            where: { id },
        });
        if (!agendamentoExistente) {
            throw new common_1.NotFoundException('Agendamento não encontrado.');
        }
        const nome = (body.nome || agendamentoExistente.nome || '').trim();
        const email = (body.email || agendamentoExistente.email || '').trim().toLowerCase();
        const telefone = (body.telefone || agendamentoExistente.telefone || '').trim();
        const endereco = (body.endereco || agendamentoExistente.endereco || '').trim();
        const motivo = (body.motivo || agendamentoExistente.motivo || '').trim();
        const tratativa = (body.tratativa || '').trim();
        const status = (body.status || agendamentoExistente.status).trim();
        const dataStr = (body.data || agendamentoExistente.data.toISOString().slice(0, 10)).trim();
        const horario = (body.horario || '').trim();
        const tipo = body.tipo_atendimento === 'grupo' ? 'grupo' : 'unico';
        const atendimento = body.atendimento === 'marcado' ? 'marcado' : 'no_paco';
        if (status === 'pedido_atendido' && !tratativa) {
            throw new common_1.BadRequestException('Informe a tratativa ao concluir o atendimento.');
        }
        const participantes = (0, helpers_1.normalizarParticipantes)(body.participantes);
        const blocos = (0, helpers_1.blocosValidos)(body.blocos);
        const dataFormatada = new Date(`${dataStr}T00:00:00Z`);
        const slotsHorario = tipo === 'grupo' ? blocos : (horario ? [horario] : []);
        try {
            await this.prisma.$transaction(async (tx) => {
                await tx.agendamentos.update({
                    where: { id },
                    data: {
                        nome: tipo === 'grupo' ? (participantes[0]?.nome || nome) : nome,
                        email: email || null,
                        telefone: tipo === 'grupo' ? (participantes[0]?.telefone || telefone) : (telefone || null),
                        endereco: endereco || null,
                        motivo,
                        tratativa: tratativa || null,
                        status,
                        atendimento,
                        tipo_atendimento: tipo,
                        data: dataFormatada,
                        horario: slotsHorario.length ? new Date(`${dataStr}T${slotsHorario[0]}:00Z`) : agendamentoExistente.horario,
                        blocos_json: tipo === 'grupo' ? blocos : client_1.Prisma.DbNull,
                    },
                });
                await tx.agendamento_slots.deleteMany({ where: { agendamento_id: id } });
                if (status !== 'cancelado' && slotsHorario.length > 0) {
                    await tx.agendamento_slots.createMany({
                        data: slotsHorario.map((h) => ({
                            agendamento_id: id,
                            data: dataFormatada,
                            horario_inicio: new Date(`${dataStr}T${h}:00Z`),
                        })),
                    });
                }
                await tx.agendamento_participantes.deleteMany({ where: { agendamento_id: id } });
                if (tipo === 'grupo' && participantes.length > 0) {
                    await tx.agendamento_participantes.createMany({
                        data: participantes.map((p, index) => ({
                            agendamento_id: id,
                            nome: p.nome,
                            telefone: p.telefone || null,
                            principal: index === 0,
                        })),
                    });
                }
            });
            return { sucesso: true };
        }
        catch (e) {
            if (e.code === 'P2002') {
                throw new common_1.ConflictException('Um ou mais blocos de horário selecionados já estão ocupados.');
            }
            throw e;
        }
    }
    async excluirAgendamento(id) {
        const agendamento = await this.prisma.agendamentos.findUnique({
            where: { id },
        });
        if (!agendamento) {
            throw new common_1.NotFoundException('Agendamento não encontrado.');
        }
        await this.prisma.$transaction([
            this.prisma.agendamento_slots.deleteMany({ where: { agendamento_id: id } }),
            this.prisma.agendamento_participantes.deleteMany({ where: { agendamento_id: id } }),
            this.prisma.agendamentos.delete({ where: { id } }),
        ]);
        return { sucesso: true };
    }
};
exports.AdminAgendamentosController = AdminAgendamentosController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('busca')),
    __param(1, (0, common_1.Query)('data')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('atendimento')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], AdminAgendamentosController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(':id/detalhes'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminAgendamentosController.prototype, "obterDetalhes", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AdminAgendamentosController.prototype, "atualizarAgendamento", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AdminAgendamentosController.prototype, "excluirAgendamento", null);
exports.AdminAgendamentosController = AdminAgendamentosController = __decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, common_1.Controller)('admin/agendamentos'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminAgendamentosController);
//# sourceMappingURL=agedamentos.controller.js.map