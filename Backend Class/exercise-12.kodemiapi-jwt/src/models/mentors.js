// de afuera hacia adentro
// endpoint -> caso de uso -> model

// antes de los models y los usecases tenemos que crear el model
// ahora estamos en models

const mongoose = require('mongoose')

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        required: true
    },
    gender: {
        type: String,
        enum: [ 'm', 'f'],
        required: true
    },
    modulo: {
        type: String,
        enum: [ 'front', 'back', 'cloud', 'react' ],
        required: true
    }
})

// el primer parametro es el nombre de la coleccion en la BD
// y el segundo es el Schema
const model = mongoose.model('mentors', mentorSchema)

module.exports = model