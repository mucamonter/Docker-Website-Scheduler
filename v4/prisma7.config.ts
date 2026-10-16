// prisma7.config.ts
import { defineConfig } from "prisma/config";
import "dotenv"

export default defineConfig({
  schema: "src/prisma/schema.prisma",
  datasource: {
    
    url: "mysql://root:Ardmin321@localhost:3306/V2_DB?connection_timeout=30", 
  },
  
});
