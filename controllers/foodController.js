
const Food = require('../models/food');

function foodIndexRoute(req, res, next) {
  Food
    .find()
    .then(foods => res.json(foods))
    .catch(next);
}

function foodShowRoute(req, res, next) {
  Food
    .findById(req.params.id)
    .then(food => res.json(food))
    .catch(next);
}

function foodCreateRoute(req, res, next) {
  req.body.country = req.params.countryId;
  Food
    .create(req.body)
    .then(food => res.status(201).json(food))
    .catch(next);
}

function foodUpdateRoute(req, res, next){
  Food
    .findById(req.params.id)
    .then(food => food.set(req.body))
    .then(food => food.save())
    .then(food => res.json(food))
    .catch(next);
}

function foodDeleteRoute(req, res, next) {
  Food
    .findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('Food has been deleted');
      res.sendStatus(204);
    })
    .catch(next);
}

function vote(req, res, next) {
  console.log('UPVOTE!');
  Food
    .findById(req.params.foodId)
    .then(food => {
      food.like.push(req.params.userId);
      food.save();
      res.json(food);
    })
    .catch(err => {
      console.log(err);
      next();
    });
}

module.exports = {
  foodShowRoute: foodShowRoute,
  foodIndexRoute: foodIndexRoute,
  foodCreateRoute: foodCreateRoute,
  foodUpdateRoute: foodUpdateRoute,
  foodDeleteRoute: foodDeleteRoute,
  vote: vote
};
