'use strict';

/**
 * @ngdoc function
 * @name hpday1App.controller:CountriesCtrl
 * @description
 * # CountriesCtrl
 * Controller of the hpday1App
 */
angular.module('hpday1App')
  .controller('CountriesCtrl', function ($scope, countriesService) {
    countriesService.loadCountries().then(function(countries) {
      $scope.countries = countries;
    });

    $scope.countrySelected = function() {
      $scope.cities = $scope.countries[$scope.selectedCountry];
    };

    $scope.visitedCities = [];

    $scope.addCity = function(index) {
      var city = $scope.selectedCity;
      var country = $scope.selectedCountry;
      $scope.countries[country] = _.without($scope.countries[country], city);
      $scope.cities = $scope.countries[$scope.selectedCountry];
      $scope.selectedCountry = '';
      if($scope.countries[country].length === 0) {
        delete $scope.countries[country];
      }
      $scope.visitedCities.push(city + ' (' + country + ')');
    };
  });
