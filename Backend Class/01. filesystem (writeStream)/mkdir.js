
// ESTO CREA UNA CARPETA

const fs = require('fs')

fs.mkdir('./nueva-carpeta', (error) => {
    if(error){
        console.log('No se pudo crear la carpeta: ', error)
        return
    }
    console.log('Se creo la carpeta')
})



// por cada funcion deberiamos tener un script ejecutable

// readFile
// appendFile
// unlink
// copyFile