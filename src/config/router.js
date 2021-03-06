import countriesIndexCtrl from '../controllers/countries/indexCtrl';
import countriesShowCtrl from '../controllers/countries/showCtrl';
// import countriesAlphaCtrl from '../controllers/countries/alphaCtrl';
import countriesNewCtrl from '../controllers/countries/newCtrl';
import countriesEditCtrl from '../controllers/countries/editCtrl';
import registerCtrl from '../controllers/registerCtrl';
import loginCtrl from '../controllers/loginCtrl';
import foodNewCtrl from '../controllers/foods/foodNewCtrl';
import foodEditCtrl from '../controllers/foods/foodEditCtrl';
import foodsIndexCtrl from '../controllers/foods/foodIndexCtrl';
import foodsShowCtrl from '../controllers/foods/foodShowCtrl';
import profileCtrl from '../controllers/profileCtrl';

function secureRoute($auth, $state, Flash) {
  if (!$auth.isAuthenticated()) {
    Flash.create('info', 'Please log in');
    $state.go('login');
  }
}


function Router($urlRouterProvider, $stateProvider) {
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
      url: '/countries/:alpha3Code',
      controller: countriesShowCtrl
    })
    .state('countryNew', {
      templateUrl: './views/countries/new.html',
      url: '/countries/new/:alpha3Code',
      controller: countriesNewCtrl,
      resolve: { secureRoute }
    })
    .state('countryEdit', {
      templateUrl: './views/countries/edit.html',
      url: '/countries/:id/edit',
      controller: countriesEditCtrl,
      resolve: { secureRoute }
    })
    .state('foodIndex', {
      templateUrl: './views/foods/index.html',
      url: '/foods',
      controller: foodsIndexCtrl
    })
    .state('foodShow', {
      templateUrl: './views/foods/show.html',
      url: '/foods/:id',
      controller: foodsShowCtrl
    })
    .state('foodNew', {
      url: '/foods/:id/new',
      templateUrl: './views/foods/new.html',
      controller: foodNewCtrl,
      resolve: { secureRoute }
    })
    .state('foodEdit', {
      url: '/foods/:id/edit',
      templateUrl: './views/foods/edit.html',
      controller: foodEditCtrl,
      resolve: { secureRoute }
    })
    .state('profile', {
      templateUrl: './views/profile.html',
      url: '/profile/:id',
      controller: profileCtrl
    });
  $urlRouterProvider.otherwise('/');

}


export default Router;
