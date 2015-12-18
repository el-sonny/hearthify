'use strict';

/**
 * @ngdoc directive
 * @name hearthifyApp.directive:imageonload
 * @description
 * # imageonload
 */
angular.module('hearthifyApp')
  .directive('imageonload', imageonload);

//imageonload.$inject = ['dependencies'];

/* @ngInject */
function imageonload() {
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
