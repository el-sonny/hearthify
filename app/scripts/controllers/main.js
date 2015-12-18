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

function mainCtrl(deckService, hearthApi, listService, playerClassService) {
  /* jshint validthis:true */
  var vm = this;

  vm.activate = activate;
  vm.openMenu = openMenu;
  vm.chooseCard = chooseCard;
  vm.getClassSrc = getClassSrc;
  vm.selectClass = selectClass;
  vm.setClasses = setClasses;

  vm.info = {};
  vm.searchSlots = [];
  vm.selectedClass = listService.playerClass;
  vm.deck = deckService.cards;


  activate();

  function activate() {
    vm.setClasses();
    vm.searchSlots = [{
      index: 1
    }, {
      index: 2
    }, {
      index: 3
    }];
  }

  function openMenu($mdOpenMenu, ev) {
    $mdOpenMenu(ev);
  }

  function chooseCard(card) {
    deckService.addCard(card);
    //console.log(vm.deck);

    vm.searchSlots = vm.searchSlots.map(function(slot) {
      slot.selected = false;
      slot.searchText = null;
      return slot;
    });
  }

  function getClassSrc(_class){
    return '/images/player-classes/'+_class+'.jpg';
  }

  function selectClass(_class) {
    vm.selectedClass = _class;
    listService.playerClass = _class;
  }

  function setClasses() {
    vm.classes = playerClassService.classes;
    return vm.classes;
  }

}
