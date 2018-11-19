function foodNewCtrl($scope, $http, $state){
  console.log('this is', $state.params.id);
  $scope.handleSubmit = function(){
    console.log('submitted', $scope.food);
    // Added a createdBy key to the data object
    // which we are going to send to the backend
    // $scope.food.createdBy = $auth.getPayload().sub;
    $http({
      method: 'POST',
      url: `/api/countries/${$state.params.id}`,
      data: $scope.food
    }).then(() => $state.go('countryIndex'));
    // go to the the SHOW page
    // }).then(result => $state.go('countryShow', {countryId: result.data._id}));
  };
}




export default foodNewCtrl;
