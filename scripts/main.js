var myApp = angular.module("superhero", []);


myApp.controller("FirstCtrl", ['$scope', function ($scope, data) {
    $scope.data = data;
    
    $scope.leaveVoicemail = function (number, message) {
        alert('Number: ' + number + ' said: ' + message);
    };

}]);


myApp.directive("superman", function () {
    return {
        restrict: "E",
        template: "<div>Here I am to save the day</div>"
    }
});

myApp.run(function($templateCache) {
    $templateCache.put("phone.html", '<div>Number: {{number}}Network:<select ng-model="network" ng-options="net for net in networks"></select></div><input type="text" ng-model="value"><div class="button" ng-click="makeCall({message: value, number: number})">Call Home!</div>');
});

myApp.directive("phone", function () {
    return {
        restrict: "E",
        scope: {
            number: '@',
            network: '=',
            makeCall: '&'
        },
        templateUrl: 'phone.html',
        link: function(scope) {
            scope.networks = ["Vodafone", "Spark", "2Degrees"];
            scope.network = scope.network[0];
        }
    }
});
