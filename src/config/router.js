import countriesIndexCtrl from '../controllers/countries/indexCtrl';
import countriesShowCtrl from '../controllers/countries/showCtrl';
import countriesNewCtrl from '../controllers/countries/newCtrl';
import countriesEditCtrl from '../controllers/countries/editCtrl';
import registerCtrl from '../controllers/registerCtrl';
import loginCtrl from '../controllers/loginCtrl';
import foodNewCtrl from '../controllers/foods/foodNewCtrl';

function Router($stateProvider) {
  $stateProvider
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('login', {
      templateUrl: './views/login.html',
      url: '/login',
      controller: loginCtrl
    })
    .state('register', {
      templateUrl: './views/register.html',
      url: '/register',
      controller: registerCtrl
    })
    .state('countryIndex', {
      templateUrl: './views/countries/index.html',
      url: '/countries',
      controller: countriesIndexCtrl
    })
    .state('countryShow', {
      templateUrl: './views/countries/show.html',
      url: '/countries/:id',
      controller: countriesShowCtrl
    })
    .state('countryNew', {
      url: '/countries/new',
      templateUrl: './views/countries/new.html',
      controller: countriesNewCtrl
    })
    .state('countryEdit', {
      templateUrl: './views/countries/edit.html',
      url: '/countries/:id/edit',
      controller: countriesEditCtrl
    })
    .state('foodNew', {
      url: '/foods/:id/new',
      templateUrl: './views/foods/new.html',
      controller: foodNewCtrl
    });


}


export default Router;
