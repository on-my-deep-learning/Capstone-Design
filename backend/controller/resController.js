import Res from '../models/restaurant.js';
import SC from '../utils/statusCode.js';

const resController = {
  select: async (req, res) => {
    const { idx } = req.body;
  },
};

export default resController;
