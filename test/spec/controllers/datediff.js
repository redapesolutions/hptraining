'use strict';

describe('Controller: DatediffCtrl', function () {

  // load the controller's module
  beforeEach(module('hpday1App'));

  var DatediffCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatediffCtrl = $controller('DatediffCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
