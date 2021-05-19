
const express = require('express')
const mongoose = require('mongoose')
const Koder = require('./koderModel')

const server = express()
/*server.use(express.json)*/

const DB_USER = 'james'
const DB_PASSWORD = 'bauhaus11'
const DB_HOST = 'kodemia-11.oeag1.mongodb.net'
const DB_NAME = 'kodemia'


const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


server.get('/koders', async (request, response) => {

    const allKoders =  await Koder.find({})

    response.json({
        message: 'all koders',
        success: true,
        data: {
            koders: allKoders
        } 
    })
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