import 'dotenv/config';
import process from 'node:process'; // <--- Import explícito do Node.js
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./src/prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL || "mysql://mock:mock@localhost:3306/mock",
  },
});