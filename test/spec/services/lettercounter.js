'use strict';

describe('Service: letterCounter', function () {

  // load the service's module
  beforeEach(module('hpday1App'));

  // instantiate service
  var letterCounter;
  beforeEach(inject(function (_letterCounter_) {
    letterCounter = _letterCounter_;
  }));

  it('should do something', function () {
    expect(!!letterCounter).toBe(true);
  });

});
