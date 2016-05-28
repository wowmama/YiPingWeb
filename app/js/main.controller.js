(function(){
	angular.module('yipingApp').controller('MainController',mainController);
	
	function mainController($location){
		var vm = this;
		vm.orderSystemClick = function(){
			$location.path("/orders");
		}
		vm.productSystemClick = function(){
			$location.path("/products");
		}
		vm.stockSystemClick = function(){
			$location.path("/stocks");
		}
	}
})();

