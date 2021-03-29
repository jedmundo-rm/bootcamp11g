/******** Funcion Normal *********/

function addNumbers(a, b){
    let result = a + b
    return result

    console.log("algo");
}

var someResult = addNumbers(9, 7) /**16*/

console.log(`Suma de dos numeros pasados por variables en funcion normal = ${someResult}`);


/******** Funcion Semi flecha - Return Implicito *********/

const myArrowFunction = (a, b) => {
    let result = a + b;
    return result

    // Si ponemos algo despues del result no se va a imprimir
    console.log("algo");
}

var someResult2 = myArrowFunction(8, 3);

console.log(`Semiflecha: Suma de dos numeros pasados por variables en funcion semiflecha = ${someResult2}`);


/******** Funcion flecha - Return Implicito *********/

const myArrowFunction2 = (a, b) => a + b;

var someResult3 = myArrowFunction(10, 2);

console.log(`Flecha: Suma de dos numeros pasados por variables en funcion flecha = ${someResult3}`);


/******** Arrays *********/

var kodersList = [
    [
        "Fernanda",
        "Palacios Vera"
    ],

    [
        "Jorge",
        "Ochoa"
    ],

    [
        "Naomi",
        "Puertos"
    ],

    [
        "Rubick",
        "Maqueo Poissot"
    ]
]

/*
    -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
*/

var ArrayLength = kodersList.length;
console.log(`El total del array es de ${ArrayLength}`)

var NewArray = []

const createnewArray = () => {

    for(let i = 0; i < kodersList.length; i++){
        console.log(kodersList[i]);
        console.log(kodersList[i].join(" "));
    }
}

createnewArray()

/********* Pasamos los Nombres en un nuevo Array *********/

const createNewArray2 = () => {
    let newArray = []

    for(i = 0; i < kodersList.length; i++){
        newArray.push(kodersList[i].join(" "))
    }

    return newArray
}

var joinedNames = createNewArray2()
console.log(joinedNames)

/********* Checamos el Nombre *********/

const checkName = name =>{
    for(i = 0; i < joinedNames.length; i++){
       let firstName = joinedNames[i].split(" ")[0]
       console.log(firstName)
       //firstName === name && true
       firstName === name && console.log("el nombre existe")
    }
}

checkName()
