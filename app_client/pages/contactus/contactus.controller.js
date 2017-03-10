
function contactusCtrl (authentication,email){
	
	var vm = this;


	vm.isLoggedIn = authentication.isLoggedIn();

	vm.currentUser = authentication.currentUser();
	
	vm.done="notdone";
	
	vm.submit = function(user) {
		// using SendGrid's v3 Node.js Library
		// https://github.com/sendgrid/sendgrid-nodejs
		console.log(vm.user);
		email.sendemail({
			email: vm.user.email,
			name: vm.user.name,
			message: vm.user.message
			})
			.success(function(data){
				vm.done = "yep";
				vm.user="";
			});
		

	}	


}

angular
	.module('wt')
	.controller('contactusCtrl', contactusCtrl);

	