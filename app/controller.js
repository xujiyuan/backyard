'use strict';

angular.module('backyard').controller('MainController', ['$scope', '$http', 'settings',
    function($scope, $http, settings) {


        $scope.settings = settings.init();


        //This is where application get started
        $scope.initialize = function() {
        console.log("The application has started");
        };

        $scope.initialize();


    }


]);