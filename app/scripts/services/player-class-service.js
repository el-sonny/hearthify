'use strict';

/**
 * @ngdoc service
 * @name hearthifyApp.playerClassService
 * @description
 * # playerClassService
 * Service in the hearthifyApp.
 */
angular.module('hearthifyApp')
  .service('playerClassService', playerClassService);

function playerClassService() {
  /* jshint validthis: true */
  var service = this;

  service.activate = activate;

  service.classes = [];

  activate();

  function activate() {
    service.classes = [{
      name: 'Druid',
      image: 'images/player-class/Druid.jpg',
    }, {
      name: 'Hunter',
      image: 'images/player-class/Hunter.jpg',
    }, {
      name: 'Mage',
      image: 'images/player-class/Mage.jpg',
    }, {
      name: 'Paladin',
      image: 'images/player-class/Paladin.jpg',
    }, {
      name: 'Priest',
      image: 'images/player-class/Priest.jpg',
    }, {
      name: 'Rogue',
      image: 'images/player-class/Rogue.jpg',
    }, {
      name: 'Shaman',
      image: 'images/player-class/Shaman.jpg',
    }, {
      name: 'Warlock',
      image: 'images/player-class/Warlock.jpg',
    }, {
      name: 'Warrior',
      image: 'images/player-class/Warrior.jpg',
    }];
  }
}
