'use strict';

describe('Service: countriesService', function () {

  // load the service's module
  beforeEach(module('hpday1App'));

  // instantiate service
  var countriesService;
  beforeEach(inject(function (_countriesService_) {
    countriesService = _countriesService_;
  }));

  it('should do something', function () {
    expect(!!countriesService).toBe(true);
  });

});
