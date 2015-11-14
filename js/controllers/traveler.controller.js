let TravelerController = function($scope, $http, PARSE) {
  $scope.title = "Traveler ";
  $scope.titletwo = "Information";

  let url = PARSE.URL + 'classes/trips';

  $http.get(url, PARSE.CONFIG).then( (res) => {
    $scope.trips = res.data.results;
  });

};

TravelerController.$inject = ['$scope', '$http', 'PARSE'];

export default TravelerController;

//   $scope.count = 0;
//   $scope.message = "";

//   $scope.incrementByOne= function() {
//     $scope.count++;
//     $scope.message= ($scope.count === 1) ? "Thank you for your submission.  We will contact you soon!" : "Thank you for your interest!";

//   };


//   $scope.addTrip = (obj) => {
//     TripService.addTrip(obj).then( (res) => {
//       $scope.trip = {};
//     });
//   };   
  

// };
// TravelerController.$inject = ['$scope', 'TripService'];
// export default TravelerController;