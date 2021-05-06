
// ESTO RENOMBRA DIRECTORIO

const fs = require('fs')

fs.rmdir('./nueva-carpeta', (error) => {
    if(error){
        console.log('No se pudo leer la ruta: ', error)
        return
    }
    console.log('Se pudo leer la ruta')
})



// por cada funcion deberiamos tener un script ejecutable

// readFile
// appendFile
// unlink
// copyFile