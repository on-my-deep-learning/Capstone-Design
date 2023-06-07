import jwt from 'jsonwebtoken';

const authMiddleware = {
  checkToken: (req, res, next) => {
    try {
      // 요청 헤더에 저장된 토큰(req.headers.authorization)과 비밀키를 사용하여 토큰을 req.decoded에 반환
      req.decoded = jwt.verify(
        req.headers.authorization,
        process.env.SECRET_KEY
      );
      return next();
    } catch (error) {
      // 인증 실패
      // 유효시간이 초과된 경우
      if (error.name === 'TokenExpiredError') {
        return res.status(419).json({
          code: 419,
          message: '토큰이 만료되었습니다.',
        });
      }
      // 토큰의 비밀키가 일치하지 않는 경우
      if (error.name === 'JsonWebTokenError') {
        return res.status(401).json({
          code: 401,
          message: '유효하지 않은 토큰입니다.',
        });
      }
    }
    // const token = req.headers['x-access-token'] || req.query.token;
    // if (!token) {
    //   return res.status(403).json({
    //     success: false,
    //     message: 'not logged in',
    //   });
    // }
    // const p = new Promise((resolve, reject) => {
    //   jwt.verify(token, req.app.get('jwt-secret'), (err, decoded) => {
    //     if (err) reject(err);
    //     resolve(decoded);
    //   });
    // });
    // const onError = (error) => {
    //   res.status(403).json({
    //     success: false,
    //     message: error.message,
    //   });
    // };
    // p.then((decoded) => {
    //   req.decoded = decoded;
    //   next();
    // }).catch(onError);
  },
};

export default authMiddleware;
