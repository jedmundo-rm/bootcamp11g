
const express = require('express')

// esta es la ruta del js. Funciona sin ponerle la termiancion js
const kodersRouter = require('./routers/koders')

const server = express()


// middleware
server.use(express.json())
server.use('/lista-koders', kodersRouter) // para tener la ruta URL


server.get('/', (request, response) => {
    response.json({
        success: true,
        message: '11G APIv1'
    })
})

server.listen(8080, () => {
    console.log('Server Listening in port 8080')
})


/*
Practica:
Crear un router para mentores
GET /mentores
GET /mentores/:id
POST /mentores
PATCH /mentores/:id
DELETE /mentores/:id

*/