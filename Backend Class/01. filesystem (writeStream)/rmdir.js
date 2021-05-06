
// ESTO RENOMBRA DIRECTORIO

const fs = require('fs')

fs.promises.rmdir('./nueva-carpeta')
    .then( () => { 
        console.log('todo cool')
    })
    .catch(( error ) => {
        console.error(' algo salio mal:', error)
    }) 




// por cada funcion deberiamos tener un script ejecutable

// readFile
// appendFile
// unlink
// copyFile