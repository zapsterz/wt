function pageHeaderCtrl($location) {
	var vm = this;
    vm.fgh = "November";
    vm.loc = $location.path();
    vm.l = $location;
    vm.isActive = function (viewLocation){
        console.log($location.path());
        return viewLocation === $location.path();
    }; 
    vm.absUrl = $location.absUrl();
}



angular
    .module('wt')
    .controller('pageHeaderCtrl', pageHeaderCtrl);
