function showCtrl($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/foods/${$state.params.id}`
  }).then(result => {
    $scope.food = result.data;
  });
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/foods/${$state.params.id}`
    }).then(() => $state.go('foodIndex'));
  };
}

export default showCtrl;
