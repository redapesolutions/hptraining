'use strict';

describe('Controller: CurrencyctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('hpday1App'));

  var CurrencyctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CurrencyctrlCtrl = $controller('CurrencyctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
