import { db } from '../config/db.js';

const menu = {
  findRestaurantById: async (food_idx) => {
    const query = `SELECT food_idx FROM food_info WHERE idx = ?`;
    const result = await db.query(query, [food_idx]);
    return result;
  },
  select: async () => {
    const query = `SELECT * FROM food_info`;
    const result = await db.query(query);
    return result;
  },
  name: async (restaurant) => {
    const query = `
      SELECT f.food_name
      FROM food_info AS f
      JOIN rel_restaurant_food AS rrf ON f.food_idx = rrf.food_idx
      JOIN restaurant_info AS r ON r.restaurant_index = rrf.restaurant_idx
      WHERE r.restaurant_name = ?`;
    console.log('1111: ', restaurant);
    const result = await db.query(query, [restaurant]);

    console.log(result);
    return result;
  },
};

export default menu;
