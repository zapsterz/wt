
function bringadogCtrl (authentication){
	
	var vm = this;


	vm.isLoggedIn = authentication.isLoggedIn();

	vm.currentUser = authentication.currentUser();
	

}

angular
	.module('wt')
	.controller('bringadogCtrl', bringadogCtrl);

	