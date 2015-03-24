
// create the module and name it johnsApp
var johnsApp = angular.module('johnsApp', ['ngRoute']);

//route config
johnsApp.config(function($routeProvider) {
	$routeProvider

	// route the homepage
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'mainController'
	})

	// route for the about page
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller  :  'aboutController'
	})

	// routefor the contact page 
	.when('/contact', {
		templateUrl : 'pages/contact.html',
		controller : 'contactController'
	});
});




// creating the controller 
johnsApp.controller('mainController',function($scope) {

	$scope.message = 'WOULD YOU JUST LOOK AT IT';
});

johnsApp.controller('aboutController',function($scope) {

	$scope.message = 'Let me tell you about it';
});

johnsApp.controller('contactController',function($scope) {

	$scope.message = 'Contact Me';
});