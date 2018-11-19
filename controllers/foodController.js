// const Country = require('../models/country');
const Food = require('../models/food');



function foodShowRoute(req, res, next) {
  console.log('req.params.countryId.foodId',req.params.countryId.foodId);
  Food.findById(req.params.countryId.foodId)
    .then(food => res.json(food))
    .catch(next);
}

function createRoute(req, res, next) {
  console.log('this is req. body !!!!!!!!', req.body);
  Food.create(req.body)
    .then(food => res.json(food))
    .catch(next);
}



module.exports = {
  foodShowRoute: foodShowRoute,
  createRoute: createRoute
};
