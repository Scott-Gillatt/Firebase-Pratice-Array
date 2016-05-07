var app = angular.module("sampleApp", ["firebase"]);

app.factory("SampleFactory", function($firebaseArray) {
    var ref = new Firebase("https://bcw2016winter.firebaseio.com/demo")

    return $firebaseArray(ref);
});

app.controller("SampleController", function($scope, SampleFactory) {
    $scope.user = "Guest " + Math.round(Math.random() * 100);

    $scope.messages = SampleFactory;

    $scope.addMessage = function() {
        $scope.messages.$add({
            from: $scope.user,
            content: $scope.message
        });

        $scope.message = "";
    };

    $scope.messages.$loaded(function() {
        if ($scope.messages.length === 0) {
            $scope.messages.$add({
                from: "Firebase Docs",
                content: "Hellow World!"
            });
        }
    });
});