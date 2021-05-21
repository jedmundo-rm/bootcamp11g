const express = require('express')

const router = express.Router()

router.use((request, response, next) => {
  console.log('middleware de router b')
  next()
})

router.get('/', (request, response) => {
  response.json({
    message: 'router b'
  })
})

router.get('/hola', (request, response)  => {
  response.json({
    message: 'router b hola'
  })
})

module.exports = router