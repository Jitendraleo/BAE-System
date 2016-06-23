define([
		"angular", 
		"ngRoute",

		// Controllers

		"controllers/HomeCtrl",
		
		// Directives

		"directives/header",
		"directives/gmap",

		// Services

		"services/httpCalls.js",

		//Factories

		"factory/xhr.js",

		// Templates

		"text!../templates/homeTemplate.html"
	], 
	function(
		angular,
		ngRoute,

		// Controllers

		HomeCtrl,
		
		// Directives

		header,
		gmap,

		// Services

		httpCalls,

		// Factory

		xhr,

		// Templates

		homeTemplate
	) {

	    var app = angular.module("projectModule", ["ngRoute"] )

	    	// Controllers

	    	.controller('HomeCtrl', HomeCtrl)
			
			// Directives

	    	.directive('headerDirective', header)
	    	.directive('gmap', gmap)
		
			// Services

			.service('httpCalls', httpCalls)

			// Factory
			
			.factory('xhr', xhr)
			
			.config(['$routeProvider', function($routeProvider) {
					$routeProvider.
						when('/', {
							template: homeTemplate,
							controller: 'HomeCtrl'
						}).
						otherwise({
							redirectTo: '/'
						});
		}]);

	    app.init = function () {
	    	angular.bootstrap(document, ['projectModule']);
		};

	    return app;
	}
);