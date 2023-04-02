import { compare, genSalt, hash } from 'bcrypt';
import User from '../models/user.js';
import SC from '../utils/statusCode.js';
import jwt from 'jsonwebtoken';

const userController = {
  signup: async (req, res) => {
    const { id, password } = req.body;
    try {
      const find = await User.findUserById(id);
      if (0 !== find.length) {
        return res.status(SC.CONFLICT.status).json(SC.CONFLICT);
      }
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
  login: async (req, res) => {
    const key = process.env.SECRET_KEY;
    const { id, password } = req.body;
    console.log(id, password);
    try {
      const find = await User.findUserById(id);
      if (0 == find.length) {
        console.log('not in list');
        return res.status(SC.NOT_FOUND.status).json(SC.NOT_FOUND);
      }
    } catch (err) {
      res.status(SC.SERVER_ERROR.status).json(SC.SERVER_ERROR);
    }
    //비번 compare
    const [findUser] = await User.login(id);
    const validPassword = await compare(password, findUser.pw);

    if (!validPassword) {
      console.log('비번 틀림');
      return res.status(SC.UNAUTHORIZED.status).json(SC.UNAUTHORIZED);
    }

    //header 토큰 담아서 보내기
    const token = jwt.sign(
      {
        type: 'JWT',
        id: id,
        password: password,
      },
      key,
      {
        expiresIn: '15m', // 만료시간 15분
        issuer: 'tokenIssuer',
      }
    );
    return res.status(200).json({
      code: 200,
      message: '토큰이 발급되었습니다.',
      token: token,
    });
  },
  check: async (req, res) => {
    const token = req.headers.authorization;
    const key = process.env.SECRET_KEY;
    try {
      const decoded = jwt.verify(token, key);
      console.log(decoded);
      return res.status(200).json({
        code: 200,
        message: '토큰이 유효합니다.',
      });
    } catch (err) {
      console.log(err);
      return res.status(401).json({
        code: 401,
        message: '토큰이 유효하지 않습니다.',
      });
    }
  },
};

export default userController;
