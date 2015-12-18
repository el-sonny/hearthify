'use strict';

/**
 * @ngdoc service
 * @name hearthifyApp.deckService
 * @description
 * # deckService
 * Service in the hearthifyApp.
 */
angular.module('hearthifyApp')
  .service('deckService', Service);


function Service() {
  /* jshint validthis: true */
  var deck = this;

  deck.addCard = addCard;

  deck.cards = [];

  function addCard(card) {
    var index = deck.cards.findIndex(function(_card){
      return _card.cardId === card.cardId;
    });
    if(index <= -1){
      card.count = 1;
      console.log('new card');
      deck.cards.push(card);
    }else{
      deck.cards[index].count += 1;
    }
  }

  function clearCards(){
    deck.cards = [];
  }

}
