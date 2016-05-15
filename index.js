var fs = require('fs')
var http = require('http')

console.log("Aplicación nodejs");

function serveStatic (name, callback) {
	fs.readFile('./public/' + name, function (err, data) {
		if (err) {
			return callback(err)
		}
		callback(err, data.toString())
	})
}

var server = http.createServer(function(request, response){
	console.log('Recibí una peticion' + request.url)
	switch(request.url){
		case '/':
			serveStatic('index.html',function (err, content){
			response.end(content)
		})
		break
		case '/app.js':
			serveStatic('app.js',function (err, content){
			response.end(content)
		})
		break
		case '/app.css':
			serveStatic('app.css',function (err, content){
			response.end(content)
		})
		break
	default:
		response.statusCode = 404
	response.end('Not found')
	break
	}
})

server.listen(3000, function(){
	console.log('Servidor http iniciado. Escuchando en el puerto 3000')
})
