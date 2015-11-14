import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import HomeController from './controllers/home.controller';
import LogController from './controllers/log.controller';
import TravelerController from './controllers/traveler.controller';
import LocationController from './controllers/location.controller';

angular
  .module('app', ['ui.router'])
  .constant('PARSE', {
    URL: "https://api.parse.com/1/",
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'RUI0eVrObvApF6FDocHgEsvLfFkixKB1lVN9bO9k',
        'X-Parse-REST-API-Key': 'TJduuakbFPVCAyNbAFqWyXfBej9oMilyvM0gZWzx'
      }
    }
  })
  .config(config)
  .controller('HomeController', HomeController)
  .controller('LogController', LogController)
  .controller('TravelerController', TravelerController)
  .controller('LocationController', LocationController)

  //.service('ContactService', ContactService)
  //.service('AboutService', AboutService)
;





