var app = angular.module('GamesApp', ['ngRoute']);

app.config( function($routeProvider){

    $routeProvider.when('/games',{
        templateUrl: '/views/games.html',
        controller: 'GamesController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});
