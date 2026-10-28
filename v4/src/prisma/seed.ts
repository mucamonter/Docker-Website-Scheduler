import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient(({
  adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
}));

async function main() {
  // Exemplo de criação de dados iniciais sem risco de quebrar o banco
  const statusPrisma = prisma as unknown as {
    status: {
      upsert(args: {
        where: { id: number };
        update: Record<string, never>;
        create: { id: number; nome: string };
      }): Promise<unknown>;
    };
  };

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