const router = require('express').Router();
const countryController = require('../controllers/countryController');
const foodController = require('../controllers/foodController');


router.route('/countries')
  .get(countryController.indexRoute)
  .post(countryController.createRoute);


router.route('/countries/:countryId')
  .get(countryController.countryShowRoute)
  .post(foodController.createRoute);

router.route('/countries/:countryId/:foodId')
  .get(foodController.foodShowRoute);


module.exports = router;
