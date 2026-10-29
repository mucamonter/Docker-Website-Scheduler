import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Controller('admin')
export class AdminPainelController {
  constructor(private readonly prisma: PrismaService) {}


  
  // Rota: GET /api/admin/horarios?data=2026-10-28
  @Get('horarios')
  async obterHorariosOcupados(@Query('data') data: string) {
    if (!data) throw new BadRequestException('A data é obrigatória.');

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

  // Rota: GET /api/admin/pendencias
  @Get('pendencias')
  async listarPendencias() {
    const agendamentos = await this.prisma.agendamentos.findMany({
      where: { status: 'pedido_pendente' },
      orderBy: { data: 'asc' },
    });
    return { agendamentos };
  }
}