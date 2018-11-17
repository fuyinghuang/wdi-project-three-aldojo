// const Country = require('../models/country');
const Food = require('../models/food');



function foodShowRoute(req, res, next) {
  console.log('req.params.countryId.foodId',req.params.countryId.foodId);
  Food.findById(req.params.countryId.foodId)
    .then(food => res.json(food))
    .catch(next);
}



module.exports = {
  foodShowRoute: foodShowRoute

};
