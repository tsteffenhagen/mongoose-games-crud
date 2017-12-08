app.controller('GamesController',['GamesService', function (GamesService) {
    var self = this;
    
    self.games = GamesService.games;
    GamesService.getGames();
    self.addNewGame = GamesService.addNewGame;
}])