
const express = require('express')
const cors= require('cors')
const postsRouter = require('./routers/posts')
const usersRouter = require('./routers/users')
const repliesRouter = require('./routers/replies')
const middlewareLog = require('./middlewares/middleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middlewareLog)
app.use('/posts',postsRouter)
app.use('/users',usersRouter)
app.use('/replies',repliesRouter)
app.use('/login',usersRouter)

module.exports= app
