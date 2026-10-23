import { Controller, Get, Post, Body, Query, Param, ParseIntPipe, UseGuards, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AdminGuard } from '../common/guards/admin.guard';
import { HORARIOS, diaUtil, hoje, blocosValidos, normalizarParticipantes } from '../common/utils/helpers';
import { dataValida } from '../common/utils/date.util';

@Controller('api')
export class AgendamentoController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('agendamentos/disponiveis')
  async horariosDisponiveis(@Query('data') data?: string) {
    if (!data || !dataValida(data)) throw new BadRequestException('Data inválida.');
    if (!diaUtil(data)) return { horariosOcupados: [], horariosDisponiveis: [] };
    return { horariosOcupados: [], horariosDisponiveis: HORARIOS };
  }

  @UseGuards(AdminGuard)
  @Post('admin/agendamentos')
  async criarAgendamentoAdmin(@Body() body: any) {
    const nome = (body.nome || '').trim();
    const email = (body.email || '').trim().toLowerCase();
    const telefone = (body.telefone || '').trim();
    const endereco = (body.endereco || '').trim();
    const motivo = (body.motivo || '').trim();
    const dataStr = (body.data || '').trim();
    const horario = (body.horario || '').trim();
    const tipo = body.tipo_atendimento === 'grupo' ? 'grupo' : 'unico';
    const atendimento = body.atendimento === 'marcado' ? 'marcado' : 'no_paco';

    if (!nome || !motivo || !dataStr) throw new BadRequestException('Nome, motivo e data são obrigatórios.');
    if (!dataValida(dataStr) || dataStr < hoje() || !diaUtil(dataStr)) throw new BadRequestException('Data inválida.');

    const participantes = normalizarParticipantes(body.participantes);
    const blocos = blocosValidos(body.blocos);

    if (tipo === 'grupo') {
      if (!participantes.length) throw new BadRequestException('Adicione pelo menos o representante do grupo.');
      if (!blocos.length) throw new BadRequestException('Selecione pelo menos um bloco de horário.');
    }

    const dataFormatada = new Date(dataStr);
    const slotsHorario = tipo === 'grupo' ? blocos : [horario];

    try {
      // Transação nativa do Prisma com nested writes (sem SQL manual)
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

            // Criação automática de slots na mesma operação
            agendamento_slots: {
              create: slotsHorario.map((h) => ({
                data: dataFormatada,
                horario_inicio: new Date(`${dataStr}T${h}:00Z`),
              })),
            },

            // Criação automática de participantes na mesma operação
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
    } catch (e: any) {
      if (e.code === 'P2002') {
        throw new ConflictException('Um ou mais blocos de horário já estão ocupados.');
      }
      throw e;
    }
  }
}