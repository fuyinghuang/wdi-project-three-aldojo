const User = require('../models/user');

function showProfileRoute(req, res, next){
  User.findById(req.params.id)
    .populate('foodComments countryComments')
    .select('-password')
    .then(comment => {
      console.log('this is the users comments ', comment._id);
      res.json(comment);
    })
    .catch(next);
}

module.exports = {
  showProfile: showProfileRoute
};
