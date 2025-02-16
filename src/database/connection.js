import * as mysql from "mysql2/promise";
import "dotenv/config";

const con = await mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to database.");
})

export default con;