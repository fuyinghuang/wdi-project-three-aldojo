function foodNewCtrl($scope, $http, $state){
  console.log('result.data.id', $state.params.id);
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
