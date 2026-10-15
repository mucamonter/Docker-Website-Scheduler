// @ts-check
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const { PrismaClient } = require('@prisma/client');
const { DbNull } = require('@prisma/client/runtime/client');
const { rootCertificates } = require('node:tls');


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
