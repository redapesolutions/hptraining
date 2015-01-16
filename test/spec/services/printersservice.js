'use strict';

describe('Service: printersService', function () {

  // load the service's module
  beforeEach(module('hpday1App'));

  // instantiate service
  var printersService;
  beforeEach(inject(function (_printersService_) {
    printersService = _printersService_;
  }));

  it('should do something', function () {
    expect(!!printersService).toBe(true);
  });

});
