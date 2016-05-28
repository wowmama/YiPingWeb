(function(){
	angular.module('yipingApp',['ngRoute']);
	angular.module('yipingApp').config(setConfig);
	
	function setConfig($routeProvider){
		$routeProvider
		.when('/orders',{
			templateUrl : 'order/order-list.html',
			controller : 'OrderController as orderCtr'
		})
		.when('/products',{
			templateUrl : 'product/product-list.html',
//			controller : 'ProductController'
		})
		.when('/stocks',{
			templateUrl : 'stock/stock-list.html',
//			controller : 'StockController'
		})
		.otherwise({
			redirectTo : '/orders'
		});
	}
})();