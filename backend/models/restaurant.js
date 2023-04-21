import { db } from '../config/db.js';

const Restaurant = {
  findRestaurantById: async (idx) => {
    const query = `SELECT idx FROM RESTAURANT WHERE idx = ?`;
    const result = await db.query(query, [idx]);
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
};

export default Restaurant;
