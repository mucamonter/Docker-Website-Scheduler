"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const node_path_1 = require("node:path");
const auth_controller_1 = require("./auth/auth.controller");
const cidadao_controller_1 = require("./cidadao/cidadao.controller");
const agendamento_controller_1 = require("./agendamento/agendamento.controller");
const agedamentos_controller_1 = require("./admin/agedamentos.controller");
const admin_painel_controller_1 = require("./admin/admin-painel.controller");
const usuario_controller_1 = require("./admin/usuario.controller");
const cidadao_controller_2 = require("./admin/cidadao.controller");
const prisma_service_1 = require("./prisma.service");
const cidadao_guard_1 = require("./cidadao/cidadao.guard");
const admin_guard_1 = require("./common/guards/admin.guard");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, node_path_1.join)(process.cwd(), 'app'),
                exclude: ['/api/*path'],
            }),
        ],
        controllers: [
            auth_controller_1.AuthController,
            cidadao_controller_1.CidadaoController,
            agendamento_controller_1.AgendamentoController,
            agedamentos_controller_1.AdminAgendamentosController,
            usuario_controller_1.AdminUsuariosController,
            cidadao_controller_2.AdminCidadaosController,
            admin_painel_controller_1.AdminPainelController,
        ],
        providers: [prisma_service_1.PrismaService, cidadao_guard_1.CidadaoGuard, admin_guard_1.AdminGuard],
    })
], AppModule);
//# sourceMappingURL=app.modules.js.map