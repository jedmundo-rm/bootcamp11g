
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta Models
// y ahora estamos en caso de uso
const Mentors = require('../models/mentors') 


// Funcion para OBTENER todos los mentors
function getAll() {
    // find regresa una promesa
    return Mentors.find({})
}

// Funcion para POSTEAR un mentor
function postMentor(name, lastName, age, gender, modulo) {
    // Deconstruccion o destructuring
    // const {name, lastName, age, gender} = mentor
    return Mentors.create( { name, lastName, age, gender, modulo } )
}

// Funcion para BORRAR un mentor
function deleteMentor(idMentor){
    return Mentors.findByIdAndDelete(idMentor)
}

// Funcion para actualizar un mentor
function updateById (id, dataToUpdate){
    return Mentors.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
    getAll: getAll,
    postMentor: postMentor,
    deleteMentor:deleteMentor,
    updateById: updateById
}