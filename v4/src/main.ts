import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.modules';
import session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'sua-chave-secreta-aqui',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24, // Sessão válida por 24 horas
        httpOnly: true,
        secure: false, // Defina como true se estiver usando HTTPS
      },
    }),
  );
  // O '0.0.0.0' é OBRIGATÓRIO no Docker para prender o processo e aceitar conexões externas
  await app.listen(3000, '0.0.0.0');
}


bootstrap();