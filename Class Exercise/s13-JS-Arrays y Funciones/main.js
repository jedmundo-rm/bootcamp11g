
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
    1.Tomar la lista
    2.Tomar el primer nombre de la lista
    3.divirlo en palabras
    4.tomar la primer palabra
    5.extraer el primer caracter
    -escribir el primer caracter
    6.agregarle ". "
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


/*************** ESTRUCTURA APRA ACCEDER AL PRIMER ITEM DEL ARRAY **************/

console.log("************ Parte Uno *************")

/*1*/
musicians[0]

/*2*/
console.log(musicians[0])

/*3*/
let dividedName = musicians[0].split(" ");
/*
    Nos crea un array llamado dividedName con los nombres del array Musicians
    dividedName = [
        "Gustavo",
        "Cerati"
    ]
*/
console.log(dividedName)

/* Array Vacio*/
let initials = ""

/*4*/
for(let i = 0; i < dividedName.length; i++){
    console.log(dividedName[i])

    /*5*/
    /*Con charAt tomamos el primer caracter usando [0], si usamos [1] nos mostrara el segundo caracter*/
    let initial = dividedName[i].charAt(0)
    console.log(initial)
    /*Exporta G*/
    /*Exporta C*/

    /*6*/
    initial += ". "
    console.log(initial)
    /*Exporta G.*/
    /*Exporta C.*/

    /*7*/
    /*Agregamos las inciales en un string vacio. Para esto hay que declararlo fuera de mi for para que no se este reseteando*/
    initials += initial
    console.log(initials)
    /*Exporta G. C.*/
}

/*************** FUNCTION PARA ACCEDER A TODOS LOS ITEMS DEL ARRAY **************/

/*************** Para esto encerramos todo lo anterior que hicimos en un for **************/

console.log("************ Parte Dos *************")

for(let i = 0; i < musicians.length;  i ++){
    /*3*/
    let dividedName = musicians[i].split(" ");
    /*
        Nos crea un array llamado dividedName con los nombres del array Musicians
        dividedName = [
            "Gustavo",
            "Cerati"
        ]
    */
    console.log(dividedName)

    /* Array Vacio*/
    let initials = ""

    /*4*/
    for(let i = 0; i < dividedName.length; i++){
        console.log(dividedName[i])

        /*5*/
        /*Con charAt tomamos el primer caracter usando [0], si usamos [1] nos mostrara el segundo caracter*/
        let initial = dividedName[i].charAt(0)
        console.log(initial)
        /*Exporta G*/
        /*Exporta C*/

        /*6*/
        initial += ". "
        console.log(initial)
        /*Exporta G.*/
        /*Exporta C.*/

        /*7*/
        /*Agregamos las inciales en un string vacio. Para esto hay que declararlo fuera de mi for para que no se este reseteando*/
        initials += initial
        console.log(initials)
        /*Exporta G. C.*/
    }
}


/*************** FUNCTION PARA ACCEDER A TODOS LOS ITEMS DEL ARRAY CON FUNCION **************/

/*************** Para esto encerramos todo lo anterior en una funcion **************/

console.log("************ Parte Tres *************")

function getInitials(fullName){

    for(let i = 0; i < fullName.length;  i ++){
        /*3*/
        let dividedName = fullName[i].split(" ");
        /*
            Nos crea un array llamado dividedName con los nombres del array Musicians
            dividedName = [
                "Gustavo",
                "Cerati"
            ]
        */
        console.log(dividedName)
    
        /* Array Vacio*/
        let initials = ""
    
        /*4*/
        for(let i = 0; i < dividedName.length; i++){
            console.log(dividedName[i])
    
            /*5*/
            /*Con charAt tomamos el primer caracter usando [0], si usamos [1] nos mostrara el segundo caracter*/
            let initial = dividedName[i].charAt(0)
            console.log(initial)
            /*Exporta G*/
            /*Exporta C*/
    
            /*6*/
            initial += ". "
            console.log(initial)
            /*Exporta G.*/
            /*Exporta C.*/
    
            /*7*/
            /*Agregamos las inciales en un string vacio. Para esto hay que declararlo fuera de mi for para que no se este reseteando*/
            initials += initial
            console.log(initials)
            /*Exporta G. C.*/
        }
    }
}

getInitials(writers);

/*
Imprime cada item del Array dividedName:
Gustavo Cerati
*/

/*
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
*/

