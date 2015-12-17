'use strict';

/**
 * @ngdoc directive
 * @name hearthifyApp.directive:imageonload
 * @description
 * # imageonload
 */
angular.module('hearthifyApp')
  .directive('imageonload', directive);

//directive.$inject = ['dependencies'];

/* @ngInject */
function directive() {
  // Usage:
  //
  // Creates:
  //
  return {
    link: link,
    restrict: 'A',
    scope: {
      loaded: '&'
    }
  };

  function link(scope, element, attrs) {

    element.bind('load', function() {
      scope.loaded();
    });
  }
}
