
function donateCtrl (authentication){
	
	var vm = this;


	vm.isLoggedIn = authentication.isLoggedIn();

	vm.currentUser = authentication.currentUser();
	

}

angular
	.module('wt')
	.controller('donateCtrl', donateCtrl);

	