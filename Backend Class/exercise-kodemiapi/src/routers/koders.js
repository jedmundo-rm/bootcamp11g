
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta models y el caso de uso en la carpeta usecases
// y ahora estamos en el endpoint


const express = require ('express')

/// importamos nuestro caso de uso
const koders = require('../usecases/koders')

const router = express.Router()

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
router.post('/', (request, response) => {

})

module.exports = router

// montar el router en el server.js