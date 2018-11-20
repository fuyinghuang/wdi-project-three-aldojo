const Food = require('../models/food');

function vote(req, res, next) {
  console.log('UPVOTE!');
  Food
    .findById(req.params.foodId)
    .then(food => {
      if (!food.votes.find(userId => userId.toString() === req.tokenUserId)) {
        food.votes.push(req.tokenUserId);
        return food.save();
      } else {
        res.status(422).json({ message: 'Cannot vote twice'});
        next();
      }
    })
    .then(food => res.json(food))
    .catch(next);
}

function unvote(req, res, next) {
  console.log('UNVOTE!');
  Food
    .findById(req.params.foodId)
    .then(food => {
      if (!food.votes.find(userId => userId.toString() === req.tokenUserId)) {
        res.status(422).json({ message: 'No vote to remove'});
      } else {
        console.log('unvote');
        food.votes = food.votes.filter(x => x.toString() !== req.tokenUserId);
        return food.save();
      }
    })
    .then(food => res.json(food))
    .catch(next);
}

module.exports = {
  vote: vote,
  unvote: unvote
};
