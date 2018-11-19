import countriesIndexCtrl from '../controllers/countries/indexCtrl';
import registerCtrl from '../controllers/registerCtrl';
import loginCtrl from '../controllers/loginCtrl';

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
    .state('countryNew', {
      url: '/countries/new',
      templateUrl: './views/countries/new.html',
      controller: function($scope, $http, $state) {
        $scope.handleSubmit = function() {
          console.log('Form was submitted!', $scope.testing);
          $http({
            method: 'POST',
            url: '/api/countries',
            data: $scope.county
          }).then(() => $state.go('countryIndex'));
        };
      }
    });

}


export default Router;
