var myApp = angular.module("superhero", []);

(function() {
    'use strict';

    myApp.controller("FirstCtrl", ['$scope', function ($scope, data) {
        $scope.data = data;
    }]);

}());

myApp.directive("superman", function() {
    return {
        restrict: "E",
        template: "<div>Here I am to save the day 2</div>"
    }
});

//myApp.factory('Data', function () {
//    alert("factory");
//    return { message: "panel" }
//});

//function FirstCtrl($scope, Data) {
//    alert("factory");
//    $scope.data = Data;
//}

//(function() {
//    'use strict';

//    angular.module("myApp").controller("FirstCtrl", ['$scope', 'Data', function ($scope) {
//            alert("controller");
//            $scope.data = "Getting location...";
//        }]);

//}());