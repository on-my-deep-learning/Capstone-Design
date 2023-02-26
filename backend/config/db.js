const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '1021',
  database: 'capston_db',
};

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    Database.instance = this;
    this.pool = mysql.createPool(dbConfig);
  }

  async getConnection() {
    try {
      const conn = await this.pool.getConnection();
      return conn;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}

const db = new Database();

module.exports = db;