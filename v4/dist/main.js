import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map