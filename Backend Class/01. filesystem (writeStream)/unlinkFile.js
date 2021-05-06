
// ESTO BORRA UN ARCHIVO

const fs = require('fs')

fs.unlink('created.txt', (error) => {
    if(error){
        console.log('No se pueod unlinkear el archivo: ', error)
        return
    }
    console.log('Se unlinkeo el archivo')
})



// por cada funcion deberiamos tener un script ejecutable

// readFile
// appendFile
// unlink
// copyFile