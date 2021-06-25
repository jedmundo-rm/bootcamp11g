
const express = require('express')
const router = express.Router()
const replies = require('../usecases/replies')

//GET
router.get('/',  async (request,response)=>{
    try{
        const allReplies= await replies.getAll()
        response.json({ //respuesta con 3 keys success, message, data
            success: true,
            message: 'All replies',
            data: {
                replies: allReplies
            }
        })

    }catch(error){
        response.status(400)
        response.json({ //respuesta con 3 keys succes,message,error
            success: false,
            message: 'Error at get all replies',
            error:  error.message
            
        })
    }    
})

router.post('/', async (request,response)=>{
    try{
        const replyCreated = await replies.create(request.body)
        response.json({ 
            success: true,
            message: 'New reply created :D',
            data: {
                replies: replyCreated
            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at reply creation',
            error:  error.message
            
        })
    }    
})

router.get('/:idPost',async (request,response)=>{
    try{
        const { idPost } = request.params
        const postByPostId = await replies.getByPostId(idPost)
        response.json({ 
            success: true,
            message: 'Post Found',
            data: {
                replies: postByPostId            }
        })

    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Error at found replies',
            error:  error.message
            
        })
    }    
})

module.exports = router