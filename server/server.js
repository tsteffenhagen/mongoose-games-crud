var express = require('express');
var bodyParser = require('body-parser');

var mongooseConnection = require('./modules/mongoose-connection')
var game = require('./routes/game.js');

var app = express();

var port = process.env.PORT || 5000;

app.use('/game', game);

/**--------------MIDDLEWARE--------------------**/
app.use(express.static('server/public'));
app.use(bodyParser.json());//needed for angular requests
mongooseConnection.connect();
/**--------------MONGOOSE CONNECTION--------------------**/

app.use('/game', game);

app.listen(port, function(){
    console.log('listening on port', port);  
});