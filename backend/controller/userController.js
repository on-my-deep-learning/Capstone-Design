import { genSalt, hash } from 'bcrypt';
import User from '../models/user.js';
import SC from '../utils/statusCode.js';

const userController = {
  signup: async (req, res) => {
    const { id, password } = req.body;
    try {
      const find = await User.findUserById(id);
      //if (0 !== find.length) {
      //  return res.status(SC.CONFLICT.status).json(SC.CONFLICT);
      //}
      const salt = await genSalt(10);
      const hashed = await hash(password, salt);
      const user = {
        ...req.body,
        password: hashed,
      };
      await User.signup(user);
      res.status(SC.CREATED.status).json(SC.CREATED);
    } catch (err) {
      res.status(SC.SERVER_ERROR.status).json(SC.SERVER_ERROR);
    }
  },
};

export default userController;
