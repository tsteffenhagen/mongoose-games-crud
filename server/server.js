var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

var game = require('./routes/game.js');

var app = express();

var port = process.env.PORT || 5000;

app.use('/game', game);

/**--------------MIDDLEWARE--------------------**/
app.use(express.static('server/public'));
app.use(bodyParser.json());//needed for angular requests

/**--------------MONGOOSE CONNECTION--------------------**/
var databaseUrl = 'mongodb://localhost:27017/game_chest';
mongoose.connect(databaseUrl);

mongoose.connection.on('connected', function(){
    console.log('mongoose connected to:', databaseUrl);    
});

mongoose.connection.on('error', function(error) {
    console.log('mongoose connection error', error);    
})

app.use('/game', game);

app.listen(port, function(){
    console.log('listening on port', port);  
});