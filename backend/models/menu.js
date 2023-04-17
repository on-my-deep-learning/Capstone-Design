import { db } from '../config/db.js';

const Menu = {
  findMenuById: async (id) => {
    const query = `SELECT id FROM MENU WHERE id = ?`;
    const result = await db.query(query, [id]);
    return result;
  },
};
