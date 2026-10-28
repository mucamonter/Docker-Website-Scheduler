import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Req, 
  HttpCode, 
  HttpStatus, 
  UnauthorizedException, 
  InternalServerErrorException 
} from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Request } from "express";
import * as bcrypt from 'bcryptjs'; // 1. Corrigida a sintaxe de importação do bcrypt
import 'express-session';

// Adiciona a tipagem correta para as variáveis de sessão no TypeScript
declare module 'express-session' {
  interface SessionData {
    papel?: string;
    email?: string;
    usuario?: { id?: number; nome?: string; email?: string };
    cidadaos?: { id?: number; nome?: string; email?: string };
  }
}

@Controller('api')
export class AuthController {
  constructor(private readonly prisma: PrismaService) {}

  // Verificação de saúde da API e conexão com o Banco
  @Get('health')
  async health() {
    await this.prisma.$queryRaw`SELECT 1`;
    return { ok: true, database: process.env.DB_NAME || 'V2_DB' };
  }

  // Rota de Login
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: { login?: string; senha?: string }, @Req() req: Request) {
    const login = (body.login || '').trim().toLowerCase();
    const senha = body.senha || '';

if (!req.session) {
    throw new InternalServerErrorException('O suporte a sessões (express-session) não está configurado no servidor.');
  }

    if (!login || !senha) {
      throw new UnauthorizedException('Informe o login e a senha');
    }

    const adminUser = process.env.ADMIN_USER;
    const adminPassword = process.env.ADMIN_PASSWORD;

    // 2. Sistema para logar Admin padrão do .env (com checagem segura de nulo)
    if (adminUser && adminPassword && login === adminUser.toLowerCase() && senha === adminPassword) {
      const adminDoBanco = await this.prisma.usuarios_admin.findFirst({
        where: { email: login }
      });

      req.session.papel = 'admin'; // Corrigido: Removido o ponto e vírgula de dentro da string ('admin;')
      req.session.usuario = { 
        id: adminDoBanco?.id, 
        nome: adminUser, 
        email: adminDoBanco?.email || login 
      };

      return { sucesso: true, tipo: 'admin', redirect: '/admin.html' };
    }

    // 3. Sistema para logar Usuários/Staff cadastrados na tabela
    const staffUser = await this.prisma.usuarios_admin.findUnique({
      where: { email: login },
    });

    if (staffUser && (await bcrypt.compare(senha, staffUser.senha_hash))) {
      req.session.papel = staffUser.papel;
      req.session.email = staffUser.email;
      req.session.usuario = {
        id: staffUser.id,
        nome: staffUser.nome,
        email: staffUser.email
      };

      return { sucesso: true, tipo: staffUser.papel, redirect: '/admin.html' };
    }

    const cidadao = await this.prisma.cidadaos.findUnique({
        where: { email: login },
    });

    if (cidadao && (await bcrypt.compare(senha, cidadao.senha_hash))){
        req.session.papel = 'cidadao';
        req.session.cidadaoId = cidadao.id;
        req.session.cidadaoEmail = cidadao.email;
        req.session.cidadaoNome = cidadao.nome;
    } return { sucesso: true, tipo: 'cidado', redirect: '/cidadao.html'};

    throw new UnauthorizedException('Usuário ou senha inválidos');
  }

  // Rota de Logout
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Req() req: Request) {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          reject(new InternalServerErrorException('Erro ao encerrar a sessão'));
        } else {
          resolve({ sucesso: true });
        }
      });
    });
  }

  // Rota de verificação da sessão
  @Get('admin/me')
  async adminMe(@Req() req: Request) {
    if (!req.session?.papel) {
      throw new UnauthorizedException({ autenticado: false });
    }

    return {
      autenticado: true,
      // 4. Corrigido erro de runtime: uso de ?. (Optional Chaining) para não derrubar o servidor com erro 500
      usuario: req.session.usuario || req.session.cidadaos?.email || req.session.email,
      papel: req.session.papel,
    };
  }
}