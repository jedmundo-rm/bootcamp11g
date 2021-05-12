

const fs = require('fs')

const express = require('express')

const server = express()


// middleware
server.use(express.json())


server.listen(8080, () => {
    console.log('Server Listening in port 8080')
})


// Endpoint
// METODO y una RUTA
// GET /koders
// GET /koders/id

// Practica fs + express
/*
// GET /KODERS -> regresa un json con una lista de koders
La lista de koders viene de un archivo
*/

server.get('/lista-koders', (request, response) => {

    fs.promises.readFile('koders.json','utf-8')
    .then( (data) => { 
        response.json(JSON.parse(data))
        console.log('todo cool:', data)
    })
    .catch(( error ) => {
        console.error(' algo salio mal:', error)
    }) 
})



