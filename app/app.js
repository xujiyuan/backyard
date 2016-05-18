'use strict';

// Declare app level module which depends on views, and components
angular.module('backyard', [
  'ngRoute',
  'backyard.view1',
  'backyard.view2',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
