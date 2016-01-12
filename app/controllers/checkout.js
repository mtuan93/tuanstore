'use strict';

myApp.controller('CheckoutCtrl', function($scope, $http, $rootScope, $location) {
	$scope.data = $rootScope.items;

    $scope.remove = function(item) {
        for(var i = $rootScope.items.length - 1; i >= 0; i--) {
            if($rootScope.items[i].id === item.id) {
               $rootScope.items.splice(i, 1);
               break;
            }
        }
        $rootScope.length -= 1;
        $scope.data = $rootScope.items;
        localStorage.setItem('items', JSON.stringify($rootScope.items));
    };

    $scope.canSendOrder = function() {
        return $rootScope.length > 0;
    };

    $scope.sendOrder = function() {
        if($scope.canSendOrder) {
            $location.path('/submit');
        }
    };
});