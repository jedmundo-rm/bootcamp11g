
// 

const fs = require('fs')

fs.promises.readFile('nuevo.txt')
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
// mkdir
// rmdir <- funciona solo con carpetas vacias
// readdir