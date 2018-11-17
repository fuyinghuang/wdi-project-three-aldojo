const router = require('express').Router();
const CountryController = require('../controllers/CountryController');


router.route('/countries')
  .get(CountryController.indexRoute);
//   .post(secureRoute, CountryController.create);

router.route('/countries/:countryId')
  .get(CountryController.showRoute);


module.exports = router;
