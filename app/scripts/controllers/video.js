'use strict';

/**
 * @ngdoc function
 * @name hpday1App.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the hpday1App
 */
angular.module('hpday1App')
  .controller('VideoCtrl', function ($scope) {
    $scope.videoId = 'EidIVpUBO3Y';
    $scope.$on('youtube.player.playing', function (e, player) {
      $scope.$root.$broadcast('player.isPlaying', player);
    });
    $scope.$on('youtube.player.paused', function (e, player) {
      $scope.$root.$broadcast('player.isPaused', player);
    });
  }).controller('AdController', function ($scope) {

  }).controller('VideoStateController', function ($scope) {
    $scope.status = 'Waiting';
    $scope.$on('player.isPlaying', function(e, player) {
      $scope.status = 'Playing';
    });
    $scope.$on('player.isPaused', function(e, player) {
      $scope.status = 'Paused at ' + player.getCurrentTime();
    });
  });
