

questionApp.controller('questionsController', function($scope, $http, dataService) {


  $http.get('../questionApp/files/question.json').success(function(data) {
    $scope.question = data.question;
  });
  //$scope.question = dataService.question;

  $scope.sortparam = '-rate';

  $scope.voteUp = function(answer) {
    answer.rate++;
  };
  $scope.voteDown = function(answer) {
    answer.rate--;
  };
  $scope.questColorClass = "questcolor";
  $scope.changeClass = function(e) {
    $scope.questColorClass = e.type = "mouseover" ? "questselectedcolor" : "questcolor";
  };

});
