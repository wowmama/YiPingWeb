(function(){
	angular.module('yipingApp').service('OrderService',OrderService);
	
	function OrderService($http){
		var vm = this;
		vm.findOrderAll = function(){
			var result;
			$http({
				method : "GET",
				url : "http://127.0.0.1:8081/YinPingServer/orders/"
			}).then(function succes(response){
				result = response.data;
			});
			
			return result;
		}
	}
})();

