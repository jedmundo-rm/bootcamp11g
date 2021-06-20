
const Posts = require('../models/posts')

 async function  getAll(){   
    return Posts.find()
    .populate({path: "userId", model: 'usersdev',  })
    .exec();    
}

async function  getBy(){   
    return Posts.find({})
    .populate({path: "userId", model: 'usersdev',  })
    .exec();    
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

function updateById(id,dataToUpdate){
    return Posts.findByIdAndUpdate(id,dataToUpdate);
}

module.exports={
    getAll,
    getById,
    create,
    updateById
}
