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

function mainCtrl(hearthApi) {
  /* jshint validthis:true */
  var vm = this;

  vm.activate = activate;
  vm.openMenu = openMenu;
  vm.selectClass = selectClass;
  vm.setInfo = setInfo;

  vm.info = {};
  vm.selectedClass = 'Druid';


  activate();

  function activate() {
    hearthApi.getInfo().then(setInfo);
  }

  function openMenu($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  }

  function selectClass(_class){
    vm.selectedClass = _class;
  }
  function setInfo(info) {
    vm.info = info;
    return info;
  }

}
