function loginCtrl($scope, $state, $auth, Flash) {
  $scope.handleLogin = function() {
    console.log('login!');
    $auth.login($scope.user)
      .then(result => {
        Flash.create('success', result.data.message);

        $state.go('countryIndex');
      })
      .catch(err => {

        console.log('error', err);
        Flash.create('danger', 'Login failed: ' + err.data.message);
      });
  };
}
export default loginCtrl;
