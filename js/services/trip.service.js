let TripService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/trips';

  // let checkAuth = function () {
  //   return true;
  // };

  this.getTrips = function () {
    //if (checkAuth()){     
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
   // }
  };

  this.getTrip = function (tripId) {
   // if (checkAuth()){      
      return $http({
        method: 'GET',
        url: url + '/' + tripId,
        headers: PARSE.CONFIG.headers,
        cache: true
      });
   // }
  };

  let Trip = function (obj) {
    this.title = obj.title;
    this.location= obj.location;
    this.value = obj.value;
    this.Url = obj.Url;
    this.sum = obj.sum;
    this.userName = obj.userName;
  };

};

TripService.$inject = ['$http', 'PARSE'];

export default TripService;