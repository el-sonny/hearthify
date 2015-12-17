'use strict';

/**
 * @ngdoc directive
 * @name hearthifyApp.directive:cardSearch
 * @description
 * # cardSearch
 */
angular.module('hearthifyApp')
  .directive('cardSearch', directive);


function directive() {
  return {
    bindToController: true,
    controller: Controller,
    controllerAs: 'vm',
    link: link,
    restrict: 'A',
    scope: {},
    templateUrl: 'views/card-search.html'
  };

  function link(scope, element, attrs) {}

  function Controller(hearthApi,$scope) {
    /* jshint validthis:true */
    var vm = this;
    vm.queryCards = queryCards;
    vm.selectCard = selectCard;
    vm.imgLoaded = imgLoaded;

    activate();

    function activate() {
      hearthApi.getInfo();
    }

    function imgLoaded() {
      vm.imgIsLoaded = true;
      $scope.$apply();
    }

    function queryCards(query) {
      return hearthApi.search(query);
    }

    function selectCard(card) {
      vm.imgIsLoaded = false;
      vm.selectedCard = card;
    }
  }
}
