var app = angular.module('myApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'homeController'
		})
		.state('users', {
			url: '/',
			templateUrl: '/templates/users.html',
			controller: 'usersController'
		})
		.state('register', {
			url: '/register',
			templateUrl: '/templates/users.html',
			controller: 'usersController'
		})



	$urlRouterProvider.otherwise('/');

});