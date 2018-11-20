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
  
}



export default showCtrl;
