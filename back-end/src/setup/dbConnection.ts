require("dotenv").config();
const mysql = require("mysql2");

export async function excuteQuery({
  query,
  values,
}: {
  query: string;
  values?: Array<string | number>;
}) {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    timezone: "local",
  });
  try {
    return new Promise((resolve, reject) =>
      connection.execute(query, values, (err: any, rows: Array<object>) => {
        if (err) {
          reject(err);
        } else {
          connection.end();
          resolve(rows);
        }
      })
    );
  } catch (error) {
    console.log(error);
    return { error };
  }
}
