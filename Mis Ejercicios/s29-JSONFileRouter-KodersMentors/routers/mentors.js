
const fs = require('fs')

const express = require('express')

const router = express.Router()


router.get('/', async (request, response) => {
    const moduleFilter = request.query.module
    const countFilter = parseInt(request.query.count || 0)
    const nameFilter = request.query.name

    // Parse Content
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)
    console.log('json:', json)

    let mentorsData = null

    if (moduleFilter) {
        
        const mentorsFilterByModule = json.mentors.filter(mentor => mentor.module === moduleFilter)

        mentorsData = mentorsFilterByModule
    }

    // if (nameFilter) {
    //     const dataToFilter = mentorsData || jsonParsed.mentors
    //     mentorsData = dataToFilter.filter(mentor => mentor.name === nameFilter)
    // }


    // 
    // if(countFilter){
    //     const dataToFilter = mentorsData || jsonParsed.mentors
    //     mentorsData = dataToFilter.splice(0, countFilter)
    // }

    json.mentors = mentorsData || json.mentors

    response.json(json.mentors)
})



router.post('/', (request, response) => {
    // definimos os valores que vamos a pasar
    const id = request.body.id
    const name = request.body.name
    const module = request.body.module

    const newMentor = {id, name, module }

    // Parse Content
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)
    console.log('json:', json)

    json.mentors.push(newMentor)
    console.log('json:', json)

    // Aqui escribimos el objeto en el archivo json
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        sucess: true
    })
})

// los dos puntos seran reemplazados por un valor en una variable llama id
router.patch('/:id', (request, response) => {

    const id = request.params.id // string
    const idNum = parseInt(id)  // lo pasamos a numero
    console.log('request.params:', request.params)
    
    // si queremos encontrat el name
    const name = request.body.name

    // Parse Content
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    const newKoders = json.mentors.reduce((koders, koderActual) => {
        if (idNum === koderActual.id){
            koderActual.name = name
        }
        return [...koders, koderActual]
    }, [])

    json.mentors = newKoders

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})

// practica

/* crear un endpoint para borrar
DELETE /koders/:id
GET /koders/:id
*/


router.get('/:id', async (request, response) => {
    const id = request.params.id // string
    const idNum = parseInt(id)  // lo pasamos a numero

    // Parse Content
    const content = fs.readFileSync('koders.json','utf8')
    const json = JSON.parse(content)

    const mentorFound = json.mentors.find((mentorActual) => {
        const mentorSelected = idNum === mentorActual.id 
        return mentorSelected
    })

    console.log(mentorFound)
    response.json(mentorFound)

    // if (!mentorFound){
    //     response.status (404)
    //     response.json({
    //         success: false,
    //         message: 'koder not found'
    //     })
    //     return
    // }
    // response.json({
    //     success: true,
    //     message: 'koder found',
    //     data: {
    //         mentorFound
    //     }
    // })  
})

router.delete('/:id', (request, response) => {

    const id = request.params.id // string
    const idNum = parseInt(id)  // lo pasamos a numero
    console.log('request.params:', request.params)

    // Parse Content
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    // Con REDUCE
    // const newKoders = json.mentors.reduce((koders, koderActual) => {
            /* 
            Ponemos como negacion ya que queremos excluir el koder seleccionado
            De lo contrario el nuevo objeto me regresaria solo el koder seleccionado
            */
    //     if (idNum !== koderActual.id){
    //         koders = [...koders, koderActual]
    //     }
    //     return koders
    // }, [])

    // Con FILTER
    const newKoders = json.mentors.filter((koder) => {
            /* 
            Ponemos como negacion ya que queremos excluir el koder seleccionado
            De lo contrario el nuevo objeto me regresaria solo el koder seleccionado
            */            
            const quitKoder = idNum !== koder.id
            return quitKoder
        }
    )

    json.mentors = newKoders

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})


module.exports = router
