function registerCtrl($scope, $state, $auth, Flash) {
  $scope.handleRegister = function() {
    console.log('register!');
    $auth.signup($scope.user)
      .then(result => {
        Flash.create('success', result.data.message);
        $auth.login($scope.user);
        $state.go('home');
      })
      .catch(err => console.log('Error!', err));

  };
}

export default registerCtrl;
