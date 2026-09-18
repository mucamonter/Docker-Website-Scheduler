import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/index.js";

export const pool = mariadb.createPool({
     host: `${DB_HOST}`,
     port: `${DB_PORT}`,         
     user: `${DB_USER}`,         
     password: `${DB_PASSWORD}`, 
     database: `${DB_NAME}`,
     connectionLimit: 5
});

try {
    const conn = await pool.getConnection();
    console.log("Conectado ao MariaDB no docker com sucesso!")

    const rows = await conn.query("SELECT 1 + 1 AS resultado");
    console.log(rows);

    conn.release();
}catch (err){
    console.error("Erro ao conectar:", err);
}


export const adapter = MyFrameworkAdapter(pool);
export const prisma = new PrismaClient({ adapter });