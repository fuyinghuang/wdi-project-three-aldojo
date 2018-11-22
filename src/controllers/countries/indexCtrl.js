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
