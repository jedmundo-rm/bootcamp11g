

const http = require('http')

const server = http.createServer( (request, response) => {

    response.setHeader('Content-Type', 'application/json')

    const jsonResponse = { message: 'hola mundo'}
    const jsonString = JSON.stringify(jsonResponse)
    console.log('jsonString: ', jsonString)

    response.write(jsonString)
    response.end()

})

server.listen(8080, () => {
    console.log('servidor escuchando en el puerto 8080')
})

// Como repsondo un json


// http puesto:80
// https puerto: 443
// puesto: 8080 reservado para el sistema


