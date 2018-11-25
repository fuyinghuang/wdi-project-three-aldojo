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
