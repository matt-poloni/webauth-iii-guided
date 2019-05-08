const jwt = require('jsonwebtoken');

const secrets = require('../config/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if(err) { // token is invalid/expired
      res.status(401).json({ you: 'shall not pass!!!' })
    } else { // token is valid
      req.decodedToken = decodedToken;
      next();
    }
  })
};
