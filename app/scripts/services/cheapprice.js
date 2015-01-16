'use strict';

/**
 * @ngdoc service
 * @name hpday1App.cheapPrice
 * @description
 * # cheapPrice
 * Service in the hpday1App.
 */
angular.module('hpday1App.printers', [])
  .value('printers.statusCode',{
    INVALID_ID: 1,
    OUTDATED_PRINTER: 2
  })
  .factory('cheapPrice', function($http, $q) {
    return {
      getPrinterPrice: function() {
        return $q.when($http.get('/prices.json').then(function(res) {
          return res.data.printers;
        }));
        return $q.when(localStorage.getItem('printerPrice'));
      },
      getPrices: function() {
        return $http.get('http://').then(function(res){
          return res.data;
        });
      }
    }
  }).value('currencyEvents', {
    CURRENCY_CHANGE: 'currencychange',
    CURRENCY_CHANGE_UP: 'currencychangeup'
  });
