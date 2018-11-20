function mainCtrl($scope, $auth, $state) {
  $scope.isAuthenticated = function() {
    if ($auth.isAuthenticated()) {
      $scope.username = $auth.getPayload().username;
      $scope.userId = $auth.getPayload().sub;
    }
    return $auth.isAuthenticated();
  };
  $scope.handleLogout = function() {
    $auth.logout()
      .then(() => $state.go('home'));
  };
}

export default mainCtrl;
