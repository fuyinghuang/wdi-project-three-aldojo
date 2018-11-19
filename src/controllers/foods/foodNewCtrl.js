function foodNewCtrl($scope, $http, $state){
  $scope.handleSubmit = function(){
    console.log('submitted', $scope.food);
    // Added a createdBy key to the data object
    // which we are going to send to the backend
    // $scope.sushi.createdBy = $auth.getPayload().sub;
    $http({
      method: 'POST',
      url: '/api/foods',
      data: $scope.food
    }).then(result => $state.go('countryIndex'));
    // go to the the SHOW page
    // }).then(result => $state.go('countryShow', {sushiId: result.data._id}));
  };
}

export default foodNewCtrl;
