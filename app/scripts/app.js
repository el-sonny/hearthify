'use strict';

/**
 * @ngdoc overview
 * @name hearthifyApp
 * @description
 * # hearthifyApp
 *
 * Main module of the application.
 */
angular
  .module('hearthifyApp', [
    'ngAnimate',
    'ngAria',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
