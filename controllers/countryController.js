const Country = require('../models/country');

function indexRoute(req, res, next) {
  Country.find().then(countries => res.json(countries))
    .catch(next);
}

function countryShowRoute(req, res, next) {
  console.log('req.params.id',req.params.countryId);
  Country.findById(req.params.countryId)
    .then(country => res.json(country))
    .catch(next);
}



module.exports = {
  indexRoute: indexRoute,
  countryShowRoute: countryShowRoute

};
