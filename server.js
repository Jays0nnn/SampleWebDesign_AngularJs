var express = require('express');
var app = express();
var path = require('path');

var main = app.use('/', express.static('client'));

app.get('/', function(req, res){

	res.sendFile(path.join(__dirname + '/client/index.html'));
});



app.listen(8080, function(){

	console.log('Code Challenge is running on 8080 vision!');
});
