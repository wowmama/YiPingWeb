(function() {
	'use strict';
	angular
	  .module('app')
	  .controller('MainController', MainController);

	MainController.$inject = ['$mdSidenav'];

	function MainController($mdSidenav) {


	  var vm = this;
	  vm.openLeftNav = openLeftNav;
	  vm.closeLeftNav = closeLeftNav;





	  function openLeftNav() {
	  	$mdSidenav('left').open();
	  	console.log('hihi');
	  }
	  function closeLeftNav() {
	  	$mdSidenav('left').close();
	  }
	}

})();