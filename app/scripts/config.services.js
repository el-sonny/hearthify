angular
  .module('hearthifyApp')
  .config(function(RestangularProvider) {
    RestangularProvider.setDefaultHeaders({
      'X-Mashape-Key': 'VzmtuqVrkimshv2u8P4w9f9DUFtgp1SOM1ejsneCCd1lVJuVEM'
    });
    RestangularProvider.setBaseUrl('https://omgvamp-hearthstone-v1.p.mashape.com/');
  });
