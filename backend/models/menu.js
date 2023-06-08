import { db } from '../config/db.js';

const menu = {
  findRestaurantById: async (food_idx) => {
    const query = `SELECT food_idx FROM food_info WHERE idx = ?`;
    const result = await db.query(query, [food_idx]);
    return result;
  },
  select: async () => {
    const query = `SELECT allergy, disease
                   FROM USER
                   WHERE id = 'ju'`;
    const result = await db.query(query);

    return result;
  },
  name: async (restaurant, id1, id2) => {
    console.log("rest", restaurant);
    console.log("rest_id1", id1);
    console.log("rest_id2", id2);
    const query = `
      SELECT DISTINCT fi.food_name
      FROM rel_food_ingredient rfi
      JOIN ingredient i ON rfi.ingredient_idx = i.ingredient_index
      JOIN food_info fi ON rfi.foo_idx = fi.food_idx
      JOIN rel_restaurant_food rrf ON rrf.food_idx = fi.food_idx
      JOIN restaurant_info ri ON rrf.restaurant_idx = ri.restaurant_index
      WHERE ri.restaurant_name = ?
        AND (
          fi.food_idx NOT IN (
            SELECT fi2.food_idx
            FROM rel_food_ingredient rfi2
            JOIN ingredient i2 ON rfi2.ingredient_idx = i2.ingredient_index
            JOIN food_info fi2 ON rfi2.foo_idx = fi2.food_idx
            JOIN rel_disease_ingredient rai ON rfi2.ingredient_idx = rai.ingredient_idx
            JOIN disease_info ai ON rai.dise_idx = ai.disease_idx
            WHERE ai.disease_name IN (
              SELECT JSON_UNQUOTE(JSON_EXTRACT(disease, '$[0]'))
              FROM user
              WHERE id = ?
            )
          )
          AND
          fi.food_idx NOT IN (
            SELECT fi3.food_idx
            FROM rel_food_ingredient rfi3
            JOIN ingredient i3 ON rfi3.ingredient_idx = i3.ingredient_index
            JOIN food_info fi3 ON rfi3.foo_idx = fi3.food_idx
            JOIN rel_allergy_ingredient rai2 ON rfi3.ingredient_idx = rai2.ingredient_index
            JOIN allergy_info ai2 ON rai2.allergy_index = ai2.allergy_idx
            WHERE ai2.allergy_name IN (
              SELECT JSON_UNQUOTE(JSON_EXTRACT(allergy, '$[0]'))
              FROM user
              WHERE id = ?
            )
          )
        )
    `;
    console.log("2222: ", restaurant);
    const result = await db.query(query, [restaurant, id1, id2]);

    console.log("menu: ", result);
    return result;
  },

  };
//SELECT DISTINCT fi.food_name
//FROM rel_food_ingredient rfi
//JOIN ingredient i ON rfi.ingredient_idx = i.ingredient_index
//JOIN food_info fi ON rfi.foo_idx = fi.food_idx
//JOIN rel_restaurant_food rrf ON rrf.food_idx = fi.food_idx
//JOIN restaurant_info ri ON rrf.restaurant_idx = ri.restaurant_index
//WHERE ri.restaurant_name = "카피바라 파스타"
//  AND (
//    fi.food_idx NOT IN (
//      SELECT fi2.food_idx
//      FROM rel_food_ingredient rfi2
//      JOIN ingredient i2 ON rfi2.ingredient_idx = i2.ingredient_index
//      JOIN food_info fi2 ON rfi2.foo_idx = fi2.food_idx
//      JOIN rel_disease_ingredient rai ON rfi2.ingredient_idx = rai.ingredient_idx
//      JOIN disease_info ai ON rai.dise_idx = ai.disease_idx
//      WHERE ai.disease_name IN (
//        SELECT disease
//        FROM USER
//        WHERE id = 'ju'
//      )
//    )
//    AND
//    fi.food_idx NOT IN (
//      SELECT fi3.food_idx
//      FROM rel_food_ingredient rfi3
//      JOIN ingredient i3 ON rfi3.ingredient_idx = i3.ingredient_index
//      JOIN food_info fi3 ON rfi3.foo_idx = fi3.food_idx
//      JOIN rel_allergy_ingredient rai2 ON rfi3.ingredient_idx = rai2.ingredient_index
//      JOIN allergy_info ai2 ON rai2.allergy_index = ai2.allergy_idx
//      WHERE ai2.allergy_name IN (
//        SELECT allergy
//        FROM USER
//        WHERE id = 'ju'
//      )
//    )
//  );



export default menu;
