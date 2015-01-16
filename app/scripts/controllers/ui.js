'use strict';

/**
 * @ngdoc function
 * @name hpday1App.controller:UiCtrl
 * @description
 * # UiCtrl
 * Controller of the hpday1App
 */
angular.module('hpday1App')
  .controller('UiCtrl', function ($scope, mapsService) {
    $scope.getCities = function(q) {
      $scope.loadingCities = true;
      return mapsService.getCities(q).finally(function() {
        $scope.loadingCities = false;
      });
    }

    $scope.citySelected = function(model) {
      mapsService.getWeather(model).then(function(weather) {
        $scope.weather = weather;
      });
    };
  });
