const db = require('../config/db');

class Signup {
  constructor() {
    if (Signup.instance) {
      return Signup.instance;
    }
    Signup.instance = this;
  }

  async create(userData) {
    const { email, password } = userData;
    const conn = await db.getConnection();
    console.log(email, password)
    try {
      await conn.query('START TRANSACTION');
      const [existingUser] = await conn.query('SELECT * FROM users WHERE email = ?', [email]);
      console.log(existingUser)
      if (0!==existingUser.length) {
        throw new Error('User already exists');
      }
      const result = await conn.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, password]);
      await conn.query('COMMIT');
      return result;
    } catch (err) {
      await conn.query('ROLLBACK');
      console.error(err);
      throw err;
    } finally {
      conn.release();
    }
  }
}

const signup = new Signup();

module.exports = {
  Signup: signup,
};