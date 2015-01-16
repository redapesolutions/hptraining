'use strict';

/**
 * @ngdoc service
 * @name hpday1App.printersService
 * @description
 * # printersService
 * Service in the hpday1App.
 */
angular.module('hpday1App')
  .factory('printersService', function ($http, $q, cheapPrice) {
    return {
      loadPrinters: function() {
        return $http.get('/printers.json').then(function(res) {
          if(res.data.length === 0) {
            return $q.reject({
              status: 1,
              message: 'No data'
            });
          }
          return res.data;
        }, function(res) {
          if(res.status === 404) {
            return '';
          } else {
            return $q.reject({
              status: 5,
              message: 'Unknown'
            })
          }
        });
      }
    };
  });
