(function() {
  'use strict';

  angular
    .module('product')
    .controller('ProductsController', ProductsController);

  ProductsController.$inject = ['ProductService'];

  function ProductsController(ProductService) {
    var vm = this;
    vm.selected = [];
    vm.query = {
      order: 'product100Id',
      limit: 10,
      page: 1,
    };
    vm.onProductSelected = onProductSelected;

    ProductService
      .findAllProduct()
      .then(function(res){
        console.log(res);
        vm.products = res.data;
      });

    function onProductSelected(product) {
      vm.selected = [];
      vm.selected.push(product);
    }
  }
})();