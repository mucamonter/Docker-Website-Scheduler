"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_modules_1 = require("./app.modules");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_modules_1.AppModule);
    await app.listen(3000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map