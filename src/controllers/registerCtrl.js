function registerCtrl($scope, $state, $auth) {
  $scope.handleRegister = function() {
    console.log('register!');
    $auth.signup($scope.user)
      .then(() => {
        $auth.login($scope.user)
          .then(() => {
            $state.go('countryIndex');
          });
      })
      .catch(err => console.log('Error!', err));

  };
}

export default registerCtrl;
