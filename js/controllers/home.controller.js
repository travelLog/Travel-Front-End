let HomeController = function ($scope) {

  $scope.id = "";

  $scope.search = function(num) {
    console.log(num);
  }






};

HomeController.$inject = ['$scope'];

export default HomeController;