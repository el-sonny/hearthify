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

function mainCtrl(deckService, hearthApi, listService) {
  /* jshint validthis:true */
  var vm = this;

  vm.activate = activate;
  vm.openMenu = openMenu;
  vm.chooseCard = chooseCard;
  vm.selectClass = selectClass;
  vm.setInfo = setInfo;

  vm.info = {};
  vm.searchSlots = [];
  vm.selectedClass = listService.playerClass;
  vm.deck = deckService.cards;

  activate();

  function activate() {
    vm.setInfo();
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

  function selectClass(_class) {
    vm.selectedClass = _class;
    listService.playerClass = _class;
  }

  function setInfo() {
    vm.info = {
      classes: ['Druid', 'Hunter', 'Mage', 'Paladin', 'Priest', 'Rogue', 'Shaman', 'Warlock', 'Warrior']
    };
    return vm.info;
  }

}
