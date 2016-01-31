questionApp.directive("answerList", function () {
    return {
        link: function (scope, element, attrs) {

            scope.data = scope[attrs["answerList"]];
        },
        restrict: "A",
        templateUrl: "../questionApp/templates/answerTemplate.html",
        transclude: true
    }
});
