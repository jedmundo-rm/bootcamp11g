/*
Este array dentro de un ul
namesArray=[
    "Jaime",
    "Beto",
    "Mariana"
]
*/

const namesArray = [
    "Jaime",
    "Beto",
    "Mariana"
]

const printList = () => {
    let getElemUl = document.createElement("ul")

    //forEach no regresa nada
    let readNames = namesArray.forEach((name) => {

        // creamos el elemento li
        let getElemLi = document.createElement("li")

        // creamos los nodos de texto a traves de la variable name (el cual lee cada elemento del array y lo imprime)
        let getNames = document.createTextNode(name)

        // encerramos los nombres en un elemento li
        getElemLi.appendChild(getNames)

        // metemos el elemento li en un ul
        getElemUl.appendChild(getElemLi)

        console.log('getElemLi:', getElemLi)

    })

    // metemos el elemento ul en el body
    document.body.appendChild(getElemUl) 
}

printList();
