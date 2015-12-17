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
  vm.title = 'Controller';
  vm.queryCards = queryCards;
  vm.selectCard = selectCard;
  vm.imgLoaded = imgLoaded;

  activate();

  function activate() {
    hearthApi.getInfo();

  }
  function imgLoaded(){
    vm.imgIsLoaded = true;
  }

  function queryCards(query) {
    return hearthApi.search(query);
  }

  function selectCard(card){
    vm.imgIsLoaded = false;
    vm.selectedCard = card;
  }
}
