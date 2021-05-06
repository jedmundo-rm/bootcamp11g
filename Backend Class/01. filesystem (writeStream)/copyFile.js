
// ESTO CREA UNA COPIA DEL ARCHIVO

const fs = require('fs')

fs.copyFile('created.txt', 'copys-files/created2.txt', (error) => {
    if(error){
        console.log('No se pudo copiar el archivo: ', error)
        return
    }
    console.log('Se copio el archivo')
})



// por cada funcion deberiamos tener un script ejecutable

// readFile
// appendFile
// unlink
// copyFile