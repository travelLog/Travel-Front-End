let LocationService = function($http, SERVER) {
  
  let url = 'https://mysterious-fjord-1759.herokuapp.com' + '/users/3/logs';

this.getLogs = function () {
      return $http({
        url: url,
        method: 'GET',
        cache: true
      });
    
  };

  this.getLog = function (log_id) {
      return $http({
        method: 'GET',
        url: url + '/' + log_id,
        cache: true
      });
    
  };

  let Log = function (obj) {
    this.username = obj.username;
    this.title = obj.title;
    this.description = obj.description;
  };

  
};

LocationService.$inject = ['$http', 'SERVER'];

export default LocationService;
  // Get List of Employees within an org

//   this.getOrgList = function() {
//     UserService.checkAuth();

//     return $http({
//       method: 'GET',
//       url: SERVER.URL + '/employees',
//       headers: SERVER.CONFIG.headers,
//       cache: true
//     });
//   };
  

// };

// ConsoleService.$inject = ['$http', 'SERVER', '$state', 'UserService'];

// export default ConsoleService;