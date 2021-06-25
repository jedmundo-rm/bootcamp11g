
const Users = require('../models/users')
const bcrypt = require('../lib/bcrypt')
const jwt = require('../lib/jwt')

function getAll () {
    return Users.find()
}

function getById(id){
    return Users.findById(id)
}

async function signUp ({description, location, mail, password, userName, userNickname, userPic, work}) {
    const joined = Date.now()
    const role = "user"
    const userFound = await Users.findOne({mail}) //<-el lugar de regresar el arreglo regresa el objeto o un undefind
    if(userFound) {
        throw new Error('User already exists') //THROW lanza un error y corta la ejecucion
    }
    const encriptedPassword = await bcrypt.hash(password)
    return Users.create({
        description,
        joined, 
        location, 
        mail, 
        password: encriptedPassword, 
        userName, 
        userNickname, 
        userPic, 
        work, 
        role
    })
}

async function login(mail, password){
    const userFound = await Users.findOne({mail}) 
    if(!userFound) {
        throw new Error('Invalid Data')
    }

    const isValidPassword = await bcrypt.compare(password,userFound.password)
    if(!isValidPassword) {
        throw new Error('Invalid Data')
    }

    return jwt.sign({ id: userFound._id })

}

async function getByEmail(mail){
    const userFound = await Users.findOne({mail}) 
    if(!userFound) {
        throw new Error('Invalid Data')
    }
    return userFound
}





module.exports = {
    getAll,
    getById,
    signUp,
    login,
    getByEmail
}

