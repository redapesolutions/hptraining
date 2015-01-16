'use strict';

describe('Service: mapsservice', function () {

  // load the service's module
  beforeEach(module('hpday1App'));

  // instantiate service
  var mapsservice;
  beforeEach(inject(function (_mapsservice_) {
    mapsservice = _mapsservice_;
  }));

  it('should do something', function () {
    expect(!!mapsservice).toBe(true);
  });

});
