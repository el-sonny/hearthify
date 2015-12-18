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

  function Controller(hearthApi, listService, $scope) {
    /* jshint validthis:true */
    var vm = this;
    vm.getTier = getTier;
    vm.imgLoaded = imgLoaded;
    vm.queryCards = queryCards;
    vm.selectCard = selectCard;

    function getTier() {
      if (vm.selectedCard) {
        var tier = 'Very Bad';
        var value = parseInt(vm.selectedCard.value);
        var tiers = [
          {label:'Amazing',thresh:90,color:'Indigo'},
          {label:'Great',thresh:80,color:'Green'},
          {label:'Good',thresh:70,color:'Olive'},
          {label:'Above Average',thresh:60,color:'Khaki'},
          {label:'Average',thresh:50,color:'Gold'},
          {label:'Below Average',thresh:40,color:'Orange'},
          {label:'Bad',thresh:30,color:'OrangeRed'},
          {label:'Terrible',thresh:0,color:'Red'},
        ];

        var tier = tiers.find(function(tier,index){
          if(index){
            return value >= tier.thresh && value < tiers[index-1].thresh;
          }else{
            return value >= tier.thresh;
          }
        });

        return tier;

      }

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
      listService.checkCard(card, 'hearth-arena', 'druid').then(function(result) {
        if (result) {
          vm.selectedCard.value = result[1];
        } else {
          vm.selectedCard.value = 'no rank found';
        }
      });
    }
  }
}
