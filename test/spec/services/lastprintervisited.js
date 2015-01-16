'use strict';

describe('Service: lastPrinterVisited', function () {

  // load the service's module
  beforeEach(module('hpday1App'));

  // instantiate service
  var lastPrinterVisited;
  beforeEach(inject(function (_lastPrinterVisited_) {
    lastPrinterVisited = _lastPrinterVisited_;
  }));

  it('should do something', function () {
    expect(!!lastPrinterVisited).toBe(true);
  });

});
