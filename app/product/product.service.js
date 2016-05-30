(function() {
  'use strict';

  angular
    .module('product')
    .service('ProductService', ProductService);

  ProductService.$inject = ['$http'];

  function ProductService($http) {

  	this.findAllProduct = function(){
  	  return $http.get('product/json/product.json');
  	}
  }
})();