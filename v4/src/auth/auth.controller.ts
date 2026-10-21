import { Controller, Get, Post, Body, Req, Res, HttpCode, HttpStatus, UnauthorizedException, InternalServerErrorException, Redirect } from "@nestjs/common";
import { PrismaService } from "../admin/admin.controller";
import { Request, response } from "express";
import * as bcrypt from 'bcryptjs';



@Controller('api')
export class AuthController{
    constructor(private readonly prisma: PrismaService) {}

    @Get('health')
    async health(){
        await this.prisma.$queryRaw`SELECT 1`;
        return { ok: true, database: process.env.DB_NAME || 'V2_DB'};
    }


@Post('login')
@HttpCode(HttpStatus.OK)
async login(@Body() body: { login?: string; senha?: string }, @Req() req: Request) {
    const login = (body.login || '').trim().toLowerCase();
    const senha = body.senha || '';


//verificador de erros com login admin
    const adminUser = process.env.ADMIN_USER;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!login || !senha){
        throw new UnauthorizedException('Informe o login e a senha');
    }
    
//sistema para logar admin
    if (adminUser && login === adminUser.toLowerCase() && senha === adminPassword){
        req.session.papel = 'admin';
        req.session.usuario = adminUser;
        return { sucesso: true, tipo: 'admin', Redirect: '/admin.html' };
    }

//sistema para logar usuario

    const staffUser = await this.prisma.admin.findUnique({
      where: { email: login},
    });
    
    if (staffUser && (await bcrypt.compare(senha, staffUser.senha_hash))){
        req.session.papel = staffUser.papel;
        req.session.usuario = staffUser.email;
        
    }

}

}