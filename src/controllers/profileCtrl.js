function profileCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  }).then(result => {
    console.log('the result is', result);
    $scope.commentAuthor = result.data;
    $scope.commentAuthor.countryComments = $scope.commentAuthor.countryComments.sort().filter((country, index, array) => {
      if(index === 0) return true;
      return array[index - 1].id !== country.id;
    });
    $scope.commentAuthor.foodComments = $scope.commentAuthor.foodComments.sort().filter((food, index, array) => {
      if(index === 0) return true;
      return array[index - 1].id !== food.id;
    });
  });
}

export default profileCtrl;
