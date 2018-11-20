function editCtrl($scope, $state, $http) {
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



export default editCtrl;
