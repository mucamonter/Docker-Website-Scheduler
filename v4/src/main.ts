import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // O '0.0.0.0' é OBRIGATÓRIO no Docker para prender o processo e aceitar conexões externas
  await app.listen(3000, '0.0.0.0');
}


bootstrap();