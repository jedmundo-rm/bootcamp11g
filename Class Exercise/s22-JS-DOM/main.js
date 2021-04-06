

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




const prinTable = () => {

    //******* Inicio del tHead *******

    let mentorTable = document.createElement("table")
    let mentorHeader = document.createElement("thead")

    let headArray = ["Mentor", "Html", "CSS", "JS", "Promedio"]

    headArray.forEach((array) => {
        let headCol = document.createElement("td")
        let headText = document.createTextNode(array)

        headCol.appendChild(headText)
        mentorHeader.appendChild(headCol)
    })

    mentorTable.appendChild(mentorHeader)

    // Mandamos a llamar el Head al body
    document.body.appendChild(mentorTable)


    //******* Inicio del tBody *******

    let mentorBody = document.createElement("tbody")
    
    mentorsArray.forEach((array) => {
        let mentorRow = document.createElement("tr")
        let mentorCol = document.createElement("td")

        let htmlScoreCol = document.createElement("td")
        let cssScoreCol = document.createElement("td")
        let jsScoreCol = document.createElement("td")
        let reactScoreCol = document.createElement("td")

        let mentorName = document.createTextNode(array.name)
        mentorCol.appendChild(mentorName)
        mentorRow.appendChild(mentorCol)

        const getScore = (curso) => {
            let puntuaciones = array.scores.reduce((accum, current) => {
                
                if(current.signature !== curso){
                    return current.score
                }
            }, 0)
            return puntuaciones
            //console.log(puntuaciones)  
        }
        
        let htmlScore = document.createTextNode(getScore("HTML"))
        let cssScore = document.createTextNode(getScore("CSS"))
        let jsScore = document.createTextNode(getScore("JS"))
        let reactScore = document.createTextNode(getScore("REACT"))


        htmlScoreCol.appendChild(htmlScore)
        mentorRow.appendChild(htmlScoreCol)

        cssScoreCol.appendChild(cssScore)
        mentorRow.appendChild(cssScoreCol)

        jsScoreCol.appendChild(jsScore)
        mentorRow.appendChild(jsScoreCol)

        reactScoreCol.appendChild(reactScore)
        mentorRow.appendChild(reactScoreCol)

        mentorBody.appendChild(mentorRow)  
    })

    // mentorsArray.forEach((array) => {
    //     let scoresRow = document.createElement("tr")
    //     let scoresCol = document.createElement("td")

    //     let mentorScores = document.createTextNode(array.score)

    //     console.log(mentorScores)

    //     scoresCol.appendChild(mentorScores)
    //     scoresRow.appendChild(scoresCol)
    //     mentorBody.appendChild(scoresRow)
    // })

        // Metemos el tBody dentro del table
        mentorTable.appendChild(mentorBody)

        document.body.appendChild(mentorTable)
}

prinTable();





