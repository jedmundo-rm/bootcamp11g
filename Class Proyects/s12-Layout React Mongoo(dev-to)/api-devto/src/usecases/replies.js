
const Replies = require('../models/replies')

function getAll () {
    return Replies.find()
}

function getByPostId(id){
    return Replies.find({post:id}).sort({creationDate:-1})
    .populate({path: "userId", model: 'usersdev',  })
    .exec(); 
}

function create({ content, post, userId}){
    const creationDate = Date.now()
    return Replies.create({ content, creationDate, post, userId })
}

module.exports={
    getAll,
    getByPostId,
    create
}