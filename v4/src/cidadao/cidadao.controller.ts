import { Controller, Get, Post, Patch, Body, Param, ParseIntPipe, Req, UseGuards, BadRequestException, ConflictException, NotFoundException } from "@nestjs/common";

import { Request } from "express";

import { CidadaoGuard } from "./cidadao.guard";

import { PrismaService } from "../prisma/prisma.service";
import { PrismaClient } from "@prisma/client/extension";

import * as bcrypt from 'bcryptjs';

@Controller('api/cidadao')
export class CidadaoController {
    constructor(private readonly prisma: PrismaService){}

    @Post('cadastro')

    //definindo o corpo da carta
    async cadastrar(@Body() body: { nome?: string; email?: string; senha?: string; telefone?: string; cep?: string; endereco?: string}) {
        const nome = (body.nome || '').trim();
        const email = (body.email || '').trim().toLowerCase();
        const senha = body.senha || '';

        if (!nome || !email || !senha) throw new BadRequestException('Nome, e-mail e senha são obrigatórios');

        if (senha.length < 6) throw new BadRequestException('A senha deve ter pelo menos 6 caracteres');

        const existente = await this.prisma.cidadaos.findUnique({ where: { email} });

        const senha_hash = await bcrypt.hash(senha , 12);

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

@UseGuards(CidadaoGuard)
@Get('me')
async obterPerfil(@Req() req: Request) {
    const cidadao = await this.prisma.cidadaos.findUnique({
        where: { id: req.session.cidadaoId },
        select: {
          id: true, nome: true, email: true, telefone: true},
    });
    return { cidadao };
}

@UseGuards(CidadaoGuard)
@Get('meus-agendamentos')
async meusAgendamentos(@Req() req: Request){
    const cidadaoId = req.session.cidadaoId;

    const [cidadao, agendamentos] = await Promise.all([
        this.prisma.cidadaos.findUnique({
            where: { id: cidadaoId },
            select: {id: true, nome: true, email: true, telefone: true},
        }),
        this.prisma.agendamentos.findMany({
            where: {cidadao_id: cidadaoId},
            orderBy: [{ data: 'desc ' }, {horario: 'desc'}],
        }),
    ]);
    return { cidadao, agendamentos};
}

@UseGuards(CidadaoGuard)
@Patch('agendamentos/:id/cancelar')
async cancelarAgendamento(@Param('id', ParseIntPipe) id: number, @Req() req: Request) {
    const cidadaoId = req.session.cidadaoId;

    return await this.prisma.$transaction(async (tx) => {
        const agendamento = await tx.agendamentos.findFirst({
            where: {id, cidadao_id: cidadaoId, status: 'pedido_pendente'},
        });

        if (!agendamento){
            throw new NotFoundException('Agendamento não encontrado ou não pode mais ser cancelado');
        }

        await tx. agendamentos.update({
            where: { id },
            data: { status: 'cancelado'},
        });

        await tx.agendamento_slots.deleteMany({
            where: { agendamento_id: id },
            
        });
        return { sucesso: true};
    });
 }
}
