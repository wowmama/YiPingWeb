(function() {
  'use strict';
  angular
    .module('myDirective',[])
    .directive('showWhenScroll',['$document',  function($document) {
    	return function(scope, element, attrs) {
    		// var container = angular.element(element);
    		$document.bind('mousemove', function(event) {
    			JQuery('.my-floating-button').hide();
    		});
    	};
    }]);
})();