
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta models y el caso de uso en la carpeta usecases
// y ahora estamos en el endpoint

const express = require ('express')

/// importamos nuestro caso de uso
const koders = require('../usecases/koders')

const router = express.Router()

// Esto es para el POST
// Cada que levantemos una API que va a recibir objetos JSON hay que usar este middleware
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
        await koders.postKoder(name, lastName, age, gender) 

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

//DELETE
router.delete('/:id', async (request, response) => {

    try{
        await koders.deleteKoder(request.params.id)

        response.json({
            success: true,
            message: 'Koder Deleted',
            data:{}
        })

    } catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at delete koder',
            data: {
                error: error.message
            }
        })
    }
})

//PATCH
router.patch('/:id', async (request, response) => {

    try{
        const { id } = request.params
        const koderUpdated = await koders.updateById(id, request.body)

        response.json({
            success: true,
            message: 'Koder Updated',
            data:{}
        })

    } catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at update koder',
            data: {
                error: error.message
            }
        })
    }
})


module.exports = router

// montar el router en el server.js