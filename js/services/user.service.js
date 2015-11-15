let UserService = function($http, SERVER) {
  
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

UserService.$inject = ['$http', 'SERVER'];

export default UserService;