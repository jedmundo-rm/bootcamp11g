
const express = require('express')
const mongoose = require('mongoose')
const Koder = require('./koderModel')

const server = express()

// esto sirve para el reques.body
server.use(express.json())

const DB_USER = 'james'
const DB_PASSWORD = 'bauhaus11'
const DB_HOST = 'kodemia-11.oeag1.mongodb.net'
const DB_NAME = 'kodemia'


const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


server.get('/koders', async (request, response) => {

    const genderFilter = request.query.gender
    const age = request.query.age

    const isMinAge = new Boolean(request.query.is_min_age)
    
    console.log('isMinAge:', isMinAge.valueOf())

    const filters = {}

    if (genderFilter) filters.gender = genderFilter
    //if (ageFilter) filters.age = ageFilter //{age: 10}

    if (age) {
        if (isMinAge.valueOf()){
            filters.age = {$gte: age}
        }else{
            filters.age = age
        }
    }

    const allKoders =  await Koder.find(filters)

    response.json({
        message: 'all koders',
        success: true,
        data: {
            koders: allKoders
        } 
    })
})

server.post('/koders', async (request, response) => {

    // definimos os valores que vamos a pasar
    const name = request.body.name
    const lastName = request.body.lastName
    const age = request.body.age
    const gender = request.body.gender

    //const newKoder = {name, lastName, age, gender }


    // if(!name || !lastName || !age || !gender){

    //     response.status(400)

    //     response.json( {
    //         success: false,
    //         message: 'name, lastName, age, gender are required',
    //     })
    //     return 
    // }

    //await Koder.create({ newKoder })

    // response.json({
    //     message: 'all koders',
    //     success: true
    // })

    try{
        // Deconstruccion o destructuring
        const {name, lastName, age, gender } = request.body
        await Koder.create( {name, lastName, age, gender } )

        response.json({
            message: 'all koders',
            success: true
        })

    } catch(error){
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
    }


})



// Hacemos la coneccion a la base de Datos
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then( () => {
        // aqui ya estamos conectados

        // entonces que empiece a escuchar el servidor
        server.listen(8080, () => {
            console.log('server is listening')
        })
    })
    .catch( error => {
        console.log('error:', error)
    })


    /*Practica:
    
    - GET /koders
        -gender

    - POST /koders
        -name
        -lastName
        -age
        -gender

    */