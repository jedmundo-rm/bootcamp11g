
// de afuera hacia adentro
// endpoint -> caso de uso -> model

// antes de los endpoint y los usecases tenemos que crear el model
// ahora estamos en models

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minLength: 2,
        maxLength: 20
    },
    email: {
        type: String, 
        match: /.+@.+\..+/, 
        required: true,
        maxLength: 100
    },
    password: {
        type: String, 
        required: true,
        minLength: 1

    }
})

// el primer parametro es el nombre de la coleccion en la BD
// y el segundo es el Schema
const model = mongoose.model('users', userSchema)

module.exports = model