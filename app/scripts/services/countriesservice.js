'use strict';

/**
 * @ngdoc service
 * @name hpday1App.countriesService
 * @description
 * # countriesService
 * Service in the hpday1App.
 */
angular.module('hpday1App')
  .service('countriesService', function ($http) {
    this.loadCountries = function() {
      return $http.get('/countries.json').then(function(res) {
        return res.data;
      });
    }
  });
