import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import LogController from './controllers/log.controller';
import TravelerController from './controllers/traveler.controller';
import LocationController from './controllers/location.controller';

import UserService from './services/user.service';
import LocationService from './services/location.service';
import LogService from './services/log.service';

angular
  .module('app', ['ui.router'])
  .constant('SERVER', {
    URL: "https://mysterious-fjord-1759.herokuapp.com/",
    CONFIG: {
      headers: {}
        
    }
      
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('LogController', LogController)
  .controller('TravelerController', TravelerController)
  .controller('LocationController', LocationController)

  .service('UserService', UserService)
  .service('LocationService', LocationService)
;





