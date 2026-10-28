"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_modules_1 = require("./app.modules");
const express_session_1 = __importDefault(require("express-session"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_modules_1.AppModule);
    app.use((0, express_session_1.default)({
        secret: process.env.SESSION_SECRET || 'sua-chave-secreta-aqui',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            secure: false,
        },
    }));
    await app.listen(3000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map