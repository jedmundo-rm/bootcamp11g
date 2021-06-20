const express = require('express')
const users = require('../usecases/users')
const router = express.Router()

router.post('/', async(request, response)=>{

    try{
        const newUser= await users.signUp(request.body)
        response.json({ 
            success: true,
            message: 'User registered',
            data: {
                users: newUser
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Could not register',
            error:  error.message
            
        })
    }

})

router.get('/', async (request, response)=>{
    try{
        const  allUsers = await users.getAll()
        response.json({ 
            success: true,
            message: 'All users',
            data: {
                users: allUsers
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Could not get users',
            error:  error.message
            
        })
    }
})

router.get('/:id', async (request, response)=>{
    try{
        const { id } = request.params
        const  userFounded = await users.getById(id)
        response.json({ 
            success: true,
            message: 'User Founded',
            data: {
                users: userFounded
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Could not get user',
            error:  error.message
            
        })
    }
})

router.post('/login',async(request, response)=>{
    try{
        const {email, password} = request.body
        const  token = await users.login(email,password)
        const user = await users.getByEmail(email)
        const{mail, _id} = user
        
        response.json({ 
            success: true,
            message: 'Logged in',
            data: {
                token,
                mail,
                _id
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Could not not log in',
            error:  error.message            
        })
    }
})


module.exports = router
