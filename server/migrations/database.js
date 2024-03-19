import { createPool } from "mysql2/promise";

async function main() {
  const pool = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
  });

  try {
    const connection = await pool.getConnection();
    console.log("Connected!");

    const result = await connection.query("CREATE DATABASE yrgoeventDB");
    console.log("Database created");

    connection.release();
  } catch (err) {
    console.error(err);
  }
}

main();
