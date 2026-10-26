import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const prisma = new PrismaClient(({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
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