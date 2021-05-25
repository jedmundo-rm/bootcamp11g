
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


// bcrypt

// jwt

// flujo de registro y loggeo

// registro
// 1. otorgamos datos de usuario
// -email
// -password
// -name


 // 2. Validacion de usuario existente
 // 3. Encriptar el password
 // 4. Guardar en la base de datos

// bcrypt -> encriptar
// lib/bcrypt
// modelo, caso de uso y rutas