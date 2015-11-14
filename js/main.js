import angular from 'angular';
import 'angular-ui-router';
import HomeController from './controllers/home.controller';
import LogController from './controllers/log.controller';
import TravellerController from './controllers/traveller.controller';

angular
  .module('app', ['ui-router']);
