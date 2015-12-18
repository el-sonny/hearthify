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

function mainCtrl(hearthApi,listService) {
  /* jshint validthis:true */
  var vm = this;

  vm.activate = activate;


  activate();

  function activate(){
  }

}
