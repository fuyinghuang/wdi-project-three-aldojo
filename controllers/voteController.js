const Food = require('../models/food');

function vote(req, res, next) {
  console.log('UPVOTE!');
  Food
    .findById(req.params.foodId)
    .then(food => {
      req.body.voter = req.tokenUserId;
      food.votes.push(req.body.voter);
      return food.save();
    })
    .then(food => res.json(food))
    .catch(next);
}

module.exports = {
  vote: vote
};
