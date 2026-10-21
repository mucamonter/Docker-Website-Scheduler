"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const prisma = new client_1.PrismaClient(({
    adapter: new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL })
}));
async function main() {
    const statusPrisma = prisma;
    await statusPrisma.status.upsert({
        where: { id: 1 },
        update: {},
        create: {
            id: 1,
            nome: 'Ativo',
        },
    });
}
main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());
//# sourceMappingURL=seed.js.map