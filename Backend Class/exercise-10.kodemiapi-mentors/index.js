
// SE LEVATNA EL SERVER
const server = require('./src/server')

// HACEMOS AL FUCNIO CONNECT 
const dbConnect = require('./src/lib/db')


// connect db
dbConnect()
.then(() => {
    console.log('DB Connected')
    // Server
    server.listen(8080, () => {
        console.log('Server Listening')
    })
})

.catch( error => {
    console.log('DB connect Error: ', error)
})

// GET /koders
// 1. Crear (o asegurarse de que exista) el Modelo necesario
// 2. Crear el caso de uso necesario
// 3. Crear el endpoint necesario



/*
Practica:

- POST /koders
- DELETE /koders/:id  Koders.findByIdAndDelete(0)
*/
 /*
Practica 2:

GET /mentores
POST /mentores
DELETE /mentores/:id
PATCH /mentores/:id

Mentors
- name
- lastName
- age
- gender
- modulo [ 'front', 'back', 'cloud', 'react' ]
*/