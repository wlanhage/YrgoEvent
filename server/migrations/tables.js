import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "yrgoeventDB",
});

async function createTable() {
  const connection = await pool.getConnection();
  try {
    console.log("Connected!");
    const sql =
      "CREATE TABLE students (program VARCHAR(255), name VARCHAR(255))";
    await connection.query(sql);
    console.log("Table created");

    const sql2 =
      "CREATE TABLE visitors (area VARCHAR(255), name VARCHAR(255), company VARCHAR(255))";
    await connection.query(sql2);
    console.log("Table created");
  } catch (err) {
    console.error(err);
  } finally {
    connection.release();
  }
}

createTable();

export default pool;
