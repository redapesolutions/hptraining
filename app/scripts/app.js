'use strict';

/**
 * @ngdoc overview
 * @name hpday1App
 * @description
 * # hpday1App
 *
 * Main module of the application.
 */
angular
  .module('hpday1App', [
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hpday1App.printers',

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/printer/:id', {
        templateUrl: 'views/printer.html',
        controller: 'PrinterCtrl'
      })
      .when('/channels', {
        templateUrl: 'views/channels.html',
        controller: 'ChannelsCtrl'
      })
      .when('/countries', {
        templateUrl: 'views/countries.html',
        controller: 'CountriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(pingerService) {
    pingerService.start();
  });
