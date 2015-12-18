'use strict';

/**
 * @ngdoc directive
 * @name hearthifyApp.directive:cardSearch
 * @description
 * # cardSearch
 */
angular.module('hearthifyApp')
  .directive('cardSearch', cardSearch);


function cardSearch() {
  return {
    bindToController: true,
    controller: Controller,
    controllerAs: 'vm',
    link: link,
    restrict: 'EA',
    scope: {
      chooseCard: '&',
      selectedCard : '=',
      searchText : '=',
      tabIndex : '=',
    },
    templateUrl: 'views/card-search.html'
  };

  function link(scope, element, attrs) {}

  function Controller(hearthApi, listService, $scope) {
    /* jshint validthis:true */
    var vm = this;
    vm.activate = activate;
    vm.getTier = getTier;
    vm.imgLoaded = imgLoaded;
    vm.queryCards = queryCards;
    vm.selectCard = selectCard;

    vm.tierList = 'hearth-arena';

    activate();

    function activate(){

    }

    function getTier() {
      if (vm.selectedCard) {
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

        return tiers.find(function(tier,index){
          if(index){
            return value >= tier.thresh && value < tiers[index-1].thresh;
          }else{
            return value >= tier.thresh;
          }
        });

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
      listService.checkCard(card, vm.tierList).then(function(result) {
        if (result) {
          vm.selectedCard.value = result[1];
        } else {
          vm.selectedCard.value = 'n/a';
        }
      });
    }
  }
}
