(function() {
  // angular.element(document).ready(function () {
  //   angular.bootstrap(document, ['app']);
  // });

  angular
    .module('app',['ngRoute', 'ngMaterial', 'product', 'md.data.table', 'ng-mfb'])
    .config(Config);

  Config.$inject = ['$routeProvider', '$httpProvider', '$mdThemingProvider'];
  function Config($routeProvider, $httpProvider, $mdThemingProvider) {
  	$routeProvider.otherwise('/products');
    
    $mdThemingProvider
      .theme('default')
    //   .primaryPalette('red', {
    //   'default': '400', // by default use shade 400 from the pink palette for primary intentions
    //   'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
    //   'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
    //   'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
    // })
  }

})();
