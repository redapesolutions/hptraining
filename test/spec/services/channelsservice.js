'use strict';

describe('Service: channelsService', function () {

  // load the service's module
  beforeEach(module('hpday1App'));

  // instantiate service
  var channelsService;
  beforeEach(inject(function (_channelsService_) {
    channelsService = _channelsService_;
  }));

  it('should do something', function () {
    expect(!!channelsService).toBe(true);
  });

});
