
// ESTO CREA UN ARCHIVO

const fs = require('fs')

fs.writeFile('created.txt', 'hola desde file txt', 'utf8', (error) => {
    if(error){
        Console.log('No se pueod crear el archivo: ', error)
        return
    }
    console.log('Se escribio el archivo')
})



// por cada funcion deberiamos tener un script ejecutable

// readFile
// appendFile
// unlink
// copyFile