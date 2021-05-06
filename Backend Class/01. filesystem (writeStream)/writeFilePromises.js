

// ESTO CREA UN ARCHIVO

const fs = require('fs')

fs.promises.writeFile('nuevo.txt', 'hola desde file txt con promesa', 'utf8')
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


// async function principal () {
//     await fs.promises.writeFile( 'nuevo.txt', 'hola XD' )
//     await fs.promises.appendFile('nuevo.txt', 'agregado :D')
// }

// principal()

// .then( () => {
//     console.log('creado y modificado')
// })
// .catch( error => console.error('error:', error))