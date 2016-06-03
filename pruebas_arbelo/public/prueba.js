(function() {
	var socket = io();
	
	socket.on('te devuelvo el saludo', function(data) {
		console.log(data.respuesta);
	});
	
	socket.emit('te saludo', {
		saludo: 'hola amigo'
	});
})();