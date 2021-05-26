const express = require('express')

const server = express()

// middleware
// Cada que levantemos una API que va a recibir objetos JSON hay que usar este middleware
server.use(express.json())

// /hola

server.get('/hola', (request, response) => {
    response.write('GET /Hola')
    response.end()
})

server.post('/hola', (request, response) => {
    response.write('POST /Hola')
    response.end()
})

// /koders

server.get('/koders', (request, response) => {

    // Esto es solo con express y debe llamarse antes de response.json
    response.status(401)

    // Esto es como lo haciamos antes
    // response.setHeader('Content-Type', 'application/json')
    // const json = {message: 'Aqui la lista de Koders'}
    // const jsonString = JSON.stringify(json)
    // response.write(jsonString)
    // response.end()

    // Esto es lo mimso que lo de arriba (solo con express y ya incluye el response.end)
    response.json({message: 'Aqui la lista de Koders'})

    // response.write('GET /Aqui estan todos los koders')
    // response.end()
})

server.post('/koders', (request, response) => {

    const cuerpo = request.body
    console.log('body:', cuerpo)
    response.json({
        message: 'ok'
    })

    //response.write('POST /Aqui puedes crear koders')
    //response.end()
})

server.put('/koders', (request, response) => {
    response.write('PUT /Aqui puedes sustituir un koder')
    response.end()
})


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

const fs = require('fs')


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



