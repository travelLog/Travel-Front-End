let config = function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
       views: {
        content: {       
          controller: 'HomeController',
          templateUrl: 'templates/home.tpl.html'
        }
      }
    })
    .state('root.log', {
      url: '/log',
      views: {
        content: {       
          controller: 'LogController',
          templateUrl: 'templates/log.tpl.html'
        }
      }
    })
    .state('root.traveler', {
      url: '/traveler',
      views: {
        content: {       
          controller: 'TravelerController',
          templateUrl: 'templates/traveler.tpl.html'
        }
      }
    })
    .state('root.location', {
      url: '/location',
      views: {
        content: {       
          controller: 'LocationController',
          templateUrl: 'templates/location.tpl.html'
        }
      }
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;