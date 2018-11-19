function indexCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/foods'
  }).then(result => {
    $scope.allFoods = result.data;
    $scope.filteredFoods = $scope.allFoods;
  });
  $scope.handleFilterSubmit = function (){
    $scope.filteredFoods = $scope.allFoods.filter(food => food.name.toLowerCase().includes($scope.searchTerm.toLowerCase()));
  };
}

export default indexCtrl;
