const Country = require('../models/country');

function createRoute(req, res, next){
  Country
    .findById(req.params.countryId)
    .then(country => {
      req.body.commentAuthor = req.tokenUserId;
      country.comments.push(req.body);
      console.log('creating a comment', req.body);
      return country.save();
    })
    .then(country => Country.populate(country, 'comments.commentAuthor nationalFood'))
    .then(country => res.json(country))
    .catch(next);
}

function deleteRoute(req, res, next){
  Country
    .findById(req.params.countryId)
    .then(country => {
      const comment = country.comments.id(req.params.commentId);
      comment.remove();
      return country.save();
    })
    .then(country => Country.populate(country, 'comments.commentAuthor nationalFood'))
    .then(country => res.json(country))
    .catch(next);
}
module.exports = {
  createRoute: createRoute,
  deleteRoute: deleteRoute
};
