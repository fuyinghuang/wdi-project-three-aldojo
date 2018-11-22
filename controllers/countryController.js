const Country = require('../models/country');

function countryIndexRoute(req, res, next) {
  Country
    .find()
    .then(countries => res.json(countries))
    .catch(next);
}

function countryCreateRoute(req, res, next) {
  Country
    .create(req.body)
    .then(country => {
      console.log('creating a country', req.body);
      res.status(201).json(country);
    })
    .catch(next);
}

function countryShowRoute(req, res, next) {
  console.log('req.params.id',req.params.id);
  Country
    .findById(req.params.id)
    .populate('nationalFood comments.commentAuthor')
    .then(country => res.json(country))
    .catch(next);
}

function countryAlphaShowRoute(req, res) {
  Country.findOne({alpha3Code: req.params.alpha3Code})
    .populate('nationalFood comments.commentAuthor')
    .then(country => res.json(country));
}

function countryUpdateRoute(req, res, next) {
  console.log('updating country');
  Country
    .findById(req.params.id)
    .then(country => country.set(req.body))
    .then(country => country.save())
    .then(country => res.json(country))
    .catch(next);
}

function countryDeleteRoute(req, res, next) {
  Country.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log('The country has been deleted');
      res.sendStatus(204);
    })
    .catch(next);
}





module.exports = {
  countryIndexRoute: countryIndexRoute,
  countryCreateRoute: countryCreateRoute,
  countryShowRoute: countryShowRoute,
  countryUpdateRoute: countryUpdateRoute,
  countryDeleteRoute: countryDeleteRoute,
  countryAlphaShowRoute: countryAlphaShowRoute
};
