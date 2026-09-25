"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let AppController = class AppController {
    configService;
    constructor(configService) {
        this.configService = configService;
    }
    async login(body) {
        const { login, senha } = body;
        const adminPass = this.configService.get('ADMIN_PASSWORD');
        const adminUser = this.configService.get('ADMIN_USER');
        const loginValido = !adminUser || login === adminUser;
        const senhaValida = senha === adminPass;
        if (!loginValido || !senhaValida) {
            throw new common_1.UnauthorizedException({
                mensagem: 'Usuário ou senha inválidos.'
            });
        }
        return {
            redirect: '/index.html'
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [config_1.ConfigService])
], AppController);
//# sourceMappingURL=app.controller.js.map