
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta Models
// y ahora estamos en caso de uso
const Users = require('../models/users')

const bcrypt = require('../lib/bcrypt')

function getAll() {
    return Users.find({})
}


// cuando es una funcion anonima el async va despues del nombre de la funcion
// esta no es una fucnion anonima por lo tanto el async va al principio de la fucnion
async function signUp ( {name, email, password} ) {

    // Inicio de la funcion userFound para saber si el email ya existe
    const userFound = await Users.findOne( {email: email} )

    if (userFound) {
        throw new Error('User already exist')
    } 
    // Fin de la funcion userFound

    // Para encryptar el password
    const encryptedPassword = await bcrypt.hash(password)

    return Users.create({ 
        name, 
        email, 
        password: encryptedPassword
    })
}

module.exports = {
    getAll : getAll,
    signUp : signUp
}