
const express = require('express')
const routerB = require('./routerB')

const server = express()

// function middleware(request, response, next){
//     console.log('middleware factory')
//     next()
// }

// server.use(middleware)

// Middlewares a nivel de Servidor
server.use( (request, response, next) => {
    console.log('middleware a nivel de aplicacion')
    next()
})

server.use('/b', routerB)

// GET (Ruta)
server.get('/', (request, response, next) => {
    console.log('middleware a nivel ruta')
    next()
}, (request, response) => {
    response.json({message: 'API Middleware'})
}) 


server.get('/a', (request, response) => {
    response.json({message: 'ruta a'})
})

server.listen(8080, () => {
    console.log('Server Listening')
})


// Midllewares 3 niveles (Son funciones)

// -Nivel de aplicacion o servidor
// - Nivel router
// - Nivel de Ruta

