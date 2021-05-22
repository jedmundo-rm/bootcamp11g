const mongoose = require('mongoose')


const DB_USER = 'james'
const DB_PASSWORD = 'bauhaus11'
const DB_HOST = 'kodemia-11.oeag1.mongodb.net'
const DB_NAME = 'kodemia'


const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`


function connect() {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = connect