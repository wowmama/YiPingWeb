(function(){
	angular.module('yipingApp').controller('OrderController',orderController);
	
	function orderController($location,OrderService){
		var vm = this;
		vm.orderList = OrderService.findOrderAll();
		
	}
})();

