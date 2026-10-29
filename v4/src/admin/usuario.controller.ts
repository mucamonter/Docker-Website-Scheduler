import { 
  Controller, Get, Post, Patch, Delete, Body, Param, 
  ParseIntPipe, UseGuards, BadRequestException, NotFoundException, ConflictException 
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma.service';
import { AdminGuard } from '../common/guards/admin.guard';
import { usuarios_admin_papel } from '@prisma/client';

@UseGuards(AdminGuard)
@Controller('admin/usuarios')
export class AdminUsuariosController {
  constructor(private readonly prisma: PrismaService) {}

  // GET /api/admin/usuarios
  @Get()
  async listar() {
    const usuarios = await this.prisma.usuarios_admin.findMany({
      select: {
        id: true,
        nome: true,
        email: true,
        papel: true,
        criado_em: true,
      },
      orderBy: { nome: 'asc' },
    });

    const resultado = usuarios.map((u) => ({
      ...u,
      criado_em: u.criado_em ? u.criado_em.toISOString().slice(0, 10) : '',
    }));

    return { usuarios: resultado };
  }

  // POST /api/admin/usuarios
  @Post()
  async criar(@Body() body: any) {
    const nome = (body.nome || '').trim();
    const email = (body.email || '').trim().toLowerCase();
    const senha = body.senha || '';
    const papelInput = body.papel === 'admin' ? 'admin' : 'visualizador';

    if (!nome || !email || !senha) {
      throw new BadRequestException('Nome, e-mail e senha são obrigatórios.');
    }

    const existente = await this.prisma.usuarios_admin.findUnique({
      where: { email },
    });

    if (existente) {
      throw new ConflictException('Já existe um usuário cadastrado com este e-mail.');
    }

    const senha_hash = await bcrypt.hash(senha, 12);

    const novo = await this.prisma.usuarios_admin.create({
      data: {
        nome,
        email,
        senha_hash,
        papel: papelInput as usuarios_admin_papel,
      },
    });

    return { sucesso: true, id: novo.id };
  }

  // PATCH /api/admin/usuarios/:id
  @Patch(':id')
  async atualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any,
  ) {
    const usuario = await this.prisma.usuarios_admin.findUnique({ where: { id } });
    if (!usuario) throw new NotFoundException('Usuário não encontrado.');

    const nome = (body.nome || usuario.nome).trim();
    const papelInput = body.papel === 'admin' ? 'admin' : 'visualizador';
    
    const dataUpdate: any = {
      nome,
      papel: papelInput as usuarios_admin_papel,
    };

    if (body.senha && body.senha.trim().length >= 6) {
      dataUpdate.senha_hash = await bcrypt.hash(body.senha.trim(), 12);
    }

    await this.prisma.usuarios_admin.update({
      where: { id },
      data: dataUpdate,
    });

    return { sucesso: true };
  }

  // DELETE /api/admin/usuarios/:id
  @Delete(':id')
  async excluir(@Param('id', ParseIntPipe) id: number) {
    const usuario = await this.prisma.usuarios_admin.findUnique({ where: { id } });
    if (!usuario) throw new NotFoundException('Usuário não encontrado.');

    await this.prisma.usuarios_admin.delete({ where: { id } });
    return { sucesso: true };
  }
}