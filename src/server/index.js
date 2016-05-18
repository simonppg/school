import express from 'express'
const app = express()
import api from 'src/server/api'

//express sirve los archivos estaticos
app.use(express.static('public'))

app.use('/api', api)

app.listen(3000, () => console.log('Servidor express iniciado. Escuchando en el puerto 3000'))
