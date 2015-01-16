'use strict';

describe('Controller: PrinterCtrl', function () {

  // load the controller's module
  beforeEach(module('hpday1App'));

  var PrinterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrinterCtrl = $controller('PrinterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
