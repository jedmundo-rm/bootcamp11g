
document.getElementById("my-input").addEventListener("keyup", function(event){
    console.log(event)
    console.log(event.target)

    let value = event.target.value
    console.log('value:', value)

    document.getElementById("my-heading").innerText = value

})

/////////////////////////////////////////////////////////////////

// Con esta forma creamos un listener pero por cada boton por medio de su ID
// No es recomendable pq tendriamos que hacer un listener por cada boton

// document.getElementById("button-1").addEventListener("click", function(event){
//     console.log(event.target.innerText)
// })

// document.getElementById("button-2").addEventListener("click", function(event){
//     console.log(event.target.innerText)
// })

// Un listener apra gobernarlos a todos
// Seleccionamos todos los botones con la clase especifica
let buttons = document.querySelectorAll(".test-btn")
console.log('buttons:', buttons)

buttons.forEach((button) => {
    //console.log('button:', button)
    button.addEventListener("click", function(event){

        // con esto vemos el texto interno del elemento con el atributo personalizado
        console.log(event.target.innerText)

        // Accedemos al valor personalizado llamado en el HTML data-custom-key 
        let customKey = event.target.dataset.customKey
        console.log('customKey:', customKey) // al escribir el valor tenemos que hacerlo de la forma CamelCase
    })
})

////////////////////////////////////////////////////////////////////

let koderList = []

const getKoderName = () => {
    let koderName = document.getElementById("koder-name").value
    console.log('koderName:', koderName)

    // Con esto metemos el valor del input en un Array
    // if(koderName === ""){

    }else{
       koderList.push(koderName) 
       console.log('koderList:', koderList)
    }

    // Lo anterior a una sola linea (operador ternario)
    // koderName !== "" ?  koderList.push(koderName) : ""
    
    // con esto detectamos el ultimo elemento hijo dentro del UL y lo borramos
    // esto esta en DOM por lo tanto no afecta en el HTML
    // lo borramos dle DOM para que no mande a imprimir todo el arrayy generado
    let ulElement = document.getElementById("koders-list")

    // mientras haya un ultimo elemento en un contenedor
    while(ulElement.lastElementChild){
        ulElement.removeChild( ulElement.lastElementChild )
    }


    // ejecutamos la funcion para imprime en la lista
    printKodersList();

    // borramos lo que ya se haya escrito en el input
    document.getElementById("koder-name").value = ""

}

// creamos un listener al boton para ejecutar la funcion que impriira el value del input
document.getElementById("save-koder").addEventListener("click", getKoderName)


const printKodersList = () => {
    koderList.forEach((koder) => {
        // Creamos un li para contener los koders
        let listItem = document.createElement("li")
        // Creamos el nodo de texto del valor de los item del array
        let textItem = document.createTextNode(koder)
        // metemos en los li creados el nombre de los koders
        listItem.appendChild(textItem)
        // le agremaos de paso ya una clase al list item
        listItem.classList.add("list-group-item")
        // Lo metemos al ul
        document.getElementById("koders-list").appendChild(listItem)
    })
}



