
const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        minLength: 2,
        required: true 
    },
    coverUrl:{
        type: String,
        minLength: 2,
        maxLenght: 200,
        required: true 
    },
    creationDate: {
        type: Date,
        required: true 
    },
    duration: {
        type: String,
        minLength: 2,
        maxLenght: 10,
        required: true 
    },
    likes: {
        type: Number,
        required: true 
    },
    tags: {
        type: [String],
        minLength: 2,
        required: true 
    },
    title: {
        type: String,
        minLength: 2,
        maxLenght: 150,
        required: true 
    },
    userId: {
        type: String,
        required: true 
    },
    newKey: {
        type: String
    }
})


const model = mongoose.model('post', postSchema)

module.exports = model

/*
{"content":"<p>I woke up this morning and I just wanted to show you ...</p>",
"coverUrl":"https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gq54hvxk91voat9qj90a.jpg",
"creationDate":"20/04/2021 12:00:00",
"creationTime":"15:00",
"duration":"1 min",
"likes":57,
"postId":2,
"tags":["#javaScript","#programming","#css"],
"title":"WOW 😱 This pop-up is so nice"
,"userId":3}
*/