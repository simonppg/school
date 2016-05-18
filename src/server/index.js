var express	= require('express')
var app		= express()

//express sirve los archivos estaticos
app.use(express.static('public'))

// GET /votes
app.get('/votes', function (req, res) {
	res.json([])
})

// POST /vote/<id>
app.post('/vote/:id', function (req, res) {
	
})

app.listen(3000, function(){
	console.log('Servidor express iniciado. Escuchando en el puerto 3000')
})
