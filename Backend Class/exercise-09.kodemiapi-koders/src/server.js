// Aqui aloja la deficion del nuestro servidor

const express = require('express')

//montamos el router
const kodersRouter = require('./routers/koders')

const app = express()

// mandamos a llamar el router
app.use('/koders', kodersRouter)

module.exports = app