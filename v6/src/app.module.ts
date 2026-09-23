import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ConfigModule } from '@nestjs/config'; //para ler o .env
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'app'),
    }),
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    /*ObserveModule.forRoot({
      appKey: 'user',
      appSecret: 'oETyaTV0WvpsCAnoAXnsimFoY1nI3+p9vdLQqaCz5/I=',
      serviceId: 'v6',
    }),*/
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
