

// ESTO BORRA UN ARCHIVO

const fs = require('fs')

fs.promises.unlink('nuevo.txt')
    .then( () => { 
        console.log('todo cool')
    })
    .catch(( error ) => {
        console.error(' algo salio mal:', error)
    }) 


// readFile
// appendFile
// unlink
// copyFile
// mkdir
// rmdir <- funciona solo con carpetas vacias
// readdir
