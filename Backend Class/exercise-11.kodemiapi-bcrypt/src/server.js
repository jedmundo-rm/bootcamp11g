// Aqui aloja la deficion del nuestro servidor

const express = require('express')

//montamos el router
const kodersRouter = require('./routers/koders')

//montamos el router
const mentorsRouter = require('./routers/mentors')

//montamos el router
const usersRouter = require('./routers/users')

// middleware
const middlewareLog = require('./middlewares/middleware')
const users = require('./usecases/users')



const app = express()

// esto lo usaos para los middleware
// Sirve para leer el Body y poder hacer el POST
app.use(express.json())

// mandamos a llamar el middleware (esto debe estar antes de las llamadas del router)
app.use(middlewareLog)

// mandamos a llamar el router
app.use('/koders', kodersRouter)

// mandamos a llamar el router
app.use('/mentors', mentorsRouter)

// mandamos a llamar el router
app.use('/users', usersRouter)



module.exports = app