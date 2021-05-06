

// Las promesas son objetos

// Constructora

// resolve = funcion
// Pasa la promesa de pendiente a resuelto

// reject = funcion
// Pasa la promesa de pendiente a rechazada

const promesa = new Promise((resolve, reject) => {
    if (todoCool) {
        resolve('ok')
    } else {
        reject('not ok :(')
    }
})

// los objetos promesa tienen 2 metodos:
// -then que se ejecuta caundo la promesa se suelve satisfactoriamente
//  recibe lo que le pasamos a la fucion resolve

// promesa.then(() => {})

// -catch que se ejecuta caundo la promesa se rechaza
//  recibe loq ue le pasamos a la funcion reject

// promesa.catch()

// lo anterior es igual a esto:
promesa
    .then((resultado) => { console.log(resultado) }) // 'ok'
    .catch((error) => { console.error(error) }) // 'not ok :('