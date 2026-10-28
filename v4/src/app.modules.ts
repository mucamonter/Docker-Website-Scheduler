import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { CidadaoController } from './cidadao/cidadao.controller';
import { AgendamentoController } from './agendamento/agendamento.controller';
import { PrismaService } from './prisma.service';
import { CidadaoGuard } from './cidadao/cidadao.guard';
import { AdminGuard } from './common/guards/admin.guard';
import {ServeStaticModule} from '@nestjs/serve-static'; 
import { join } from 'node:path';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(process.cwd(), 'app'),
  })],

  controllers: [ AuthController, CidadaoController, AgendamentoController],
  providers: [PrismaService, CidadaoGuard, AdminGuard  ],
})
export class AppModule {}
