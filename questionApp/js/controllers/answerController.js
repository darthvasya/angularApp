questionApp.controller('answerController', function($scope, $http) {

  $scope.save = function (answer, answerForm) {
            if(answerForm.$valid){
                // действия по сохранению
                //$http.post("postAnswer.php", answer).success(function (answ) {
                //  $scope.response = answ;
                //});
                alert(answer.text + ", ваш ответ сохранен");
            }
        };
});
