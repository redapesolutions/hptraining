'use strict';

/**
 * @ngdoc function
 * @name hpday1App.controller:ProgressbarCtrl
 * @description
 * # ProgressbarCtrl
 * Controller of the hpday1App
 */
angular.module('hpday1App')
  .controller('ProgressbarCtrl', function ($scope) {
    // Initialize
    $scope.max = 100;
    $scope.dynamic = 50;
    $scope.barType = 'info';

    $scope.valueChanged = function valueChanged() {
      var ratio = $scope.dynamic / $scope.max;
      if(ratio > 1) {
        window.alert('Cant select value higher than max');
        $scope.dynamic = $scope.max;
      }
      if(ratio > 0.8) {
        $scope.barType = 'danger';
      } else {
        $scope.barType = 'info';
      }
    }
  });
