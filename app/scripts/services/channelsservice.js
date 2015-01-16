'use strict';

/**
 * @ngdoc service
 * @name hpday1App.channelsService
 * @description
 * # channelsService
 * Service in the hpday1App.
 */
angular.module('hpday1App')
  .service('channelsService', function ($http) {
    this.loadChannels = function() {
      return $http.jsonp('http://api-epg.astro.com.my/api/pack/?showall=yes&format=jsonp&callback=JSON_CALLBACK').then(function(res) {
        return res.data.services;
      });
    }
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
