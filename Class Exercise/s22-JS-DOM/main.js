

/*
Este array dentro de un ul
namesArray=[
    "Jaime",
    "Beto",
    "Mariana"
]
*/

const namesAray = [
    "Jaime",
    "Beto",
    "Mariana"
]

const printList = () =>{
    //1. Creamos la lista UL
    let list = document.createElement("ul")

    //Leemos cada item del Array
    namesAray.forEach((name) => {
        //2. Creamos el elemento li
        let listItem = document.createElement("li")
        //3. Creamos el elemento Texto con los nombres del Array
        let itemText = document.createTextNode( name )

        //4. Insertamos dentro del elemento Li el Nombre
        listItem.appendChild( itemText)

        //5. Insertamos dentro del Ul cada elemento Li
        list.appendChild( listItem)
    })

    // Agregamos al body
    document.body.appendChild(list)

}

printList()

/*******************************************************/

let testArray = [
    {
        name:"Israel",
        phone:"5543788096",
        mail:"israel@kodemia.mx"
      },
      {
        name:"Hagen",
        phone:"N/A",
        mail:"hagen@kodemia.mx"
      }
]

const printTable = () => {
    let headersArray =[
        "Nombre",
        "Teléfono",
        "Mail"
    ]

    let dataTable = document.createElement("table")
    let dataHeader = document.createElement("thead")
    let headerRow = document.createElement("tr")

    headersArray.forEach( header => {
        let head = document.createElement("th")
        let headText = document.createTextNode(header)
        head.appendChild( headText )
        headerRow.appendChild(head)
    })

    dataHeader.appendChild( headerRow )
    dataTable.appendChild( dataHeader )
    document.body.appendChild( dataTable )

    let dataTableBody = document.createElement("tbody")

    testArray.forEach( item => {
        let itemRow = document.createElement( "tr" )
        
        let nameTd = document.createElement( "td" )
        let phoneTd = document.createElement( "td" )
        let mailTd = document.createElement( "td" )

        let nameText = document.createTextNode( item.name )
        let phoneText = document.createTextNode( item.phone )
        let mailText = document.createTextNode( item.mail )

        nameTd.appendChild( nameText )
        phoneTd.appendChild( phoneText )
        mailTd.appendChild( mailText )

        itemRow.appendChild(nameTd)
        itemRow.appendChild(phoneTd)
        itemRow.appendChild(mailTd)

        dataTableBody.appendChild( itemRow )
    })

    dataTable.appendChild(dataTableBody)
    // Para separar
    document.body.appendChild( document.createElement("br") )
}

printTable()


/*******************************************************/

var mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:5
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:6
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:7
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    }
]




const prinTableMentors = () => {

    //******* Inicio del tHead *******

    let mentorTable = document.createElement("table")
    let mentorHeader = document.createElement("thead")

    let headArray = ["Mentor", "Html", "CSS", "JS", "Promedio"]

    headArray.forEach((array) => {
        let headCol = document.createElement("th")
        let headText = document.createTextNode(array)

        headCol.appendChild(headText)
        mentorHeader.appendChild(headCol)
    })

    mentorTable.appendChild(mentorHeader)

    //******* Inicio del tBody *******

    let mentorBody = document.createElement("tbody")

    mentorsArray.forEach((array) => {

        // Creamos una funcion donde pasaremos el parametro de Signature (html, css, js)
        const getResults = (curso) =>{
            let puntuaciones = array.scores.reduce((accum,current) =>{
                if(current.signature === curso){
                    console.log(current.score)
                    accum = current.score
                }
                return accum
            }  ,0)
            return puntuaciones
        }

        // Con esto sacamos el promedio
        let avg = array.scores.reduce((accum,current) => {
            let avgTotal = accum + current.score
            return avgTotal
        },0)

 
        // Mandamos a llamar la funcion con los Parametros
        let HTMLVal = getResults("HTML")
        let CSSVal = getResults("CSS")
        let JSVal = getResults("JS")

        // Creamos el row que se creara para cada mentor
        let mentorRow = document.createElement("tr")

        // Obtenemos los valores en el DOM
        mentorCol.appendChild(document.createTextNode(array.name))
        HTMLCol.appendChild(document.createTextNode(HTMLVal))
        CSSCol.appendChild(document.createTextNode(CSSVal))
        JSCol.appendChild(document.createTextNode(JSVal))
        avgCol.appendChild(document.createTextNode(avg))

        // Creamos las columnas para cada score
        let mentorCol = document.createElement("td")
        let HTMLCol = document.createElement("td")
        let CSSCol = document.createElement("td")
        let JSCol = document.createElement("td")
        let avgCol = document.createElement("td")

        // Asignamos cada col al row
        mentorRow.appendChild(mentorCol)
        mentorRow.appendChild(HTMLCol)
        mentorRow.appendChild(CSSCol)
        mentorRow.appendChild(JSCol)
        mentorRow.appendChild(avgCol)

        mentorBody.appendChild(mentorRow)
    })
    
    // Metemos el tBody dentro del table
    mentorTable.appendChild(mentorBody)
    // Mandamos a llamar el Head al body
    document.body.appendChild(mentorTable)
}

prinTableMentors();


