'use strict';

/**
 * @ngdoc service
 * @name hearthifyApp.listService
 * @description
 * # listService
 * Service in the hearthifyApp.
 */
angular.module('hearthifyApp')
  .service('listService', Service);

function Service($http, $q) {
  /* jshint validthis: true */
  var service = this;

  service.activate = activate;
  service.checkCard = checkCard;
  service.loadList = loadList;

  service.lists = {};
  activate();

  function activate() {
    service.lists = {
      'hearth-arena': {
        'Druid': [],
        'Shaman' : []
      }
    };
  }

  function checkCard(card,source,_class){
    var deferred = $q.defer();
    var list = service.lists[source][_class];
    if(!list.length){
      service.loadList(source,_class).then(function(){
        var result = service.checkCard(card,source,_class);
        deferred.resolve(result);
      });
    }else if(card){
      var result = list.find(function(row){
        return row[0] === card.name;
      });
      deferred.resolve(result);
    }else{
      deferred.reject();
    }
    return deferred.promise;

  }

  function loadList(source, _class) {
    var deferred = $q.defer();
    if (!service.lists[source][_class].length) {
      $http.get('lists/' + source + '/' + _class + '.csv').then(function(res) {
        var list = Papa.parse(res.data).data;
        service.lists[source][_class] = list;
        deferred.resolve(list);
      });
    } else {
      deferred.resolve(service.lists[source][_class]);
    }
    return deferred.promise;
  }
}
