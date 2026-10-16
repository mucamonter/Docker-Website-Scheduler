// @ts-check
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "@prisma/client/extension";


const adapter = new PrismaMariaDb({
  host: 'db',
  port: 3306,
  user: 'root',
  password: 'Ardmim321',
  database: 'V2_DB',
  connectTimeout: 5000, 
  connectionLimit: 10
});

// Instancia o Prisma com o adaptador nativo ajustado
const prisma = new PrismaClient({ adapter });

module.exports = prisma;
