const router = require('express').Router();
const countryController = require('../controllers/countryController');
const foodController = require('../controllers/foodController');

router.route('/countries')
  .get(countryController.countryIndexRoute)
  .post(countryController.countryCreateRoute);

router.route('/countries/:id')
  .get(countryController.countryShowRoute)
  .put(countryController.countryUpdateRoute)
  .delete(countryController.countryDeleteRoute);

router.route('/countries/:countryId')
  .post(foodController.foodCreateRoute);

router.route('/foods')
  .get(foodController.foodIndexRoute);

router.route('/foods/:id')
  .get(foodController.foodShowRoute)
  .put(foodController.foodUpdateRoute)
  .delete(foodController.foodDeleteRoute);

// router.route('/register')
//   .post(authController.register);
//
// router.route('/login')
//   .post(authController.login);


module.exports = router;
