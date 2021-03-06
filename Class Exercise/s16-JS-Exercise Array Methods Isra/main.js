/*
usando mentorsArray, realizar lo siguiente:
-Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
-Obtener el promedio individual de cada mentor
-Obtener un array de strings con la siguiente forma:
     "Mi nombre es {nombre} y mi promedio es de {promedio}"
-Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

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
                score:8
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
                score:10
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
                score:9
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
                score:10
            }
        ]
    }
]

/*Función para obtener el promedio de una materia específica ( materia )*/
const getAverage = (materia) => {

    let totalMateria = mentorsArray.reduce( ( accum, current ) => {
        /*Extraemos de cada mentor el objeto cuya propiedad "signature" coincide con nuestro parámetro "materia"*/

        let puntuacionMateria = current.scores.find( score => score.signature === materia ).score /*Extraemos la propiedad score del objeto encontrado*/

        return accum +  puntuacionMateria /*Acumulamos el valor de score*/
    },0)
    /*obtenemos el promedio*/
    let average = totalMateria / mentorsArray.length
    /*devolvemos el promedio*/
    return average
}


let htmlAverage = getAverage( "HTML" )
console.log( "htmlAverage: ", htmlAverage  )

let cssAverage = getAverage( "CSS" )
console.log( "cssAverage: ", cssAverage  )

let jsAverage = getAverage( "JS" )
console.log( "jsAverage: ", jsAverage  )

let reactAverage = getAverage( "ReactJS" )
console.log( "reactAverage: ", reactAverage  )

const getMentorAverage = (mentorName) => {
    let mentorScores = mentorsArray.find( (mentor) => {
        return mentor.name === mentorName
    }).scores
    let mentorAverage = mentorScores.reduce( ( accum, current ) => {
        return accum + current.score
    },0 ) / mentorScores.length

    console.log( "mentorAverage: ", mentorAverage)

    return mentorAverage
}

//getMentorAverage("Israel Salinas Martinez")
//getMentorAverage("David Cermeño Moranchel")


const createLabelsArray = () => {
    let labelsArray = mentorsArray.map( mentor => {
        return `Hola, soy ${mentor.name} y mi promedio es de ${ getMentorAverage(mentor.name) }`
    })
    console.log( labelsArray )
}

//createLabelsArray()

const getBestMentors = () => {
    let result = mentorsArray.filter( mentor =>
        getMentorAverage( mentor.name ) > 9
    )
    console.log( result )
}

//getBestMentors() 


/*
someArray.forEach( (item,index) => {
    console.log(`el item número ${index} es: ${item}`)
    console.log( typeof item )
    item.forEach( element => {
        console.log( element )
    } )
})
*/

let fruits = [
    "mango",
    "uva",
    "pera"
]

console.log("*********** MAP ************")

/*Funcion Larga*/
let result = fruits.map(listMap)

function listMap (fruit, index ) {
    return `${index} ${fruit}`;
}

/*Funcion Semilarga*/
/*
let result = fruits.map( function(fruit, index ) {
    return `${index} ${fruit}`;
})
*/

/*Funcion Corta*/
/*
let result = fruits.map( (fruit, index ) => `${index} ${fruit}`)
*/

console.log( result )


console.log("*********** MAP con REDUCE ************")

/*Funcion Larga*/
let resultR = fruits.reduce(showObjects,[])

function showObjects (accum, current, index ) {
    return [...accum, `${index} ${current}`];
}

/*Funcion Semilarga*/
/*
let resultR = fruits.reduce( function(accum, current, index ) {
    return [...accum, `${index} ${current}`];
},[])
*/

/*Funcion Corta*/
/*
let resultR = fruits.reduce( (accum, current, index ) => [...accum, `${index} ${current}`], [])
*/

console.log( resultR )


console.log("*********** FILTER ************")

/*Funcion Larga*/
let filtered = fruits.filter(filterFruit)

function filterFruit(fruit, index){
    return fruit.charAt(0) === "p" 
}

/*Funcion Semilarga*/
/*
let filtered = fruits.filter(function(fruit, index) {
    return fruit.charAt(0) === "p" 
})
*/

/*Funcion Corta*/
/*
let filtered = fruits.filter( (fruit, index) => fruit.charAt(0) === "p" )
*/

console.log( filtered )


console.log("*********** FILTER con REDUCE ************")


/*Funcion Semilarga*/
let filteredR = fruits.reduce( function (accum, current, index){
    return current.charAt(0) === "m" ? [...accum, current] : accum
}, [])


/*Funcion Corta*/
/*
let filteredR = fruits.reduce( (accum, current, index) => current.charAt(0) === "p" ? [...accum, current] : accum, [])
*/

console.log( filteredR)


