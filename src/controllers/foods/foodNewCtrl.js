function foodNewCtrl($scope, $http, $state){
  $scope.handleSubmit = function() {
    $http({
      method: 'POST',
      url: `/api/countries/${$state.params.id}`,
      data: $scope.food
    }).then(result => $state.go('foodShow', {id: result.data.id}));
  };
}


export default foodNewCtrl;
