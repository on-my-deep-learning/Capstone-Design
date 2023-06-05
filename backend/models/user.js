import { db } from '../config/db.js';

const User = {
  findUserById: async (id) => {
    const query = `SELECT id FROM USER WHERE id = ?`;
    const result = await db.query(query, [id]);
    return result;
  },

  signup: async (user) => {
    const {
      id,
      password,
      name,
      address,
      phone,
      sliderValue_a,
      sliderValue_b,
      sliderValue_c,
      diseaseList,
      allergyList,
    } = user;
    const query = `INSERT INTO USER (id, pw, name, address, phone, level, brix, permil, scovill, disease, allergy)
      VALUES (?, ?, ?, ?, ?, 0, ?, ?, ?, ?, ?);`;
    const disease = JSON.stringify(diseaseList); // diseaseList를 JSON 형식의 문자열로 변환
    const allergy = JSON.stringify(allergyList); // allergyList를 JSON 형식의 문자열로 변환
    await db.query(query, [
      id,
      password,
      name,
      address,
      phone,
      sliderValue_a,
      sliderValue_b,
      sliderValue_c,
      disease,
      allergy,
    ]);
  },

  login: async (id) => {
    const query = `SELECT * FROM USER WHERE id = ?`;
    const result = await db.query(query, [id]);
    return result;
  },
};

export default User;
