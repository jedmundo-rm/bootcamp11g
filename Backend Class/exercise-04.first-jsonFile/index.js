

const fs = require('fs')

const express = require('express')
const { request, response } = require('express')

const server = express()


// middleware
server.use(express.json())


server.listen(8080, () => {
    console.log('Server Listening in port 8080')
})


// Endpoint
// METODO y una RUTA
// GET /koders
// GET /koders/:id

// Practica fs + express
/*
// GET /KODERS -> regresa un json con una lista de koders
La lista de koders viene de un archivo
*/

server.get('/lista-koders', (request, response) => {

    fs.promises.readFile('koders.json','utf8')
    // data es el json como tal
    .then( (data) => { 
        response.json(JSON.parse(data))
        console.log('todo cool:', data)
    })
    .catch(( error ) => {
        console.error(' algo salio mal:', error)
    }) 

    // const json = fs.readFileSync('koders.json', 'utf8')
    // console.log('json:', json)

    // const jsonParsed = JSON.parse(json)
    // response.json(jsonParsed.koders)
})



server.post('/lista-koders', (request, response) => {
    const name = request.body.name
    const gender = request.body.gender

    const newKoder = { name, gender }

    const content = fs.readFileSync('koders.json', 'utf8')

    const json = JSON.parse(content)
    console.log('json:', json)

    json.koders.push(newKoder)
    console.log('json:', json)

    // Aqui escribimos el objeto en el archivo json
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        sucess: true
    })
})

// los dos puntos seran reemplazados por un valor en una variable llama id
server.patch('/lista-koders/:id', (request, response) => {

    const id = request.params.id // string
    const idNum = parseInt(id)  // lo pasamos a numero
    console.log('request.params:', request.params)
    
    // si queremos encontrat el name
    const name = request.body.name
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    const newKoders = json.koders.reduce((koders, koderActual) => {
        if (idNum === koderActual.id){
            koderActual.name = name
        }
        return [...koders, koderActual]
    }, [])

    json.koders = newKoders

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})

// practica

/* crear un endpoint para borrar
DELETE /koders/:id
GET /koders/:id
*/

server.delete('/lista-koders/:id', (request, response) => {

    const id = request.params.id // string
    const idNum = parseInt(id)  // lo pasamos a numero
    console.log('request.params:', request.params)

    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    const newKoder = json.koders.reduce((koders, koderActual) => {
        if (idNum !== koderActual.id){
            koders = [...koders, koderActual]
        }
        return koders
    }, [])

    json.koders = newKoder

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})