var questionApp = angular.module('questionApp', ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider.when('/question',
        {
          templateUrl: 'views/question.html',
          controller: 'questionsController'
        });
        $routeProvider.when('/answer',
        {
          templateUrl: 'views/answer.html',
          controller: 'answerController'
        });
        $routeProvider.otherwise({redirectTo: '/question'});

    });
