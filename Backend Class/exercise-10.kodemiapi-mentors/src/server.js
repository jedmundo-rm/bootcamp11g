// Aqui aloja la deficion del nuestro servidor

const express = require('express')

//montamos el router
const kodersRouter = require('./routers/koders')

//montamos el router
const mentorsRouter = require('./routers/mentors')

const app = express()

// mandamos a llamar el router
app.use('/koders', kodersRouter)

// mandamos a llamar el router
app.use('/mentors', mentorsRouter)

module.exports = app