'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['ngRoute', 'firebase']).constant('FIREBASE_URL', 'https://tuanstore.firebaseio.com/');;
myApp.run(['$rootScope', '$location',
	function($rootScope, $location) {
        var itemString = localStorage.getItem('items');
        if(itemString && itemString !== 'null') {
            $rootScope.items = JSON.parse(itemString);
            $rootScope.length = $rootScope.items.length;
        } else {
            $rootScope.length = 0;
        }
		$rootScope.$on("$routeChangeStart", function(event, next, current) {
            $rootScope.path = $location.$$path;
        });
	}]);
myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/book', {
            templateUrl: 'views/list.html',
            controller: 'BookCtrl'
        }).
        when('/electronic', {
            templateUrl: 'views/list.html',
            controller: 'ElectronicCtrl'
        }).
        when('/furniture', {
            templateUrl: 'views/list.html',
            controller: 'FurnitureCtrl'
        }).
        when('/fashion', {
            templateUrl: 'views/list.html',
            controller: 'FashionCtrl'
        }).
        when('/shopping', {
            templateUrl: 'views/list.html',
            controller: 'ShoppingCtrl'
        }).
        when('/home', {
            templateUrl: 'views/list.html',
            controller: 'HomeCtrl'
        }).
        when('/travel', {
            templateUrl: 'views/list.html',
            controller: 'TravelCtrl'
        }).
        when('/checkout', {
            templateUrl: 'views/list.html',
            controller: 'CheckoutCtrl'
        }).
        when('/submit', {
            templateUrl: 'views/submit.html',
            controller: 'SubmitCtrl'
        }).
  		otherwise({redirectTo: '/book'});
}]);
