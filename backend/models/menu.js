import { db } from '../config/db.js';

const Menu = {
  findMenuById: async (id) => {
    const query = `SELECT id FROM MENU WHERE id = ?`;
    const result = await db.query(query, [id]);
    return result;
  },
  select: async () => {
    const query = `SELECT * FROM RESTAURANT`;
    const result = await db.query(query);
    return result;
  },
  name: async () => {
    const query = `SELECT name FROM RESTAURANT`;
    const result = await db.query(query);
    return result;
  },
  recommend: async () => {
    const query = `SELECT * FROM RESTAURANT`;
    const result = await db.query(query);
    return result;
  },
};
