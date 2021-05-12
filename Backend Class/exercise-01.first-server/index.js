

const http = require('http')

const server = http.createServer( (request, response) => {


    console.log('path:', request.url)
    console.log('method:', request.method)


    response.write('hola deesde un servidor en node')


    // if (request.url === '/koders'){
    //     if (request.method == 'GET'){
    //         response.write('Aqui estan los koders')
    //     }else if(request.method == 'POST'){
    //         response.write('Aqui puedes crear koders')
    //     }else{
    //         response.write('No estaba preaprado')
    //     }
    // }else{
    //     response.write('No estaba preaprado')
    // }

    response.end()
})

server.listen(8080, () => {
    console.log('servidor escuchando en el puerto 8080')
})


// http puesto:80
// https puerto: 443
// puesto: 8080 reservado para el sistema


// Ejercio 1
// /koders

// GET /koder -> Aqui estan todos los koders


// POST / koder -> Aqui puedes crear koders



// X /X -> No estaba preparado para esto :(