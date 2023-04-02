import { db } from '../config/db.js';

const User = {
  findUserById: async (id) => {
    const query = `SELECT id FROM USER WHERE id = ?`;
    const result = await db.query(query, [id]);
    return result;
  },

  signup: async (user) => {
    const { id, password, name, address, phone, nickname } = user;
    const query = `INSERT INTO USER (id, pw, name, address, phone, nickname, access)
    VALUES (?, ?, ?, ?, ?, ?, 0);`;
    await db.query(query, [id, password, name, address, phone, nickname]);
  },

  login: async (id) => {
    const query = `SELECT * FROM USER WHERE id = ?`;
    const result = await db.query(query, [id]);
    return result;
  },
};

export default User;
