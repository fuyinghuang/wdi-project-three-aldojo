const jwt = require('jsonwebtoken');
const User = require('../models/user');
const env = require('../config/environment');

function loginRoute(req, res, next) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        const token = jwt.sign({
          username: user.username,
          sub: user._id
        }, env.secret, { expiresIn: '24h' });
        res.json({
          message: `Hello again ${user.username}`,
          token: token
        });
      } else {
        res.status(401).json({
          message: 'Access DENIED'
        });
      }
    })
    .catch(next);
}

function registerRoute(req, res, next) {
  User.create(req.body)
    .then(user => res.json({
      message: `Welcome ${user.username}`
    }))
    .catch(next);
}

module.exports = {
  loginRoute: loginRoute,
  registerRoute: registerRoute
};
