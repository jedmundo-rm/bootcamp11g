
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta Models
// y ahora estamos en caso de uso
const Koders = require('../models/koders') 


// Funcion para OBTENER todos los koders
function getAll() {
    // find regresa una promesa
    return Koders.find({})
}

// Funcion para POSTEAR un koder
function newKoder(name, lastName, age, gender) {
    // Deconstruccion o destructuring
    // const {name, lastName, age, gender} = koder
    return Koders.create( { name, lastName, age, gender } )
}

module.exports = {
    getAll: getAll,
    newKoder: newKoder
}