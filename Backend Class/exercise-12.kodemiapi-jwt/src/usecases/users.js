
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta Models
// y ahora estamos en caso de uso
const Users = require('../models/users')

const bcrypt = require('../lib/bcrypt')

const jwt = require('../lib/jwt')

function getAll() {
    return Users.find({})
}

function getById( id ) {
    return Users.findById( id )
}



// cuando es una funcion anonima el async va despues del nombre de la funcion
// esta no es una fucnion anonima por lo tanto el async va al principio de la fucnion
async function signUp ( {name, email, password, role} ) {

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
        password: encryptedPassword,
        role
    })
}


async function login (email, password){
    const userFound = await Users.findOne( {email} )

    if(!userFound){
        throw new Error('Invalid Email')
    }

    const isValidPassword = await bcrypt.compare(password, userFound.password)
    
    if(!isValidPassword){
        throw new Error ('Invalid Password')
    }

    return jwt.sign( {id: userFound._id} )

}

module.exports = {
    getAll : getAll,
    signUp : signUp,
    login: login,
    getById: getById
}