
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta models y el caso de uso en la carpeta usecases
// y ahora estamos en el endpoint


const express = require ('express')

/// importamos nuestro caso de uso
const mentors = require('../usecases/mentors')

const router = express.Router()

// Esto es para el POST
router.use(express.json())

// GET
router.get('/', async (request, response) => {

    try{
        const allMentors = await mentors.getAll()

        response.json({
            success: true,
            message: 'All mentors',
            data: {
                mentors: allMentors
            }
        })

    }catch (error) {

        response.status(400)

        response.json({
            success: false,
            message: 'Error at get all mentors',
            error: error.message
        })

    }
})

// POST
router.post('/', async (request, response) => {

    try{
        const {name, lastName, age, gender, modulo } = request.body
        await mentors.postMentor(name, lastName, age, gender, modulo) 

        response.json({
            success: true,
            message: 'Mentors created',
        })

    } catch (error) {

        response.status(400)

        response.json({
            success: false,
            message: 'Error at get all mentors',
            error: error.message
        })

    }
})

//DELETE
router.delete('/:id', async (request, response) => {

    try{
        await mentors.deleteMentor(request.params.id)

        response.json({
            success: true,
            message: 'Mentors Deleted',
            data:{}
        })

    } catch(error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at delete mentor',
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
        const mentorUpdated = await mentors.updateById(id, request.body)

        response.json({
            success: true,
            message: 'Mentors Updated',
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