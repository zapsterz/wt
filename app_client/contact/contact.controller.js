angular
	.module('wt')
	.controller('contactCtrl', contactCtrl);
	
function contactCtrl (){
	
	var vm = this;
	vm.pageHeader = {
		title: 'Lesson Plans',
		inst: 'Here\'s how it works'
	};
	
}
	