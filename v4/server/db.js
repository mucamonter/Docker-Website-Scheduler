const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const { PrismaClient } = require('@prisma/client');

// No Prisma 7, passamos o objeto de configuração DIRETO para a classe, sem criar um pool externo.
const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'V2_DB',
  // Ajustes de estabilidade idênticos ao pool anterior:
  connectTimeout: 5000, 
  connectionLimit: 10
});

// Instancia o Prisma com o adaptador nativo ajustado
const prisma = new PrismaClient({ adapter });

module.exports = prisma;
