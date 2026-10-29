import { 
  Controller, Get, Patch, Body, Query, Param, 
  ParseIntPipe, UseGuards, BadRequestException, NotFoundException 
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma.service';
import { AdminGuard } from '../common/guards/admin.guard';

@UseGuards(AdminGuard)
@Controller('admin/cidadaos')
export class AdminCidadaosController {
  constructor(private readonly prisma: PrismaService) {}

  // GET /api/admin/cidadaos?busca=
  @Get()
  async listar(@Query('busca') busca?: string) {
    const where: any = {};

    if (busca && busca.trim()) {
      const termo = busca.trim();
      where.OR = [
        { nome: { contains: termo } },
        { email: { contains: termo } },
        { telefone: { contains: termo } },
      ];
    }

    const cidadaos = await this.prisma.cidadaos.findMany({
      where,
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        criado_em: true,
      },
      orderBy: { nome: 'asc' },
      take: 100,
    });

    const resultado = cidadaos.map((c) => ({
      ...c,
      criado_em: c.criado_em ? c.criado_em.toISOString().slice(0, 10) : '',
    }));

    return { cidadaos: resultado };
  }

  // GET /api/admin/cidadaos/:id (Detalhes e histórico)
  @Get(':id')
  async obterDetalhes(@Param('id', ParseIntPipe) id: number) {
    const cidadao = await this.prisma.cidadaos.findUnique({
      where: { id },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        cep: true,
        endereco: true,
        criado_em: true,
      },
    });

    if (!cidadao) throw new NotFoundException('Cidadão não encontrado.');

    const agendamentos = await this.prisma.agendamentos.findMany({
      where: { cidadao_id: id },
      orderBy: [{ data: 'desc' }, { horario: 'desc' }],
    });

    const agendamentosFormatados = agendamentos.map((a) => {
      const dataStr = a.data ? a.data.toISOString().slice(0, 10) : '';
      const [ano, mes, dia] = dataStr.split('-');
      return {
        id: a.id,
        data_br: `${dia}/${mes}/${ano}`,
        horario: a.horario ? a.horario.toISOString().slice(11, 16) : '',
        motivo: a.motivo,
        status: a.status,
        atendimento: a.atendimento,
        tratativa: a.tratativa,
      };
    });

    return {
      cidadao: {
        ...cidadao,
        criado_em: cidadao.criado_em ? cidadao.criado_em.toISOString().slice(0, 10) : '',
      },
      agendamentos: agendamentosFormatados,
    };
  }

  // PATCH /api/admin/cidadaos/:id/senha
  @Patch(':id/senha')
  async alterarSenha(
    @Param('id', ParseIntPipe) id: number,
    @Body('senha') senha?: string,
  ) {
    if (!senha || senha.trim().length < 6) {
      throw new BadRequestException('A nova senha deve ter pelo menos 6 caracteres.');
    }

    const cidadao = await this.prisma.cidadaos.findUnique({ where: { id } });
    if (!cidadao) throw new NotFoundException('Cidadão não encontrado.');

    const senha_hash = await bcrypt.hash(senha.trim(), 12);

    await this.prisma.cidadaos.update({
      where: { id },
      data: { senha_hash },
    });

    return { mensagem: 'Senha alterada com sucesso.' };
  }
}