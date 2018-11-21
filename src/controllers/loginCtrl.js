// function loginCtrl($scope, $state, $auth) {
//   $scope.handleLogin = function() {
//     console.log('login!');
//     $auth.login($scope.user)
//       .then(() => $state.go('countryIndex'))
//       .catch(err => console.log('error', err));
//   };
// }
//
export default loginCtrl;


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
        Flash.create('warning', 'Login failed: ' + err.data.message);
      });
  };
}
