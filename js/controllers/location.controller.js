let LocationController = function ($scope, LocationService) {

  $scope.title = 'You are on the location page!';
console.log($scope.title);

  LocationService.getLogs().then ( (res) => {
    $scope.logs = res.data.logs;
    console.log(res);
  });

};
LocationController.$inject = ['$scope', 'LocationService'];
export default LocationController;
 


