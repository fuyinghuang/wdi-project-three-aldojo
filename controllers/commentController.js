const Food = require('../models/food');

function createRoute(req, res, next){
  Food
    .findById(req.params.foodId)
    .then(food => {
      req.body.commentAuthor = req.tokenUserId;
      food.comments.push(req.body);
      console.log('creating a comment', req.body);
      return food.save();
    })
    .then(food => Food.populate(food, 'comments.commentAuthor nationalFood'))
    .then(food => res.json(food))
    .catch(next);
}

function deleteRoute(req, res, next){
  Food
    .findById(req.params.foodId)
    .then(food => {
      const comment = food.comments.id(req.params.commentId);
      comment.remove();
      return food.save();
    })
    .then(food => Food.populate(food, 'comments.commentAuthor nationalFood'))
    .then(food => res.json(food))
    .catch(next);
}
module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
