import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';

// Controllers Públicos e Autenticação
import { AuthController } from './auth/auth.controller';
import { CidadaoController } from './cidadao/cidadao.controller';
import { AgendamentoController } from './agendamento/agendamento.controller';

// Controllers Administrativos (Painel)
import { AdminAgendamentosController } from './admin/agedamentos.controller';
import { AdminPainelController } from './admin/admin-painel.controller';
import { AdminUsuariosController } from './admin/usuario.controller';
import { AdminCidadaosController } from './admin/cidadao.controller';

// Services e Guards
import { PrismaService } from './prisma.service';
import { CidadaoGuard } from './cidadao/cidadao.guard';
import { AdminGuard } from './common/guards/admin.guard';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'app'),
      exclude: ['/api/*path'], // Evita que rotas da API caiam no index.html
    }),
  ],
  controllers: [
    AuthController,
    CidadaoController,
    AgendamentoController,
    AdminAgendamentosController, // Adicionado
    AdminUsuariosController,
    AdminCidadaosController,
    AdminPainelController,
  ],
  providers: [PrismaService, CidadaoGuard, AdminGuard],
})
export class AppModule {}