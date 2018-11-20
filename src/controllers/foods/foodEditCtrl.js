function editCtrl($scope, $state, $http) {
  $http({
    method: 'GET',
    url: `/api/foods/${$state.params.id}`
  }).then(result => $scope.food = result.data);
  $scope.handleSubmit = function() {
    $http({
      method: 'PUT',
      url: `/api/foods/${$state.params.id}`,
      data: $scope.food
    }).then(result => $state.go('foodShow', {id: $state.params.id}));
  };
}

export default editCtrl;
