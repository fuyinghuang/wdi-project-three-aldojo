const Country = require('../models/country');
// const Food = require('../models/food');

function countryIndexRoute(req, res, next) {
  Country
    .find()
    // .populate('nationalFood')
    .then(countries => res.json(countries))
    .catch(next);
}

function countryShowRoute(req, res, next) {
  console.log('req.params.id',req.params.id);
  Country
    .findById(req.params.id)
    .populate('nationalFood')
    .then(country => res.json(country))
    .catch(next);
}



module.exports = {
  countryIndexRoute: countryIndexRoute,
  countryShowRoute: countryShowRoute

};
