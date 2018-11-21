function profileCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  }).then(result => {
    console.log('the result is', result);
    $scope.comment = result.data;
    console.log('this is', $scope.comment.username);
  });
}

export default profileCtrl;
