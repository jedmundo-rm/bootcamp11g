const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({    
    description: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 200
    },
    joined: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 60
    },
    mail: {
        type: String,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        maxLength: 120,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength:1
    },
    userName: {
        type: String,
        required: true,
        minLength: 2
    },
    userNickname: {
        type: String,
        required: true,
        minLength: 2
    },
    userPic: {
        type: String,
        required: true,
        minLength: 2
    },
    work: {
        type: String,
        required: true,
        minLength: 2
    },
    role:{
        type: [String],
        enum: ['admin','user'],
        minLength: 1,
        required: true
    }
})

const model = mongoose.model('usersdev', userSchema)

module.exports = model

/*
{"description":"Sushi, the Saints, and coding",
"joined":"14/04/2018",
"location":"Mexico City",
"mail":"israel@gmail.com",
"password":"1234",
"userId":1,
"userName":"Israel Salinas Martínez",
"userNickname":"@Isra",
"userPic":"https://media-exp1.licdn.com/dms/image/C4E03AQEKN_uf1kAPMw/profile-displayphoto-shrink_800_800/0/1550176229405?e=1623888000&v=beta&t=tNSS_vfQm_GWXfBquADFDLyNnozk3UK_hsS10IvQMlQ",
"work":"FullStack Developer"}
*/