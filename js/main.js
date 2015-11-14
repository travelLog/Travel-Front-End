import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import LogController from './controllers/log.controller';
import TravelerController from './controllers/traveler.controller';
import LocationController from './controllers/location.controller';

import TripService from './services/trip.service';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: "https://api.parse.com/1/",
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'y6KjiO3d067pN9BqYopldmUHxOFsSZbPFqh7hQhH',
        'X-Parse-REST-API-Key': 'RsAJRP7w7pBbeRmm1fGTf8bpyXFHc6gLMuSwJB6J'
      }
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('LogController', LogController)
  .controller('TravelerController', TravelerController)
  .controller('LocationController', LocationController)

  .service('TripService', TripService)
;





