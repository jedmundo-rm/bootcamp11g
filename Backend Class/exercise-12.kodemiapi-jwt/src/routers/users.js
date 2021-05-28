
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta models y el caso de uso en la carpeta usecases
// y ahora estamos en el endpoint

const express = require ('express')

/// importamos nuestro caso de uso
const users = require('../usecases/users')

const router = express.Router()

router.post('/', async (request, response) => {
    try{

        const newUser = await users.signUp(request.body)

        response.json({
            success: true,
            message: 'user registered',
            data: {
                user: newUser
            }
        })

    } catch (error){
        response.status(400)

        response.json({
            success: false,
            message : 'Could not resister',
            error: error.message     
        })

    }
})

router.get('/', async (request, response) => {
    try{
        const allUsers = await users.getAll()
        response.json({
            success: true,
            message: 'All users',
            data: {
                users:allUsers
            }
        })
    } catch{
        response.status(400)

        response.json({
            success: false,
            message : 'Could not resister',
            error: error.message     
        })
    }
})


router.post('/login', async (request, response) => {
    try {

        const { email, password} = request.body

        const token = await users.login(email, password)

        response.json({
            success: true,
            message: 'Logged In',
            data: {
                token
            }
        })
        
    } catch (error) {
        response.status(400)

        response.json({
            success: false,
            message : 'Could not resister',
            error: error.message     
        })
    }
})


module.exports = router