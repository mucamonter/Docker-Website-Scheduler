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
import { Controller, Get, Post, Patch, Body, Param, ParseIntPipe, Req, UseGuards, BadRequestException, NotFoundException } from "@nestjs/common";
import { CidadaoGuard } from "./cidadao.guard";
import { PrismaService } from "../prisma/prisma.service";
import * as bcrypt from 'bcryptjs';
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
            throw new BadRequestException('Nome, e-mail e senha são obrigatórios');
        if (senha.length < 6)
            throw new BadRequestException('A senha deve ter pelo menos 6 caracteres');
        const existente = await this.prisma.cidadaos.findUnique({ where: { email } });
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
                orderBy: [{ data: 'desc ' }, { horario: 'desc' }],
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
                throw new NotFoundException('Agendamento não encontrado ou não pode mais ser cancelado');
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
__decorate([
    Post('cadastro'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadaoController.prototype, "cadastrar", null);
__decorate([
    UseGuards(CidadaoGuard),
    Get('me'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadaoController.prototype, "obterPerfil", null);
__decorate([
    UseGuards(CidadaoGuard),
    Get('meus-agendamentos'),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CidadaoController.prototype, "meusAgendamentos", null);
__decorate([
    UseGuards(CidadaoGuard),
    Patch('agendamentos/:id/cancelar'),
    __param(0, Param('id', ParseIntPipe)),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CidadaoController.prototype, "cancelarAgendamento", null);
CidadaoController = __decorate([
    Controller('api/cidadao'),
    __metadata("design:paramtypes", [PrismaService])
], CidadaoController);
export { CidadaoController };
//# sourceMappingURL=cidadao.controller.js.map