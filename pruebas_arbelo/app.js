// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 3000;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(__dirname + '/public'));

// saluda2
io.on('connection', function (socket) {
	
	socket.on('te saludo', function(data){
		console.log('te llego un saludo: ' + data.saludo);
		socket.emit('te devuelvo el saludo', {
			respuesta: 'todo bien'
		});
	});
	
});
