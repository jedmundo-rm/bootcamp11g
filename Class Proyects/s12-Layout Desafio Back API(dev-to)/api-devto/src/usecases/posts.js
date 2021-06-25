
const Posts = require('../models/posts')

function getAll () {
    return Posts.find()
}

function getById(id){
    return Posts.findById(id)
}

function create({ content, coverUrl, duration, tags, title, userId }){
    const creationDate = Date.now()
    const likes = 0
    const newKey = ''
    return Posts.create({ content,coverUrl, creationDate, duration, likes, newKey,tags, title, userId })
}

module.exports={
    getAll,
    getById,
    create
}
