
function pageFooter () {
    	return {
    		//restrict: 'EA',
    		templateUrl: '/directives/pageFooter/pageFooter.template.html'
    		
    	};
    }

 angular
 	.module('wt')
 	.directive('pageFooter', pageFooter);
