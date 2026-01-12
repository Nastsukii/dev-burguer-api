import jwt from 'jsonwebtoken';
import authConfig from './../config/auth.js';

const authMiddleware = (request, response, next) => {
  const authToken = request.headers.authorization;
  if (!authToken) {
    return response.status(401).json({ erro: 'token not provided' });
  }

  const token = authToken.split(' ')[1];

  try {
    jwt.verify(token, authConfig.secret, (error, decoded) => {
      console.log(decoded);
      if (error) {
        throw Error();
      }
      request.userId = decoded.id;
    });
  } catch (__error) {
    return response.status(401).json({ error: 'Token is Valid' });
  }
  return next();
};

export default authMiddleware;
