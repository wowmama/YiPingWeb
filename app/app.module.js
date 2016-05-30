(function() {
  angular.element(document).ready(function () {
    angular.bootstrap(document, ['app']);
  });

  angular
    .module('app',['ngRoute', 'ngMaterial'])
    .config(Config);

  Config.$inject = ['$routeProvider', '$httpProvider', '$mdThemingProvider'];
  function Config($routeProvider, $httpProvider, $mdThemingProvider) {
    $mdThemingProvider
      .theme('default')
      .dark();
  }

})();
