import 'dotenv/config';
import process from 'node:process';
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "./prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL || "mysql://mock:mock@localhost:3306/mock",
  },
});