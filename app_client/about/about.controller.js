angular
	.module('wt')
	.controller('aboutCtrl', aboutCtrl);
	
function aboutCtrl (){
	
	var vm = this;
	vm.pageHeader = {
		title: 'Lesson Plans',
		inst: 'Here\'s how it works'
	};

	//vm.isLoggedIn = authentication.isLoggedIn();

	//vm.currentUser = authentication.currentUser();
	
}
	