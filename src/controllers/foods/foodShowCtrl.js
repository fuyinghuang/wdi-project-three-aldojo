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
  $scope.addComment = function(){
    $http({
      method: 'POST',
      url: `/api/foods/${$state.params.id}/comments`,
      data: $scope.comment
    }).then(result => {
      $scope.food = result.data;
      $scope.comment.text = null;
    });
  };
  $scope.deleteComment = function(comment){
    $http({
      method: 'DELETE',
      url: `/api/foods/${$state.params.id}/comments/${comment._id}`
    }).then(result => $scope.food = result.data);
  };
}

export default showCtrl;
