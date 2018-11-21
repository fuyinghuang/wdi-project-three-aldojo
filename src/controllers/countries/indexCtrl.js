// function indexCtrl($scope, $http) {
//   $http({
//     method: 'GET',
//     url: '/api/countries'
//   }).then(result => {
//     $scope.allCountries = result.data;
//     $scope.filteredCountries = $scope.allCountries;
//   });
//
//   $scope.handleFilterSubmit = function() {
//     console.log('Filter form submitted!', $scope.searchTerm);
//     $scope.filteredCountries = $scope.allCountries.filter(country =>
//       country.name.toLowerCase().startsWith($scope.searchTerm.toLowerCase())
//     );
//   };
// }

// doris verison the filter somehow doesn't work, I made some changes
function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all',
    skipAuthorization: true
  }).then(result => {
    $scope.countries = result.data;
  });
}

export default indexCtrl;
