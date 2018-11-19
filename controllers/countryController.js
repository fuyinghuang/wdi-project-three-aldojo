const Country = require('../models/country');

function indexRoute(req, res, next) {
  Country.find().populate('foodsCreated').then(countries => res.json(countries))
    .catch(next);
}


function createRoute(req, res, next) {
  console.log('this is req. body !!!!!!!!', req.body);
  Country.create(req.body)
    .then(country => res.json(country))
    .catch(next);
}


function countryShowRoute(req, res, next) {
  console.log('req.params.id',req.params.countryId);
  Country.findById(req.params.countryId)
    .populate('foodsCreated')
    .then(country => res.json(country))
    .catch(next);
}



module.exports = {
  indexRoute: indexRoute,
  createRoute: createRoute,
  countryShowRoute: countryShowRoute
};
