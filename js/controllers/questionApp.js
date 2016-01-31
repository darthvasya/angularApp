var model = {
     text: 'Какой js-фреймворк лучше использовать?',
     author: 'Иван Иванов',
     date: '20/10/2013',
     answers:
     [{
         text: 'AngularJS!',
         author: 'Вова Сидоров',
         date: '20/10/2013',
         rate:2
     },{
         text: 'AngularJS лучше всех',
         author: 'Олег Кузнецов',
         date: '20/10/2013',
         rate:3
     },{
         text: 'Я бы использовал knockout',
         author: 'Неизвестный',
         date: '21/10/2013',
         rate:0
     }]
};


var myApp = angular.module('questionApp', []);

myApp.controller('questionsController', function($scope) {

  $scope.question = model;

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

myApp.controller('answerController', function($scope) {
  $scope.save = function (answer, answerForm) {
            if(answerForm.$valid){
                // действия по сохранению

                //другой контроллер
                //$scope.question.answers.push({text: 'text', author: 'vasya', date: '12/11/2013', rate: 0});

                alert(answer.text + ", ваш ответ сохранен");
            }
        };
});

 
