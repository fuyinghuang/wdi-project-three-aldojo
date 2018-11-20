function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/foods'
  }).then(result => {
    $scope.foods = result.data;

  });

}

export default indexCtrl;
