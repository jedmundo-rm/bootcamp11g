
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta Models
// y ahora estamos en caso de uso
const Koders = require('../models/koders') 

function getAll() {
    // find regresa una promesa
    return Koders.find({})
}

module.exports = {
    getAll: getAll
}