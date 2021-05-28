
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
function postKoder(name, lastName, age, gender) {
    // Deconstruccion o destructuring
    // const {name, lastName, age, gender} = koder
    return Koders.create( { name, lastName, age, gender } )
}

// Funcion para BORRAR un koder
function deleteKoder(idKoder){
    return Koders.findByIdAndDelete(idKoder)
}

// Funcion para actualizar un koder
function updateById (id, dataToUpdate){
    return Koders.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
    getAll: getAll,
    postKoder: postKoder,
    deleteKoder:deleteKoder,
    updateById: updateById
}