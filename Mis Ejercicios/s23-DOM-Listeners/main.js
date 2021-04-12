

let listItems = document.querySelectorAll("#koders-list li")

listItems.forEach((item) => {
    item.classList.add("list-group-item")
})

// Preguntar pq esto no sirve
//let listItems2 = document.getElementsByTagName("ul")
//listItems2.className = "bg-danger"

let notesArray = [
    {
        signature: "Espaniol",
        note: 8
    },
    {
        signature: "Matematicas",
        note: 7
    },
    {
        signature: "Historia",
        note: 8.5
    },
    {
        signature: "Fisica",
        note: 9
    }
]

// colocar el siguiente array en un list

const addItem = (signature, note) => {

    // Seleccionamos la UL
    let ulElem = document.getElementById("notes-list")
    // creamos un elemento Li
    let liElem = document.createElement("li")
    liElem.classList.add("list-group-item")

    //  De ejemplo temporal: agregamos este texto
    //let getArrName = document.createTextNode("Matematicas: 10")
    let getArrName = document.createTextNode(`${signature}: ${note}`)

    // Metemos el valor al Li
    liElem.appendChild(getArrName)

    // Esto es para cambiar el bg de los Li segun su puntaje
    // if(note > 8){
    //     liElem.classList.add("bg-success")
    // }else{
    //     liElem.classList.add("bg-warning")
    // }

    //metodo if reducido
    note >= 8 ? liElem.classList.add("bg-success") : liElem.classList.add("bg-warning")

    // Metemos el Li al Ul
    ulElem.appendChild(liElem)
}

// Por cada objeto del Array ejecutamos la funcion para meterle los parametros de materia y score alamcenados en Scores
notesArray.forEach((note) => {
    addItem(note.signature, note.note)
})


////////////////////// EXTRA ///////////////////

// Funcion para conocer califiaciones mas bajas
// Aqui ya se esta imprimiendo los li con la calse bg-warning por lo tanto podemos hacer uso de ella para detectar las calificaciones mas bajas
 const lowerScores = () => {
    let findClass = document.querySelectorAll(".bg-warning").length
    console.log('findClass:', findClass)
    return findClass;
 }

 lowerScores();

 document.getElementById("button").addEventListener("click", lowerScores)