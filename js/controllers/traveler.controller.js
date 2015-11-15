let TravelerController = function ($scope, UserService) {

  $scope.title = 'You are on the Travler page!';


  UserService.getLogs().then ( (res) => {
    $scope.logs = res.data.logs;
    console.log(res);
  });

};
TravelerController.$inject = ['$scope', 'UserService'];
export default TravelerController;
 


