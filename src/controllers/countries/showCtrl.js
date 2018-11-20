function showCtrl($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/countries/${$state.params.id}`
  }).then(result => {
    $scope.country = result.data;
  });
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/countries/${$scope.country._id}`
    }).then(() => $state.go('countryIndex'));
  };
  $scope.addComment = function(){
    $http({
      method: 'POST',
      url: `/api/countries/${$state.params.id}/comments`,
      data: $scope.comment
    }).then(result => $scope.country = result.data);
  };
  $scope.deleteComment = function(comment){
    $http({
      method: 'DELETE',
      url: `/api/countries/${$state.params.id}/comments/${comment._id}`
    }).then(result => $scope.country = result.data);
  };

}



export default showCtrl;
