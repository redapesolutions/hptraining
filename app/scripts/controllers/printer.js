'use strict';

/**
 * @ngdoc function
 * @name hpday1App.controller:PrinterCtrl
 * @description
 * # PrinterCtrl
 * Controller of the hpday1App
 */
angular.module('hpday1App')
  .controller('PrinterCtrl', function ($scope, $routeParams) {
    var id = parseInt($routeParams.id, 10);
    var printerList = [
      {
        image: 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c03956420.png',
        name: 'HP Officejet Pro 8610 e-All-in-One Printer',
        oldPrice: 199.99,
        newPrice: 129.99,
        remaining: 2,
        id: 5,
        details: '<p>Super <b>awesome</b><iframe src="www.google.com"></iframe> printer</p>'
      },
      {
        image: 'http://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c04385631.png',
        name: 'HP ENVY 7640 e-All-in-One Printer',
        id: 42,
        oldPrice: 199.99,
        newPrice: 149.99,
        remaining: 0,
        details: 'Even awesomer printer'
      },
    ];

    $scope.printer = _.find(printerList, function correctId(item) {
      return id === item.id;
    });
  });
