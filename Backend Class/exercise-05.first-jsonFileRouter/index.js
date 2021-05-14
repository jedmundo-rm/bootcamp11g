



const express = require('express')
const { request, response } = require('express')

const kodersRouter = require('./routers/koders')

const server = express()


// middleware
server.use(express.json())
server.use('/lista-koders', kodersRouter)


server.get('/', (request, response) => {
    response.json({
        success: true,
        message: '11G APIv1'
    })
})

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

/*
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
*/




