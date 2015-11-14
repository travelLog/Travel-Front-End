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
        'X-Parse-Application-Id': 'ByXUCRrnspC3USquH3dFzHgQSmOWvQ3pj10coJWe',
        'X-Parse-REST-API-Key': 'sXuKkgfdGMOkssUQ67J0I9zVMRrubUP4tSLa7t3Z'
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





