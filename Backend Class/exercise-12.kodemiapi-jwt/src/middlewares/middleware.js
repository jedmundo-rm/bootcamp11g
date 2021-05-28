// function log(request, response, next) {
//     console.log(`[${request.method}] ${request.url} ${JSON.stringify(request.body)}`)
//     next()
//  }


// function log(request,response, next){
//     const method = request.method
//     const ruta = request.url
//     const body = JSON.stringify(request.body)
//     console.log(`${method} ${ruta} ${body}`)
//     next()
// }


function log(request, response, next) {
    console.log(`[${request.method}] ${request.url} ${JSON.stringify(request.body)}`)
    next()
 }

  
module.exports = log