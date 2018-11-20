function loginCtrl($scope, $state, $auth) {
  $scope.handleLogin = function() {
    console.log('login!');
    $auth.login($scope.user)
      .then(() => $state.go('countryIndex'))
      .catch(err => console.log('error', err));
  };
}

export default loginCtrl;
