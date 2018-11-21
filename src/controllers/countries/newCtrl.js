function newCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `https://restcountries.eu/rest/v2/alpha/${$state.params.alpha3Code}`,
    skipAuthorization: true
  }).then(result => {
    result.data.flagUrl = result.data.flag;
    $scope.country = result.data;
  });
  $scope.handleSubmit = function() {
    console.log('Form was submitted!', $scope.testing);
    $http({
      method: 'POST',
      url: '/api/countries',
      data: $scope.country
    }).then(() => $state.go('countryIndex'));
  };
}


export default newCtrl;
