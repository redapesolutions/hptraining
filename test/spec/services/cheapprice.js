'use strict';

describe('Service: cheapPrice', function () {

  // load the service's module
  beforeEach(module('hpday1App'));

  // instantiate service
  var cheapPrice;
  beforeEach(inject(function (_cheapPrice_) {
    cheapPrice = _cheapPrice_;
  }));

  it('should do something', function () {
    expect(!!cheapPrice).toBe(true);
  });

});
