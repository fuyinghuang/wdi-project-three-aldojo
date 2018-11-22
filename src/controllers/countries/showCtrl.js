function showCtrl($state, $scope, $http, $location) {
  $http({
    method: 'GET',
    url: `/api/countries/alpha3/${$state.params.alpha3Code}`
  }).then(result => {
    if (result.data) {
      $scope.country = result.data;
    } else {
      $location.path(`/countries/new/${$state.params.alpha3Code}`).replace();
    }
  });
  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/countries/${$scope.country._id}`
    }).then(() => $state.go('countryIndex'));
  };
  $scope.vote = function(food) {
    console.log($state.params.alpha3Code);
    $http({
      method: 'POST',
      url: `/api/foods/${food._id}/vote`
    });
  };
  $scope.unvote = function(food) {
    $http({
      method: 'POST',
      url: `/api/foods/${food._id}/unvote`
    });
  };

  $scope.addComment = function(){
    $http({
      method: 'POST',
      url: `/api/countries/${$scope.country._id}/comments`,
      data: $scope.comment
    }).then(result => {
      console.log('this is result.data', result.data);
      $scope.country = result.data;
      $scope.comment.text = null;
    });
  };
  $scope.deleteComment = function(comment){
    $http({
      method: 'DELETE',
      url: `/api/countries/${$scope.country._id}/comments/${comment._id}`
    }).then(result => $scope.country = result.data);
  };

}



export default showCtrl;
