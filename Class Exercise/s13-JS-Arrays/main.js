
/*Teniendo en cuenta la siguiente lista de músicos, imprimir únicamente las inciciales de cada músico
    input Gustavo Cerati
    output G. C.
*/


let musicians = [
    "Gustavo Cerati",
    "Juan Valdivia",
    "Roy Orbison"
]

let painters = [
    "Vincent Van Gogh",
    "Diego Rivera",
    "Remedios Varo"
]

let writers = [
    "Howard Philips Lovecraft",
    "Anne Rice",
    "Isaac Asimov",
    "José Saramago"
]


/*
    -Tomar la lista
    -Tomar el primer nombre de la lista
    -divirlo en palabras
    -tomar la primer palabra
    -extraer el primer caracter
    -escribir el primer caracter
    -agregarle ". "
    -revisar si hay siguiente palabra
        si hay, 
            tomar la siguiente palabra
            extraer el primer caracter
            escribir el primer caracter
            agregarle ". "
        si no hay
            tomar el siguiente nombre en la lista
            repetir
*/

function getInitials( fullName ){
    console.log( fullName )
    let dividedName = fullName.split(" ")
    
    let initials = "";
    for( let i = 0; i < dividedName.length; i++ ){
        let word = dividedName[i]
        //console.log( dividedName[i] )
        let initial = word.charAt(0)
        //console.log( initial )
        initial += ". "
        //console.log( initial )
        initials += initial
        console.log( initials )
    }
}

function printInitials( namesArray ){
    for( let i = 0; i < namesArray.length; i++){
        getInitials( namesArray[i] )
    }
}

printInitials( musicians )
printInitials( painters )
printInitials( writers )

