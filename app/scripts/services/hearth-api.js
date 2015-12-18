'use strict';

/**
 * @ngdoc service
 * @name hearthifyApp.hearthApi
 * @description
 * # hearthApi
 * Service in the hearthifyApp.
 */
angular
  .module('hearthifyApp')
  .service('hearthApi', hearthApi);

function hearthApi(Restangular, $q) {
  /* jshint validthis: true */
  var service = this;

  service.getAllCards = getAllCards;
  service.getInfo = getInfo;
  service.search = search;
  service.setCards = setCards;
  service.setInfo = setInfo;

  service.cards = {};
  service.info = {};

  function getAllCards() {
    return Restangular.all('cards').getList().then(setCards);
  }

  function getInfo() {
    return Restangular.one('info').get().then(setInfo);
  }

  function search(query,filters) {
    return Restangular.one('cards', 'search').getList(query,{collectible:1});
  }

  function setCards(cards) {
    service.cards = cards;
    return cards;
  }

  function setInfo(info) {
    service.info = info;
    return info;
  }

  Restangular.setErrorInterceptor(function(response,deferred) {
    if (response.status === 404) {
      deferred.resolve([]);
    }
  });

}
