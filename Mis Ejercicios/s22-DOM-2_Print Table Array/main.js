let testArray = [
    {
       name: "Jaime",
        phone: "553452137",
        mail: "jedmundo.rm@gmail.com"     
    },
    {
        name: "Ricardo",
         phone: "55548475",
         mail: "rchard.rm@gmail.com"     
     }
]


const printTable = () => {
    // Definimos los encabezados
    let getHeaders = [
        "Name",
        "Phone",
        "Mail"
    ]
    // primero imprimimos una tabla
    let createdTable = document.createElement("table")
    let createdTheader = document.createElement("thead")
    // Creamod el tr que contendra los Headers
    let createdTr = document.createElement("tr")

    // Sacamos los valores del Array
    getHeaders.forEach((head) => {
        // Creamod el th que contendra los Headers
        let createdTh = document.createElement("th")

        let getHeaders = document.createTextNode(head)
        //console.log('headers:', headers)

        // Ebncerramos los textos en un td
        createdTh.appendChild(getHeaders)
        //console.log('createdTh:', createdTh)

        createdTr.appendChild(createdTh)
        
    })

    createdTheader.appendChild(createdTr)
    createdTable.appendChild(createdTheader)
    document.body.appendChild(createdTable)

    // Ahora vamos con el tBody

    let createdTBody =  document.createElement("tbody")

    // lo que definamos dentro de este forEach lo hara por cada uno d elos objetos que vaya recorriendo
    testArray.forEach((object) => {
        // Creamsos los tr que contendran los td
        let createdTrObject = document.createElement("tr")

        // creamos los td de cada item del objeto
        let createdTdName = document.createElement("td")
        let createdTdPhone = document.createElement("td")
        let createdTdMail = document.createElement("td")

        // sacamos los valores de los items
        let getName = document.createTextNode(object.name)
        let getPhone = document.createTextNode(object.phone)
        let getMail = document.createTextNode(object.mail)

        // insertamos los valores en cada td
        createdTdName.appendChild(getName)
        createdTdPhone.appendChild(getPhone)
        createdTdMail.appendChild(getMail)

        // metemos los td en la fila
        createdTrObject.appendChild(createdTdName)
        createdTrObject.appendChild(createdTdPhone)
        createdTrObject.appendChild(createdTdMail)
        
        // metemos el tr en el tbody
        createdTBody.appendChild(createdTrObject)
    })

    createdTable.appendChild(createdTBody)

}

printTable();
