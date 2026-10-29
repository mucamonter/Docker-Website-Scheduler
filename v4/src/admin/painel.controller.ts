import { Controller, Get, Query, UseGuards, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AdminGuard } from '../common/guards/admin.guard';
import { dataValida } from '../common/utils/date.util';

@UseGuards(AdminGuard)
@Controller('admin')
export class AdminPainelController {
  constructor(private readonly prisma: PrismaService) {}

  // GET /api/admin/horadrios?data=YYYY-MM-DD
  @Get('horarios')
  async obterHorariosOcupados(@Query('data') dataStr?: string) {
    if (!dataStr || !dataValida(dataStr)) {
      throw new BadRequestException('Data válida é obrigatória.');
    }

    const dataFormatada = new Date(`${dataStr}T00:00:00Z`);

    // Busca os slots reservados na tabela agendamento_slots
    const slots = await this.prisma.agendamento_slots.findMany({
      where: { data: dataFormatada },
      select: { horario_inicio: true },
    });

    const horariosOcupados = slots.map((s) =>
      s.horario_inicio.toISOString().slice(11, 16),
    );

    return { horariosOcupados };
  }

  // GET /api/admin/pendencias
  @Get('pendencias')
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
}