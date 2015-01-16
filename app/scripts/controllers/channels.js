'use strict';

/**
 * @ngdoc function
 * @name hpday1App.controller:ChannelsCtrl
 * @description
 * # ChannelsCtrl
 * Controller of the hpday1App
 */
angular.module('hpday1App')
  .controller('ChannelsCtrl', function ($scope, channelsService) {
    channelsService.loadChannels().then(function(data) {
      $scope.channels = data;
    });

  });
