'use strict';

/**
 * @ngdoc function
 * @name hpday1App.controller:DatediffCtrl
 * @description
 * # DatediffCtrl
 * Controller of the hpday1App
 */
angular.module('hpday1App')
  .controller('DatediffCtrl', function ($scope) {
    // Initialize dates
    $scope.leftDate = moment().toDate();
    $scope.rightDate = moment().add(1, 'd').toDate();
    $scope.units = ['seconds', 'minutes', 'hours', 'days', 'weeks', 'months', 'years'];
    $scope.unit = $scope.units[0];

    // Will be called when unit or date changes
    $scope.checkDiff = function checkDiff() {
      var left = moment($scope.leftDate);
      var right = moment($scope.rightDate);
      // Avoid negative values
      if(left.isAfter(right)) {
        var diff = left - right;
      } else {
        var diff = right - left;
      }
      // Use moment's duration object
      diff = moment.duration(diff);
      $scope.diff = Math.round(diff.as($scope.unit));
    }
  });
