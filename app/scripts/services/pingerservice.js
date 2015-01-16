'use strict';

/**
 * @ngdoc service
 * @name hpday1App.pingerService
 * @description
 * # pingerService
 * Service in the hpday1App.
 */
angular.module('hpday1App')
  .service('pingerService', function ($rootScope, $timeout) {
    var started = false;
    var startTime = new Date();
    this.start = function() {
      started = true;
      this.ping();
    }.bind(this);
    this.ping = function() {
      $rootScope.$broadcast('ping', new Date() - startTime);
      $timeout(this.ping,  (1 + Math.random() * 4)*1000);
    }.bind(this);
  });
