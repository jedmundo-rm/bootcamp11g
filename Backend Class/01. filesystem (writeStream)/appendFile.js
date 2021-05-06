
//

const fs = require('fs')

fs.appendFile('created.txt', 'dfgsdgsdgrgrstgs', 'utf8', (error) => {
    if(error){
        console.log('No se pueod adjuntar el archivo: ', error)
        return
    }
    console.log('Se adjunto el archivo')
})



// por cada funcion deberiamos tener un script ejecutable

// readFile
// appendFile
// unlink
// copyFile