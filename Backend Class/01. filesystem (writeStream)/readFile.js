
// 

const fs = require('fs')

fs.readFile('created.txt', (error) => {
    if(error){
        console.log('No se pueod leer el archivo: ', error)
        return
    }
    console.log('Se leyo el archivo')
})


// por cada funcion deberiamos tener un script ejecutable

// readFile
// appendFile
// unlink
// copyFile