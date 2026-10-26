var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { CidadaoController } from './cidadao/cidadao.controller';
import { AgendamentoController } from './agendamento/agendamento.controller';
import { PrismaService } from './prisma/prisma.service';
import { CidadaoGuard } from './cidadao/cidadao.guard';
import { AdminGuard } from './common/guards/admin.guard';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [],
        controllers: [AuthController, CidadaoController, AgendamentoController],
        providers: [PrismaService, CidadaoGuard, AdminGuard],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.modules.js.map