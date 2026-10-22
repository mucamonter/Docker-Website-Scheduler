// prisma7.config.ts

import { definePrismaConfig } from "prisma/config";
import { env } from "node:process";


export default definePrismaConfig({
  schema: "./src/prisma/schema.prisma",
  datasource: {
    
    url: env['DATABASE_URL'], 
  },
  
});


