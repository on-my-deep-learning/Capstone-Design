import { db } from '../config/db.js';

const Restaurant = {
  findRestaurantById: async (idx) => {
    const query = `SELECT idx FROM RESTAURANT WHERE idx = ?`;
    const result = await db.query(query, [id]);
    return result;
  },
  select: async (idx) => {
    const query = `SELECT * FROM RESTAURANT WHERE idx = ?`;
  },
};

export default Restaurant;
