'use strict';

describe('Service: hearthApi', function () {

  // load the service's module
  beforeEach(module('hearthifyApp'));

  // instantiate service
  var hearthApi;
  beforeEach(inject(function (_hearthApi_) {
    hearthApi = _hearthApi_;
  }));

  it('should do something', function () {
    //expect(!!hearthApi).toBe(true);
  });

});
