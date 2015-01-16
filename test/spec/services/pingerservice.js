'use strict';

describe('Service: pingerService', function () {

  // load the service's module
  beforeEach(module('hpday1App'));

  // instantiate service
  var pingerService;
  beforeEach(inject(function (_pingerService_) {
    pingerService = _pingerService_;
  }));

  it('should do something', function () {
    expect(!!pingerService).toBe(true);
  });

});
