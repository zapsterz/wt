angular.module('wt', ['ngRoute']);

function config ($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'home/home.view.html',
			controller: 'homeCtrl',
			controllerAs: 'vm'
		})
		.when('/home', {
			templateUrl: 'home/home.view.html',
			controller: 'homeCtrl',
			controllerAs: 'vm'
		})
		.when('/whatwedo', {
			templateUrl: 'pages/whatwedo/whatwedo.view.html',
			controller: 'whatwedoCtrl',
			controllerAs: 'vm'
		})
		.when('/whatgoeson',{
			templateUrl: 'pages/whatgoeson/whatgoeson.view.html',
			controller: 'whatgoesonCtrl',
			controllerAs: 'vm'
		})
		.when('/whereandwhen',{
			templateUrl: 'pages/whereandwhen/whereandwhen.view.html',
			controller: 'whereandwhenCtrl',
			controllerAs: 'vm'
		})	
		.when('/successstories',{
			templateUrl: 'pages/successstories/successstories.view.html',
			controller: 'successstoriesCtrl',
			controllerAs: 'vm'
		})				
		.when('/ourdogs',{
			templateUrl: 'pages/ourdogs/ourdogs.view.html',
			controller: 'ourdogsCtrl',
			controllerAs: 'vm'
		})
		.when('/ourvolunteers',{
			templateUrl: 'pages/ourvolunteers/ourvolunteers.view.html',
			controller: 'ourvolunteersCtrl',
			controllerAs: 'vm'
		})
		.when('/oursupporters',{
			templateUrl: 'pages/oursupporters/oursupporters.view.html',
			controller: 'oursupportersCtrl',
			controllerAs: 'vm'
		})
		.when('/becomeavolunteer',{
			templateUrl: 'pages/becomeavolunteer/becomeavolunteer.view.html',
			controller: 'becomeavolunteerCtrl',
			controllerAs: 'vm'
		})
		.when('/bringadog',{
			templateUrl: 'pages/bringadog/bringadog.view.html',
			controller: 'bringadogCtrl',
			controllerAs: 'vm'
		})
		.when('/donate',{
			templateUrl: 'pages/donate/donate.view.html',
			controller: 'donateCtrl',
			controllerAs: 'vm'
		})
		.when('/join',{
			templateUrl: 'pages/applytojoin/applytojoin.view.html',
			controller: 'joinCtrl',
			controllerAs: 'vm'
		})
		.when('/fees',{
			templateUrl: 'pages/fees/fees.view.html',
			controller: 'feesCtrl',
			controllerAs: 'vm'
		})
		.when('/forms',{
			templateUrl: 'pages/forms/forms.view.html',
			controller: 'formsCtrl',
			controllerAs: 'vm'
		})	
		.when('/contactus',{
			templateUrl: 'pages/contactus/contactus.view.html',
			controller: 'contactusCtrl',
			controllerAs: 'vm'
		})																										


		.otherwise({redirectTo: '/'});
	
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
}

function run ($rootScope, $anchorScroll, $route, $routeParams){
	console.log("fdjkfjaklfdj");
	$rootScope.$on("$routeChangeSuccess", function() {
   		$anchorScroll();
   		//document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
}

angular
	.module('wt')
	.config(['$routeProvider', '$locationProvider', config])
	.run(['$rootScope', '$anchorScroll', '$route', '$routeParams', run]);