function mainCtrl($scope, $auth, $state, Flash) {
  $scope.isAuthenticated = function() {
    if ($auth.isAuthenticated()) {
      $scope.username = $auth.getPayload().username;
      $scope.userId = $auth.getPayload().sub;
    }
    return $auth.isAuthenticated();
  };
  $scope.handleLogout = function() {

    $auth.logout()
      .then(() => {
        Flash.create('info', 'Bye bye 👋!');
        $state.go('home');
      }
      );
  };
}



export default mainCtrl;
