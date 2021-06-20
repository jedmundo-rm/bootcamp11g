
const mongoose = require('mongoose')

const replySchema = new mongoose.Schema({    
    content: {
        type: String,
        required: true,
        minLength: 2
    },
    creationDate: {
        type: Date,
        required: true,
    },
    post: {
        type: String,
        required: true,
        
    },
    userId: {
        type: String,
        required: true,
        minLength:1
    }
})

const model = mongoose.model('replies', replySchema)

module.exports = model


/*{"content":"Excelente post!",
"creationDate":"14/04/2021",
"post":1,
"userId":1}*/
