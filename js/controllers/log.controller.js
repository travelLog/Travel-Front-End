let LogController = function ($scope, UserService) {

  $scope.title = 'You are on the Log page!';


  LogService.getLogs().then ( (res) => {
    $scope.logs = res.data.logs;
    console.log(res);
  });

};
LogController.$inject = ['$scope', 'LogService'];
export default LogController;
 


