import mysql from 'mysql2'
import dotenv from 'dotenv'

const ENV = dotenv.config().parsed
console.log(process.env.DB_PW)
export const db = mysql.createConnection({
    host: "database-1.c36g2uc06w0l.eu-central-1.rds.amazonaws.com",
    user: 'admin',
    password: '0989546292',
    database: 'blog'
})