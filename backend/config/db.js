import 'dotenv/config';
import { createPool } from 'mysql2/promise';

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  multipleStatements: true,
};

class DB {
  static instace;
  pool;

  constructor() {
    this.pool = createPool(config);
  }

  static getInstance() {
    if (!DB.instance) {
      DB.instance = new DB();
    }
    return DB.instance;
  }

  async query(sql, values) {
    let connection;
    try {
      connection = await this.pool.getConnection();
      const [result] = await connection.query(sql, values);
      return result;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  }
}

export const db = DB.getInstance();
