
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


// Para obtener los valores del objeto Scores creamos una funcion

const getSignatureScore = (signature, scoresArray) => {
    let score =  scoresArray.filter( score => score.signature === signature )[0].score
    return score
}

const printTable = () => {

    mentorsArray.forEach((mentor, index) => {
        // creamos el tr donde staran contenidos los td
        let createdTr = document.createElement("tr")

        // creamos los td del contenido
        let createdTdIndex =  document.createElement("td")
        let createdTdName =  document.createElement("td")
        let createdTdHTML =  document.createElement("td")
        let createdTdCSS =  document.createElement("td")
        let createdTdJS =  document.createElement("td")
        let createdTdReact =  document.createElement("td")
        let createdTdAvg =  document.createElement("td")

        // *********** OBTENEMOS VALORES ***********

        // Obtenemos le nombre del Mentor
        let getMentorName = document.createTextNode(mentor.name)
        console.log('getMentorName:', getMentorName)

        // Obtenemos los scores con la funcion

        let getIndex =  document.createTextNode(index + 1) // Le ponemos +1 pq el index inicia con 0
        let getHTMLscore = document.createTextNode(getSignatureScore("HTML", mentor.scores))
        let getCSSscore = document.createTextNode(getSignatureScore("CSS", mentor.scores))
        let getJSscore = document.createTextNode(getSignatureScore("JS", mentor.scores))
        let getReactJSscore = document.createTextNode(getSignatureScore("ReactJS", mentor.scores))


        // *********** METEMOS VALORES A SUS TD ***********

        createdTdIndex.appendChild(getIndex)
        createdTdName.appendChild(getMentorName)

        createdTdHTML.appendChild(getHTMLscore)
        createdTdCSS.appendChild(getCSSscore)
        createdTdJS.appendChild(getJSscore)
        createdTdReact.appendChild(getReactJSscore)

        // Psamos los td con valores dentro del TR
        createdTr.appendChild(createdTdIndex)
        createdTr.appendChild(createdTdName)
        createdTr.appendChild(createdTdHTML)
        createdTr.appendChild(createdTdCSS)
        createdTr.appendChild(createdTdJS)
        createdTr.appendChild(createdTdReact)

        // Pasamos el Tr a TBody
        document.getElementById("tbody").appendChild(createdTr)
    })

}

printTable();