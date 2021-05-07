

const http = require('http')

const server = http.createServer( (request, response) => {


    console.log('path:', request.url)
    console.log('method:', request.method)


    response.write('hola deesde un servidor en node')
    response.end()
})

server.listen(8080, () => {
    console.log('servidor escuchando en el puerto 8080')
})


// http puesto:80
// https puerto: 443
// puesto: 8080 reservado para el sistema