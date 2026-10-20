// @ts-check
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from './generated/prisma/client';
import type { DataISO } from './types/data';
import { defineConfig } from "prisma/config";

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


 export function dataValida(v: string):v is DataISO {
  const match = v.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return false;

  const a = Number(match[1]);
  const m = Number(match[2]);
  const d = Number(match[3]);


  const x = new Date(Date.UTC(a, m - 1, d));
  return x.getUTCFullYear() === a && x.getUTCMonth() === m - 1 && x.getUTCDate() === d;
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: "mysql://root:Ardmim321@.1270.0.1:3306/V2_DB?connection_timeout=30",
  },
}); 

export async function colunaExiste(tabela:string, coluna:string) {
  const rows = await prisma.$queryRaw<{ total: bigint }[]>`
    SELECT COUNT(*) AS total
      FROM INFORMATION_SCHEMA.COLUMNS
     WHERE TABLE_SCHEMA = DATABASE()
       AND TABLE_NAME = ${tabela}
       AND COLUMN_NAME = ${coluna}
  `;

  
  return Number(rows[0]?.total || 0) > 0;
}

export async function prepararBanco() {
  // Banco já existente: as alterações são feitas de forma idempotente.
  if (!(await colunaExiste('cidadaos', 'telefone'))) {
    await prisma.$executeRaw`ALTER TABLE cidadaos ADD COLUMN telefone VARCHAR(30) NULL AFTER email`;
  }

  if (!(await colunaExiste('agendamentos', 'telefone'))) {
    await prisma.$executeRaw`ALTER TABLE agendamentos ADD COLUMN telefone VARCHAR(30) NULL AFTER email`;
  }
  if (!(await colunaExiste('agendamentos', 'atendimento'))) {
    await prisma.$executeRaw`ALTER TABLE agendamentos ADD COLUMN atendimento ENUM('no_paco','marcado') NOT NULL DEFAULT 'marcado' AFTER horario`;
  }
  if (!(await colunaExiste('agendamentos', 'tratativa'))) {
    await prisma.$executeRaw`ALTER TABLE agendamentos ADD COLUMN tratativa TEXT NULL AFTER motivo`;
  }
  if (!(await colunaExiste('agendamentos', 'tipo_atendimento'))) {
    await prisma.$executeRaw`ALTER TABLE agendamentos ADD COLUMN tipo_atendimento ENUM('unico','grupo') NOT NULL DEFAULT 'unico' AFTER atendimento`;
  }
  if (!(await colunaExiste('agendamentos', 'blocos_json'))) {
    await prisma.$executeRaw`ALTER TABLE agendamentos ADD COLUMN blocos_json JSON NULL AFTER tipo_atendimento`;
  }

  await prisma.$executeRaw`CREATE TABLE IF NOT EXISTS agendamento_participantes (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    agendamento_id INT UNSIGNED NOT NULL,
    nome VARCHAR(150) NOT NULL,
    telefone VARCHAR(30) NULL,
    principal TINYINT(1) NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    INDEX idx_participante_agendamento (agendamento_id),
    CONSTRAINT fk_participante_agendamento FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
  ) ENGINE=InnoDB`

  await prisma.$executeRaw`CREATE TABLE IF NOT EXISTS agendamento_slots (
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    agendamento_id INT UNSIGNED NOT NULL,
    data DATE NOT NULL,
    horario_inicio TIME NOT NULL,
    PRIMARY KEY (id),
    INDEX idx_slot_agendamento (agendamento_id),
    INDEX idx_agenda_slot_data_hora (data, horario_inicio),
    CONSTRAINT fk_slot_agendamento FOREIGN KEY (agendamento_id) REFERENCES agendamentos(id) ON DELETE CASCADE
  ) ENGINE=InnoDB`

  try {
    const idxs = await prisma.$queryRaw`SHOW INDEX FROM agendamento_slots WHERE Key_name IN ('uk_agenda_slot','agenda_slot')`;
    const nomes = [...new Set((Array.isArray(idxs) ? idxs : []).map((i: { Key_name?: string }) => i.Key_name).filter((nome): nome is string => Boolean(nome)))];
    for (const nome of nomes) {
      await prisma.$executeRaw`ALTER TABLE agendamento_slots DROP INDEX \`${nome}\``;
    }
  } catch (e:any) {
    if (!(e instanceof Error) || !/doesn't exist|not exist/i.test(e.message)) throw e;
  }

  try {
    const idx = await prisma.$queryRaw`SHOW INDEX FROM agendamentos WHERE Key_name = 'uk_agendamento_slot_ativo`;
    if (Array.isArray(idx) && idx.length) {
      await prisma.$executeRaw`ALTER TABLE agendamentos DROP INDEX uk_agendamento_slot_ativo`;
    }
  } catch (e:any) {
    if (!(e instanceof Error) || !/doesn't exist|not exist/i.test(e.message)) throw e;
  }

  try {
    const col = await prisma.$queryRaw`SHOW COLUMNS FROM agendamentos LIKE 'slot_ativo`;
    if (Array.isArray(col) && col.length) {
      await prisma.$executeRaw`ALTER TABLE agendamentos DROP COLUMN slot_ativo`;
    }
  } catch (e:any) {
    if (!(e instanceof Error) || !/doesn't exist|not exist/i.test(e.message)) throw e;
  }

  // Preenche os slots dos atendimentos existentes. Registros cancelados não ocupam horário.
  await prisma.$executeRaw`INSERT IGNORE INTO agendamento_slots (agendamento_id,data,horario_inicio) SELECT id,data,horario FROM agendamentos WHERE status <> 'cancelado'`;

  // Migra status antigos antes de restringir o ENUM.
  const statusResult = await prisma.$queryRaw`SHOW COLUMNS FROM agendamentos LIKE \'status\'`;
  const statusCol = Array.isArray(statusResult) ? statusResult : [];
  if (!statusCol.length) {
    await prisma.$executeRaw`ALTER TABLE agendamentos ADD COLUMN status ENUM('cancelado','pedido_nao_atendido','pedido_atendido','pedido_pendente') NOT NULL DEFAULT 'pedido_pendente'`;
  } else {
    // Primeiro ampliamos o ENUM para aceitar valores antigos e novos;
    // só depois fazemos a conversão e finalmente restringimos o ENUM.
    await prisma.$executeRaw`ALTER TABLE agendamentos MODIFY COLUMN status ENUM('cancelado','no_paco','no paço','atendido','pendente','agendado','feito','pedido_nao_atendido','pedido_atendido','pedido_pendente') NOT NULL DEFAULT 'pedido_pendente'`;
    await prisma.$executeRaw`UPDATE agendamentos SET atendimento='no_paco' WHERE status='no_paco' OR status='no paço'`;
    await prisma.$executeRaw`UPDATE agendamentos SET status='pedido_pendente' WHERE status='agendado' OR status='pendente' OR status='no_paco'`;
    await prisma.$executeRaw`UPDATE agendamentos SET status='pedido_atendido' WHERE status='feito' OR status='atendido'`;
    await prisma.$executeRaw`UPDATE agendamentos SET status='pedido_nao_atendido' WHERE status='pedido_nao_atendido'`;
    await prisma.$executeRaw`ALTER TABLE agendamentos MODIFY COLUMN status ENUM('cancelado','pedido_nao_atendido','pedido_atendido','pedido_pendente') NOT NULL DEFAULT 'pedido_pendente'`;
  }

  // A aplicação agora permite múltiplos atendimentos no mesmo horário. 
  // Por esse motivo, não há mais uma coluna/índice global de unicidade por slot.

  await prisma.$executeRaw`CREATE TABLE IF NOT EXISTS usuarios_admin (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    papel ENUM('admin','visualizador') NOT NULL DEFAULT 'visualizador',
    criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    UNIQUE KEY uk_usuario_admin_email (email)
  ) ENGINE=InnoDB`;
}

