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
import { Controller, Get, Post, Body, Query, UseGuards, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AdminGuard } from '../common/guards/admin.guard';
import { HORARIOS, diaUtil, hoje, blocosValidos, normalizarParticipantes } from '../common/utils/helpers';
import { dataValida } from '../common/utils/date.util';
let AgendamentoController = class AgendamentoController {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async horariosDisponiveis(data) {
        if (!data || !dataValida(data))
            throw new BadRequestException('Data inválida.');
        if (!diaUtil(data))
            return { horariosOcupados: [], horariosDisponiveis: [] };
        return { horariosOcupados: [], horariosDisponiveis: HORARIOS };
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
            throw new BadRequestException('Nome, motivo e data são obrigatórios.');
        if (!dataValida(dataStr) || dataStr < hoje() || !diaUtil(dataStr))
            throw new BadRequestException('Data inválida.');
        const participantes = normalizarParticipantes(body.participantes);
        const blocos = blocosValidos(body.blocos);
        if (tipo === 'grupo') {
            if (!participantes.length)
                throw new BadRequestException('Adicione pelo menos o representante do grupo.');
            if (!blocos.length)
                throw new BadRequestException('Selecione pelo menos um bloco de horário.');
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
                throw new ConflictException('Um ou mais blocos de horário já estão ocupados.');
            }
            throw e;
        }
    }
};
__decorate([
    Get('agendamentos/disponiveis'),
    __param(0, Query('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgendamentoController.prototype, "horariosDisponiveis", null);
__decorate([
    UseGuards(AdminGuard),
    Post('admin/agendamentos'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AgendamentoController.prototype, "criarAgendamentoAdmin", null);
AgendamentoController = __decorate([
    Controller('api'),
    __metadata("design:paramtypes", [PrismaService])
], AgendamentoController);
export { AgendamentoController };
//# sourceMappingURL=agendamento.controller.js.map