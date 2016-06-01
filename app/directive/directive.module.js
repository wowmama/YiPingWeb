(function() {
  'use strict';
  angular
    .module('myDirective',[])
    .directive('showWhenScroll',['$document',  function($document) {
    	return function(scope, element, attrs) {
    		// var container = angular.element(element);
    		element.on('scroll', function() {
    			alert('scroll');
    		});
    	};
    }]);
})();