(function() {
  
  angular
    .module('product',[])
    .config(Config);

    Config.$inject = ['$routeProvider'];

    function Config($routeProvider) {
      $routeProvider
        .when('/products', {
        	templateUrl: 'product/products.html',
        	controller: 'ProductsController as vm'
        })
        .when('/product/:productId', {
          templateUrl: 'product/productDetail.html',
          controller: 'ProductDetailController as vm',
        });
    }
})();