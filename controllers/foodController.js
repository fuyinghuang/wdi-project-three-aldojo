// const Country = require('../models/country');
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
// function foodCreateRoute(req, res, next) {
//   Country.findById(req.params.countryId)
//     .then(sushi => {
//       req.body.user = req.tokenUserId;
//       sushi.comments.push(req.body);
//       // save the changes back to the DB
//       return sushi.save();
//     })
//     .then(sushi => Sushi.populate(sushi, 'createdBy comments.user'))
//     .then(sushi => res.json(sushi))
//     .catch(next);
// }







module.exports = {
  foodShowRoute: foodShowRoute,
  foodIndexRoute: foodIndexRoute,
  foodCreateRoute: foodCreateRoute

};
