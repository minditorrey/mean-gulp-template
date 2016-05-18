'use strict';

var app = angular.module('myFaceApp');

app.service('UserService', function($http) {
	this.register = userObj => {
		return $http.post('/api/users/register', userObj);	
	};


})