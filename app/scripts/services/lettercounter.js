'use strict';

/**
 * @ngdoc service
 * @name hpday1App.letterCounter
 * @description
 * # letterCounter
 * Service in the hpday1App.
 */
angular.module('hpday1App')
  .provider('letterCounter', function() {
    var vowelsList = ['a', 'e', 'i', 'o', 'u'];

    this.setVowels = function(arr) {
      vowelsList = arr;
    };

    this.sayHi = function() {
      console.debug('Hi!');
    }

    this.$get = function () {

      function countVowels(s) {
        s = s.toLowerCase();
        var count = 0;
        _.each(s, function(letter) {
          if(_.contains(vowelsList, letter)) {
            count++;
          }
        });
        return count;
      }
      return {
        words: ['hello', 'world'],
        countVowels: countVowels
      };
    }

});

