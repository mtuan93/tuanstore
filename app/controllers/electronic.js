'use strict';

myApp.controller('ElectronicCtrl', function($scope, $http, $rootScope) {
	$http.get('data/book.json').success(function(data) {
      	$scope.data = data;
    });

    $scope.addToCart = function(item) {
    	if($rootScope.items) {
    		$rootScope.items.push(item);
            $rootScope.length += 1;
    	} else {
    		$rootScope.items = [item];
            $rootScope.length = 1;
    	}
    	localStorage.setItem('items', JSON.stringify($rootScope.items));
    };
});