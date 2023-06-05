import { db } from '../config/db.js';

const Restaurant = {
  findRestaurantById: async (idx) => {
    const query = `SELECT idx FROM restaurant_info WHERE idx = ?`;
    const result = await db.query(query, [idx]);
    return result;
  },
  select: async () => {
    const query = `SELECT * FROM restaurant_info`;
    const result = await db.query(query);
    return result;
  },
  name: async (category) => {
    const query = `SELECT restaurant_name FROM restaurant_info WHERE category = ?`;
    console.log('1111: ', category);
    const result = await db.query(query, [category]);

    console.log(result);
    return result;
  },
};

export default Restaurant;
