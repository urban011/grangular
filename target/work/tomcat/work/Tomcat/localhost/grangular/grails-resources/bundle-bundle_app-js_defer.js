'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('app', [
	'ngRoute', // since AngularJS-1.2.x ...
	'app.filters', 'app.services', 'app.directives', 'app.controllers'
]);
app.config(['$routeProvider', function($routeProvider) {
	// use relative url (as usual), but note that here Grails need that related pages
	// must be under web-app/$controllerName/<relativePath> ...
	// $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'App1Controller'});
	// $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'App2Controller'});
	//
	// use relative url (as usual), but going up one level, so here Grails need that related pages
	// must be under web-app/<relativePath> ... better for sharing partials between multiple Grails Controllers ...
	// $routeProvider.when('/view1', {templateUrl: '../partials/partial1.html', controller: 'App1Controller'});
	// $routeProvider.when('/view2', {templateUrl: '../partials/partial2.html', controller: 'App2Controller'});
	//
	// or use absolute url here (put related pages under web-app), for better reuse between Grails controllers,
	// but note that the context name has to be provided here ...
	// $routeProvider.when('/view1', {templateUrl: '/partials/partial1.html', controller: 'App1Controller'});
	// $routeProvider.when('/view2', {templateUrl: '/partials/partial2.html', controller: 'App2Controller'});
	//
	// so it's simpler for now to use a relative approach ...
	$routeProvider.when('/view1', {templateUrl: '../partials/partial1.html', controller: 'App1Controller', controllerAs: 'ctrl1'});
	$routeProvider.when('/view2', {templateUrl: '../partials/partial2.html', controller: 'App2Controller', controllerAs: 'ctrl2'});

	// fallback mapping
	$routeProvider.otherwise({redirectTo: '/view1'});
	// $routeProvider.otherwise({redirectTo: '/empty'});
}]);

'use strict';

/* Services */

// Sample value service
var servicesModule = angular.module('app.services', []);

servicesModule.value('version', '1.0');
servicesModule.value('webapp_context_name', 'grails-angularjs-resources-test');  // manual set webapp context name here, as a sample

/*
// TODO: make it work (later) ...
	.value('webapp_context_name', 'grails-angularjs-resources-test')  // manual set webapp context name here, as a sample
// TODO: make it work (later) ...
	.factory('GrailsRestService', function($http) {  // sample to call a GrailsController that returns REST data in json format
		var grailsRestService = {};
		$http.get('restSample/index').success(function(response) {
			grailsRestService.data = response;
		});
		return grailsRestService;
	}
 */
;

/*
// TODO: make it work (later) ...
// $provide.constant('webapp_context_name2', '/grails-angularjs-resources-test');  // manual set webapp context name here, as a sample
 */

'use strict';

/* Controllers */

angular.module('app.controllers', [])
	.controller('App1Controller', ['$scope', function() {
		this.foo = 'First';
	}])
	.controller('App2Controller', ['$scope', function() {
		this.foo = 'Second';
	}])
;

'use strict';

/* Filters */

angular.module('app.filters', []).
	filter('interpolate', ['version', function(version) {
			return function(text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			}
		}
		])
	/*
// TODO: make it work (later) ...
	.filter('interpolate', ['webapp_context_name', function(webapp_context_name) {
			return function(text) {
				return String(text).replace(/\%WEBAPP_CONTEXT_NAME\%/mg, webapp_context_name);
			}
		}
	])
	 */
;

'use strict';

/* Directives */

angular.module('app.directives', []).
	directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}])
;


