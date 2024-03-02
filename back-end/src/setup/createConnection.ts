require("dotenv").config();
const mysql = require("mysql2/promise");
import { Connection } from "mysql2/typings/mysql/lib/Connection";

export async function createMysqlConnection(): Promise<Connection> {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    timezone: "local",
  });

  return connection;
}
