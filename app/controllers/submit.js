'use strict';

myApp.controller('SubmitCtrl', function($scope, $http, $rootScope, $firebase, FIREBASE_URL) {
    $scope.submitted = false;
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        if (contactform.$valid) {
            var ref = new Firebase(FIREBASE_URL + '/customers/');
            var firebaseUsers = $firebase(ref);
            var userInfo = {
                date: (new Date()).toLocaleString(),
                email: this.formData.inputEmail,
                name: this.formData.inputName,
                phone: this.formData.inputPhone,
                message: this.formData.inputMessage || '',
                order: $rootScope.items
            }; //user info
            firebaseUsers.$push(userInfo).then(function(ref) {
                $scope.formData = null;
                localStorage.setItem('items', null);
                $rootScope.items = [];
                $rootScope.length = 0;
            });
        }
    };

    $scope.canSendOrder = function() {
        return $rootScope.length > 0;
    };
});