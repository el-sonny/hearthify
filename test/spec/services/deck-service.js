'use strict';

describe('Service: deckService', function () {

  // load the service's module
  beforeEach(module('hearthifyApp'));

  // instantiate service
  var deckService;
  beforeEach(inject(function (_deckService_) {
    deckService = _deckService_;
  }));

  it('should do something', function () {
    expect(!!deckService).toBe(true);
  });

});
