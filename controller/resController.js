import Restaurant from '../models/restaurant.js';
import SC from '../utils/statusCode.js';

const resController = {
  name: async (req, res) => {
    const { category } = req.query;
    const restaurantList = await Restaurant.name(category);
    return res.status(200).json({ restaurants: restaurantList });
  },
  select: async (req, res) => {
    const restaurantList = await Restaurant.select();
    return res.status(200).json({ restaurants: restaurantList });
  },
};

export default resController;
