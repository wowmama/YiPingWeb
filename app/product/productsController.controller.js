(function() {
  'use strict';

  angular
    .module('product')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['ProductService'];

  function ProductsController(ProductService) {
    var vm = this;

    ProductService
      .findAllProduct()
      .then(function(res){
     	console.log(res);
        vm.products = res.data;
      });
  }
})();