const Country = require('../models/country');

function indexRoute(req, res, next) {
  Country.find().then(countries => res.json(countries))
    .catch(next);
}




module.exports = {
  indexRoute: indexRoute

};
