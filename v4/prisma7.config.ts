// prisma7.config.ts
import { defineConfig } from "prisma/config";
import "dotenv"

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    
    url: "mysql://root:Ardmim.186!@localhost:3306/V2_DB?connection_timeout=30", 
  },
  
});
