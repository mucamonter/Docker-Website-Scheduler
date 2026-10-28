import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
    constructor(){
    const adapter = new PrismaMariaDb({
        host: process.env.DB_HOST || 'db',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'admin',
        password: process.env.DB_PASSWORD || 'Ardmim321',
        database: process.env.DB_NAME || 'V2_DB',
        connectTimeout: 5000,
        connectionLimit: 10,
    });

    super({ adapter });
}


//ambos os asyncs dentro de injectable
    async onModuleInit() {
    await this.$connect();
    }


async onModuleDestroy(){
    await this.$disconnect();
 }
}
