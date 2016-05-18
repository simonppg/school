import express from 'express'
const app = express()

//express sirve los archivos estaticos
app.use(express.static('public'))

// GET /votes
app.get('/votes', (req, res) => {
	res.json([])
})

// POST /vote/<id>
app.post('/vote/:id', (req, res) => {
	
})

app.listen(3000, () => console.log('Servidor express iniciado. Escuchando en el puerto 3000'))
