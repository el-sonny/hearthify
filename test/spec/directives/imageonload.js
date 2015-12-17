'use strict';

describe('Directive: imageonload', function () {

  // load the directive's module
  beforeEach(module('hearthifyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<imageonload></imageonload>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imageonload directive');
  }));
});
