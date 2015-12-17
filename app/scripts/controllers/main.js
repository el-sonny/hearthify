'use strict';

/**
 * @ngdoc function
 * @name ctbookApp.controller:ContratoCtrl
 * @description
 * # ContratoCtrl
 * Controller of the ctbookApp
 */
angular.module('hearthifyApp')
  .controller('MainCtrl', mainCtrl);

function mainCtrl() {
  /* jshint validthis: true */
  var vm = this;

  vm.load = load;

  vm.load();

  function load() {

  }


}
