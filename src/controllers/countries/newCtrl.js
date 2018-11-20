function newCtrl($scope, $http, $state) {
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
