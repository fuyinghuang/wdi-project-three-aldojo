function foodNewCtrl($scope, $http, $state){
  $scope.handleSubmit = function() {
    $http({
      method: 'POST',
      url: `/api/countries/${$state.params.id}`,
      data: $scope.food
    // }).then(() => $state.go('countryIndex'));
    }).then(result => $state.go('countryShow', {id: $state.params.id}));
  };
}


export default foodNewCtrl;
