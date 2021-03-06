
const express = require('express')
const cors= require('cors')
const postsRouter = require('./routers/posts')
const usersRouter = require('./routers/users')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/posts',postsRouter)
app.use('/users',usersRouter)

module.exports= app
