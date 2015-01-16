'use strict';

/**
 * @ngdoc service
 * @name hpday1App.mapsservice
 * @description
 * # mapsservice
 * Service in the hpday1App.
 */
angular.module('hpday1App')
  .service('mapsService', function ($http) {
    var apiUrl = _.template('http://gd.geobytes.com/AutoCompleteCity?callback=JSON_CALLBACK&filter=MY&q=<%= query %>');
    this.getCities = function(q) {
      var url = apiUrl({
        query: q
      });
      return $http.jsonp(url).then(function(res) {
        return res.data;
      });
    };

    this.getWeather = function(city) {
      var url = 'http://api.worldweatheronline.com/free/v1/weather.ashx?format=json&num_of_days=1&key=867c357868cd2680bceac88d6722bcf4e504f555';
      return $http.get(url, {
        params: {
          q: city
        }
      }).then(function(res) {
        return res.data.data.current_condition[0].weatherDesc[0].value;
      });
    }
  });
