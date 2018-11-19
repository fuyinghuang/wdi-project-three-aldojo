const router = require('express').Router();
const countryController = require('../controllers/countryController');
const foodController = require('../controllers/foodController');

router.route('/countries')
  .get(countryController.countryIndexRoute);

router.route('/countries/:id')
  .get(countryController.countryShowRoute);


router.route('/countries/:countryId')
  .post(foodController.foodCreateRoute);


router.route('/foods')
  .get(foodController.foodIndexRoute);


router.route('/foods/:id')
  .get(foodController.foodShowRoute);
// .put(secureRoute, exhibitionController.updateRoute)
// .delete(secureRoute, exhibitionController.deleteRoute);





// router.route('/register')
//   .post(authController.register);
//
// router.route('/login')
//   .post(authController.login);


module.exports = router;
