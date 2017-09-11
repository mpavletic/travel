angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $httpProvider.defaults.withCredentials = true;

  $stateProvider
    .state('app', {
      url: '/',
      component: 'login'
    })
    .state('hotels', {
      url: '/hotels',
      component: 'hotelList'
    });
}
