
const express = require('express')
const router = express.Router()
const posts = require('../usecases/posts')

//GET
router.get('/',  async (request,response)=>{
    try{
        const allPosts= await posts.getAll()
        response.json({ //respuesta con 3 keys success, message, data
            success: true,
            message: 'All posts',
            data: {
                posts: allPosts
            }
        })

    }catch(error){
        response.status(400)
        response.json({ //respuesta con 3 keys succes,message,error
            success: false,
            message: 'Error at get all posts',
            error:  error.message
            
        })
    }    
})

router.post('/', async (request,response)=>{
    try{
        const postCreated = await posts.create(request.body)
        response.json({ 
            success: true,
            message: 'New Post created :D',
            data: {
                posts: postCreated
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at Post creation',
            error:  error.message
            
        })
    }    
})

router.get('/:id',async (request,response)=>{
    try{
        const { id } = request.params
        const postById = await posts.getById(id)
        response.json({ 
            success: true,
            message: 'Post Found',
            data: {
                posts: postById            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at found post',
            error:  error.message
            
        })
    }    
})

router.patch('/:id', async (request, response)=>{
    try{
        const updatedPost = await posts.updateById(request.params.id, request.body)
        response.json({ 
            success: true,
            message: 'Post updated ',
            data: {
                koders: updatedPost
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at post update',
            error:  error.message
            
        })
    }
})

module.exports = router
