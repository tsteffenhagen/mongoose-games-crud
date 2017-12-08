app.service('GamesService', ['$http', function ($http) {
    var self = this;

    
    self.games = { list: [] };

    self.getGames = function () {
        console.log('in get games');
        
        $http({
            method: 'GET',
            url: '/games'
        }).then(function(response) {
            console.log('response', response);
            self.games.list = response.data;
            console.log(self.games.list);
                        
        })
    }

    self.addNewGame = function(newGame) {
        console.log(newGame);
        
        $http({
            method: 'POST',
            url: '/games',
            data: newGame
        }).then(function (response) {
            console.log('response', response);
            self.getGames();
            newGame.name = '';
            newGame.description = '';
            
        })

    }



}])