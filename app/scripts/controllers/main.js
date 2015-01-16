'use strict';
/**
 * @ngdoc function
 * @name hpday1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hpday1App
 */
angular.module('hpday1App')
  .controller('MainCtrl', ['$scope', '$routeParams', 'cheapPrice', 'printersService', '$q', function ($scope, $routeParams, cheapPrice, printersService, $q) {
    $scope.newPrinter = {};
    $scope.checkValidName = function() {
      if(!$scope.newPrinter.name) {
        window.alert('NAME please!');
      }
    }


    var rates = [
    {
      name: 'EUR',
      rate: 4.2
    },{
      name: 'USD',
      rate: 3.5
    }
    ];
    $scope.rates = rates;

    $scope.displayCurrency = function() {
      console.log($scope.currencyName);
    }

    $scope.verifyPriceIsNumber = function() {
      console.log($scope.newPrinter.oldPrice);
      if(isNaN(parseFloat($scope.newPrinter.oldPrice))) {
        window.alert('Number not valid');
      }
    }
    var printersLoaded = printersService.loadPrinters().then(function(data) {
      return data;
    }, function(err) {
      if(err.status === 1) {
        window.alert(err.message);
      } else if(err.status === 2) {
        window.alert('No internet');
      } else {
        window.alert('gfdfdgd');
      }
    });
    $q.all([cheapPrice.getPrinterPrice(), printersLoaded]).then(function(results) {
      var price = results[0];
      var printers = results[1];
      _.each(printers, function(item, i) {
        item.isCheap = item.newPrice < price;
        item.classes = {cheap: item.isCheap};
      });
      $scope.printerList = printers;
    });

    $scope.toggleDetails = function() {
      this.printer.showDetails = !this.printer.showDetails;
      // $scope.printerList[index].showDetails = !$scope.printerList[index].showDetails;
    };

    $scope.remainingText = function(remainingCount) {
      return remainingCount ? 'Add to cart' : 'Out of stock';
    };

    $scope.addNewPrinter = function() {
      $scope.printerList.push($scope.newPrinter);
      $scope.newPrinter = {};
    };
  }]);
