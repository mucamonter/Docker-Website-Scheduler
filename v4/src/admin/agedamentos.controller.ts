import { 
  Controller, Get, Patch, Delete, Body, Query, Param, 
  ParseIntPipe, UseGuards, BadRequestException, NotFoundException, ConflictException 
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { AdminGuard } from '../common/guards/admin.guard';
import { blocosValidos, normalizarParticipantes } from '../common/utils/helpers';
import { dataValida } from '../common/utils/date.util';

import { 
  agendamentos_status, 
  agendamentos_atendimento, 
  agendamentos_tipo_atendimento 
} from '@prisma/client';

@UseGuards(AdminGuard)
@Controller('admin/agendamentos')
export class AdminAgendamentosController {
  constructor(private readonly prisma: PrismaService) {}

  // 1. LISTAR AGENDAMENTOS (com filtros de busca, data, status e atendimento)
  // GET /api/admin/agendamentos
  @Get()
  async listar(
    @Query('busca') busca?: string,
    @Query('data') dataStr?: string,
    @Query('status') status?: string,
    @Query('atendimento') atendimento?: string,
  ) {
    const where: Prisma.agendamentosWhereInput = {};

    if (dataStr) {
      if (!dataValida(dataStr)) throw new BadRequestException('Data inválida.');
      where.data = new Date(`${dataStr}T00:00:00Z`);
    }

    if (status) {
      where.status = status as agendamentos_status;
    }

    if (atendimento) {
      where.atendimento = atendimento as agendamentos_atendimento;
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

    // Formatação dos campos de data e horário para exibição no frontend
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

  // 2. DETALHES DO AGENDAMENTO (Grupos, participantes e blocos de horário)
  // GET /api/admin/agendamentos/:id/detalhes
  @Get(':id/detalhes')
  async obterDetalhes(@Param('id', ParseIntPipe) id: number) {
    const agendamento = await this.prisma.agendamentos.findUnique({
      where: { id },
    });

    if (!agendamento) {
      throw new NotFoundException('Agendamento não encontrado.');
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

  // 3. ATUALIZAR / GERENCIAR AGENDAMENTO
  // PATCH /api/admin/agendamentos/:id
  @Patch(':id')
  async atualizarAgendamento(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
  ) {
    const agendamentoExistente = await this.prisma.agendamentos.findUnique({
      where: { id },
    });

    if (!agendamentoExistente) {
      throw new NotFoundException('Agendamento não encontrado.');
    }

    const nome = (body.nome || agendamentoExistente.nome || '').trim();
    const email = (body.email || agendamentoExistente.email || '').trim().toLowerCase();
    const telefone = (body.telefone || agendamentoExistente.telefone || '').trim();
    const endereco = (body.endereco || agendamentoExistente.endereco || '').trim();
    const motivo = (body.motivo || agendamentoExistente.motivo || '').trim();
    const tratativa = (body.tratativa || '').trim();
    const status = (body.status || agendamentoExistente.status).trim() as agendamentos_status;
    const dataStr = (body.data || agendamentoExistente.data.toISOString().slice(0, 10)).trim();
    const horario = (body.horario || '').trim();
    const tipo = body.tipo_atendimento === 'grupo' ? 'grupo' : 'unico' as agendamentos_tipo_atendimento;
    const atendimento = body.atendimento === 'marcado' ? 'marcado' : 'no_paco' as agendamentos_atendimento;

    if (status === 'pedido_atendido' && !tratativa) {
      throw new BadRequestException('Informe a tratativa ao concluir o atendimento.');
    }

    const participantes = normalizarParticipantes(body.participantes);
    const blocos = blocosValidos(body.blocos);

    const dataFormatada = new Date(`${dataStr}T00:00:00Z`);
    const slotsHorario = tipo === 'grupo' ? blocos : (horario ? [horario] : []);

    try {
      await this.prisma.$transaction(async (tx) => {
        // 1. Atualizar registro principal
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
            blocos_json: tipo === 'grupo' ? (blocos as Prisma.InputJsonValue) : Prisma.DbNull,
          },
        });

        // 2. Atualizar Slots de Horários
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

        // 3. Atualizar Participantes
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
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new ConflictException('Um ou mais blocos de horário selecionados já estão ocupados.');
      }
      throw e;
    }
  }

  // 4. EXCLUIR AGENDAMENTO
  // DELETE /api/admin/agendamentos/:id
  @Delete(':id')
  async excluirAgendamento(@Param('id', ParseIntPipe) id: number) {
    const agendamento = await this.prisma.agendamentos.findUnique({
      where: { id },
    });

    if (!agendamento) {
      throw new NotFoundException('Agendamento não encontrado.');
    }

    await this.prisma.$transaction([
      this.prisma.agendamento_slots.deleteMany({ where: { agendamento_id: id } }),
      this.prisma.agendamento_participantes.deleteMany({ where: { agendamento_id: id } }),
      this.prisma.agendamentos.delete({ where: { id } }),
    ]);

    return { sucesso: true };
  }
}