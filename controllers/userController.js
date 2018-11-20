const User = require('../models/user');

function showProfileRoute(req, res, next){
  User.findById(req.params.id)
    .populate('sushisCreated')
  // Remove the password before sending to the client!!
    .select('-password')
    .then(user => {
      res.json(user);
    })
    .catch(next);
}

module.exports = {
  showProfile: showProfileRoute
};
