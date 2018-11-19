function editCtrl($scope, $state, $http) {
  $http({
    method: 'GET',
    url: `/api/countries/${$state.params.id}`
  }).then(result => $scope.food = result.data);
  $scope.handleSubmit = function() {
    $http({
      method: 'PUT',
      url: `/api/countries/${$state.params.id}`,
      data: $scope.food
    }).then(result => $state.go('countryShow', {id: $state.params.id}));
  };
}

export default editCtrl;
