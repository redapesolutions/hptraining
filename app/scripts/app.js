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
    'ui.bootstrap.typeahead',
    'ui.bootstrap.datepicker',
    'ui.bootstrap.timepicker',
    'ui.bootstrap.progressbar',
    'youtube-embed'
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
      .when('/ui', {
        templateUrl: 'views/ui.html',
        controller: 'UiCtrl'
      })
      .when('/datediff', {
        templateUrl: 'views/datediff.html',
        controller: 'DatediffCtrl'
      })
      .when('/progressbar', {
        templateUrl: 'views/progressbar.html',
        controller: 'ProgressbarCtrl'
      })
      .when('/video', {
        templateUrl: 'views/video.html',
        controller: 'VideoCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(pingerService) {
    pingerService.start();
  });
