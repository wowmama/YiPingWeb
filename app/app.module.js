(function() {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });

  angular
    .module('app',['ngRoute'])
    .config(Config);

  Config.$inject = ['$routeProvider', '$httpProvider'];
  function Config($routeProvider, $httpProvider) {

  }

})();