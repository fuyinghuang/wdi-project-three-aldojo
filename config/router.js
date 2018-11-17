const router = require('express').Router();
// const authController = require('../controllers/authController');
const CountryController = require('../controllers/CountryController');

// router.route('/register')
//   .post(authController.register);
//
// router.route('/login')
//   .post(authController.login);

router.route('/countries')
  .get(CountryController.indexRoute);
//   .post(secureRoute, CountryController.create);


module.exports = router;
