// function indexCtrl($scope, $http) {
//   $http({
//     method: 'GET',
//     url: '/api/countries'
//   }).then(result => {
//     $scope.allCountries = result.data;
//   });
//
// }

// doris verison the filter somehow doesn't work, I made some changes
function indexCtrl($state, $scope, $http) {
  $http({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all',
    skipAuthorization: true
  }).then(result => {
    console.log(result);
    $scope.countries = result.data;
  });
  $scope.findCountry = function() {
    console.log('this it sihfiddsifhsifhdsif');
    $http({
      method: 'GET',
      url: `https://restcountries.eu/rest/v2/name/${$scope.searchTerm}`,
      skipAuthorization: true
    }).then(result => {
      $scope.searchResults = result.data;
    });
  };
}







export default indexCtrl;
