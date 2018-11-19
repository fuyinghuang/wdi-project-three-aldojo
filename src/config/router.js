import countriesIndexCtrl from '../controllers/countries/indexCtrl';
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
      controller: function($state, $scope, $http) {
        $http({
          method: 'GET',
          url: `/api/countries/${$state.params.id}`
        }).then(result => {
          $scope.country = result.data;
        });
        $scope.handleDelete = function() {
          $http({
            method: 'DELETE',
            url: `/api/countries/${$scope.country._id}`
          }).then(() => $state.go('countryIndex'));
        };
      }
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
            data: $scope.country
          }).then(() => $state.go('countryIndex'));
        };
      }
    })
    .state('countryEdit', {
      templateUrl: './views/countries/edit.html',
      url: '/countries/:id/edit',
      controller: function($scope, $state, $http) {
        $http({
          method: 'GET',
          url: `/api/countries/${$state.params.id}`
        }).then(result => $scope.country = result.data);
        $scope.handleSubmit = function() {
          $http({
            method: 'PUT',
            url: `/api/countries/${$state.params.id}`,
            data: $scope.country
          }).then(() => $state.go('countryIndex'));
        };
      }
    })
    .state('foodNew', {
      url: '/foods/:id/new',
      templateUrl: './views/foods/new.html',
      controller: foodNewCtrl
    });


}


export default Router;
