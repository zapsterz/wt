
function pageHeader () {
    	return {
    		//restrict: 'EA',
    		templateUrl: '/directives/pageHeader/pageHeader.template.html',
    		controller: 'pageHeaderCtrl as phvm'
    	};
    }

 angular
 	.module('wt')
 	.directive('pageHeader', pageHeader);
