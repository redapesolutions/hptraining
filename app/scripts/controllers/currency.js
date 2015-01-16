'use strict';

/**
 * @ngdoc function
 * @name hpday1App.controller:CurrencyctrlCtrl
 * @description
 * # CurrencyctrlCtrl
 * Controller of the hpday1App
 */
angular.module('hpday1App')
  .controller('CurrencyCtrl', function ($scope, $rootScope, currencyEvents) {
    $scope.$on('ping', function(e, duration) {
      $scope.duration = duration / 1000;
    });
    $scope.$watch('selectedCurrency', function(nv, ov) {
      if(nv !== ov){
        currencyChanged();
      }
    });
    $scope.selectedCurrency = parseFloat(localStorage.getItem('rate')) || 1;
    var rates = {
      'EUR': 4.2,
      'USD': 3.5,
      'RM': 1
    };
    $scope.currencies = rates;
    function currencyChanged() {
      localStorage.setItem('rate', $scope.selectedCurrency);
      $scope.$root.$emit(currencyEvents.CURRENCY_CHANGE_UP, $scope.selectedCurrency);
    };
  });
