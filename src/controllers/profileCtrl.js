function profileCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  }).then(result => {
    console.log('the result is', result);
    $scope.user = result.data;
    console.log($scope.user);
  });
}

export default profileCtrl;
