import Menu from '../models/menu.js';
import SC from '../utils/statusCode.js';

const menuController = {
  name: async (req, res) => {
    const { restaurant, id1, id2} = req.query;
    const foodList = await Menu.name(restaurant, id1, id2);
    return res.status(200).json({ food: foodList });
  },
  select: async (req, res) => {
    const foodList = await Menu.select();
    return res.status(200).json({ food: foodList });
  },
};

export default menuController;
