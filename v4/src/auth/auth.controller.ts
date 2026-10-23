import { Controller, Get, Post, Body, Req, Res, HttpCode, HttpStatus, UnauthorizedException, InternalServerErrorException, Redirect } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Request } from "express";
import * as bcrypt from 'bcryptjs';

import 'express-session';






//Todos vão estar dentro da chamada da api, mais cada um com mais
@Controller('api')
export class AuthController{
    constructor(private readonly prisma: PrismaService) {}

    //(verifica conexão com db)function
    @Get('health')
    async health(){
        await this.prisma.$queryRaw`SELECT 1`;
        return { ok: true, database: process.env.DB_NAME || 'V2_DB'};

    }

//api + login
@Post('login')
@HttpCode(HttpStatus.OK)


async login(@Body() body: { login?: string; senha?: string }, @Req() req: Request) {
    const login = (body.login || '').trim().toLowerCase();
    const senha = body.senha || '';


//(verificador de erros com login admin)function
    const adminUser = process.env.ADMIN_USER;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!login || !senha){
        throw new UnauthorizedException('Informe o login e a senha');
    }
    
    const adminEmail = process.env.ADMIN_USER
//(sistema para logar admin)function
    if (adminEmail && login === adminUser.toLowerCase() && senha === adminPassword){

        const adminDoBanco = await this.prisma.usuarios_admin.findFirst({
            where: {login: login}
        });

        req.session.papel = 'admin;'
        req.session.usuario = { id: adminDoBanco?.id, nome: adminUser, email: adminDoBanco?.email}

        return { sucesso: true, tipo: 'admin', redirect: '/admin.html' };
    }

//(sistema para logar usuario)function

    const staffUser = await this.prisma.admin.findUnique({
      where: { email: login},
    });
    
    if (staffUser && (await bcrypt.compare(senha, staffUser.senha_hash))){
        req.session.papel = staffUser.papel;
        req.session.usuario = staffUser.email;
        
        return { sucesso: true, tipo: 'cidadao', redirect: '/cidadao.html' };
    }

    throw new UnauthorizedException('Usuário ou senha inválidos');

}
@Post('logout')
@HttpCode(HttpStatus.OK)
async logout(@Req() req: Request){
    req.session.destroy(() => {});
    return { sucesso: true };
}

@Get('admin/me')
async adminMe(@Req() req: Request){
    if (!req.session?.papel) {
        throw new UnauthorizedException({ autenticado: false});
    }
    return{
        autenticado: true,
        usuario: req.session.usuario || req.session.cidadaos.email,
        papel: req.session.papel,

    };
  }
}