
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta models y el caso de uso en la carpeta usecases
// y ahora estamos en el endpoint


const express = require ('express')

/// importamos nuestro caso de uso
const koders = require('../usecases/koders')

const router = express.Router()

// Esto es para el POST
router.use(express.json())

// GET
router.get('/', async (request, response) => {

    try{
        const allKoders = await koders.getAll()

        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders
            }
        })

    }catch (error) {

        response.status(400)

        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })

    }
})

// POST
router.post('/', async (request, response) => {

    try{
        const {name, lastName, age, gender } = request.body
        await koders.newKoder(name, lastName, age, gender) 

        response.json({
            success: true,
            message: 'Koder created',
        })

    } catch (error) {

        response.status(400)

        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })

    }
})

module.exports = router

// montar el router en el server.js