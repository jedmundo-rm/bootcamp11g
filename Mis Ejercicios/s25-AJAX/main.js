
// https://database-d9257-default-rtdb.firebaseio.com/11g/israel/mentors/.json
// https://ajaxclass-1ca34.firebaseio.com/11g/jaime/mentors.json

// Metodos de objetos
// Object.keys() => devuelve un array con las llaves de un objeto
// Object.values() => devuelve un araray con los values de cada llave
// Object.entries => devuelve un array bidimencional, pone las llaves y los valores del objeto

// for( key in object){}

const getMentors = () => {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           let mentors = JSON.parse(xhttp.responseText);

           console.log('mentors:', mentors)

           /*console.log( Object.keys(mentors))
           console.log( Object.values(mentors))
           console.log( Object.entries(mentors))*/

           Object.values(mentors).forEach((mentor) => {
               console.log(mentor)

               console.log(mentor.name)
           })

           for( key in mentors) {
               console.log('key:', key)
               console.log(mentors[key])
           }
        }
    };

    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/mentors.json", true);
    xhttp.send();
}

//getMentors();


///////////// EJERCICIO SIMPLE QUE DEMUESTRA COMO SE PUEDEN PASAR
///////////// LOS VALORES DE UN ARRAY A UNA BASE DE DATOS 

let mentor = {
    name: "Jaime",
    age: "36",
    phone: "5534521378"
}

////////// MENTOR CRATION /////////////

const saveMentor = () => {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           let response = JSON.parse(xhttp.responseText);

           console.log('response:', response)
        }
    };

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/mentors.json", true);
    xhttp.send(JSON.stringify(mentor));
}

////////// MENTOR DELETE /////////////

const deleteMentor = mentorKey => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }

    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/mentors/${mentorKey}.json`, true);

    xhttp.send( );
}


//////////////////// EJERCICO PARA GUARDAR KODERS (MIO DE MI) //////////////////

////////// KODER FUNCTION CRATION /////////////

const getKoderData = () => {

    let koderObject = {}

    let fields = document.querySelectorAll("form input[type='text']")
    console.log('fields:', fields)

    fields.forEach((field) => {

        //console.log(field.name)

        koderObject[field.name] = field.value
        
        //console.log(koderObject)

        let select = document.getElementById("gender")
        let gender = select.options[select.selectedIndex].value
        //console.log('gender:', gender)

        //koderObject.gender = gender
        koderObject = {...koderObject, gender}
        console.log('koderObject:', koderObject)
    })

    // Depues creamos la funcion para mandar a la base de datos y aqui es onde la ejecutamos
    saveKoder( koderObject )

    // Una vez guardado limpiamos los campos
    fields.forEach((field) => {
        field.value = ""
    })
}

// Asigamos la fucion al boton
document.getElementById("guardar").addEventListener("click", getKoderData)


////////// KODER CREATION /////////////

// Creamos la funcion para mandar a la base de datos
const saveKoder = (koder) => {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           //let response = JSON.parse(xhttp.responseText);

           console.log('response:', xhttp.response)

           // GUARDADO EXITOSO
           // Volvemos a imprimir la tabla para mostrar el nuevo valor guardado
           // pq en la funcion en si la limpiamos 
           printTable( getKodersCollection() )
        }
    };

    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/koders.json", true);
    // lo parseamos de JSON a String
    xhttp.send( JSON.stringify(koder) );
}


////////// KODER OBJECT DELETE /////////////

// esto de creo pq en un principio em guardaba en la DB paso pos paso de la creacion de Koder
// entonces se creo esta funcion apra borrar todo el objeto y no koder por koder

// Para borrar todo el objeto Koders
const deleteKoderObj = () => {
    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )
        }
    }

    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/koders.json`, true);

    xhttp.send( );
}


////////// GET KODER FOR PRINT /////////////

const getKodersCollection = () => {

    let kodersCollection;

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log(xhttp.response)

           kodersCollection = JSON.parse( xhttp.response )
        }
    }

    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/koders.json", false);
    // Aqui queda vacio pq no estamos mandando nada, solo vamos a obtener datos
    xhttp.send();

    // tenemos que esperar para que cargue la peticion a la BD cargue o bien cambiamos el true por false en la parte de arriba
    // setTimeout(function() {
    //     console.log('kodersCollection:', kodersCollection)
    // }, 1000)

    return kodersCollection
    
}


////////// DELETE KODER /////////////
////////// Se pone antes de la funcion print pq si no no puede inicializar /////////////

const deleteKoderPrinted = event => {
    console.log(event.target)

    let koderKey = event.target.dataset.koderKey
    console.log('koderKey:', koderKey)

    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )

            // mandamos a imprimir de nuevo al tabla para mostrar el resultado sin el koder borrado
            printTable(getKodersCollection())
        }
    }

    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/koders/${koderKey}.json`, true);
    xhttp.send( );
  }


////////// PRINT KODER /////////////

const printTable = (dataPrint) => {

    console.log('dataPrint:', dataPrint)

    let table = document.getElementById("koders-table")
    let index = 1

    // Para limpar la tabla
    while(table.lastElementChild){
        table.removeChild(table.lastElementChild)
    }

    for( key in dataPrint){
        console.log('key:', key)
        console.log('dataPrint:', dataPrint[key])

        let koderRow = document.createElement("tr")

        let indexTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let lastNameTd = document.createElement("td")
        let phoneTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let genderTd = document.createElement("td")

        let deleteTd = document.createElement("td")

        // En el input del apellido usamor last-name y aqui en la variable usamos lastName (esto no debe ser asi)
        // Deben ser iguales lastname en el name del input y en lastname en la variable
        let {name, lastname, phone, age, gender} = dataPrint[key]
        
        let indextext =  document.createTextNode(index)
        let nameText = document.createTextNode(name)
        let lastNameText = document.createTextNode(lastname)
        let phoneText = document.createTextNode(phone)
        let ageText = document.createTextNode(age)
        let genderText = document.createTextNode(gender)

        let deleteBtn = document.createElement("button")
        deleteBtn.classList = "btn btn-outline-danger delete-btn"
        let buttonText = document.createTextNode("Delete")
        deleteBtn.appendChild(buttonText)
        deleteBtn.dataset.koderKey = key

        indexTd.appendChild(indextext)
        nameTd.appendChild(nameText)
        lastNameTd.append(lastNameText)
        phoneTd.appendChild(phoneText)
        ageTd.appendChild(ageText)
        genderTd.appendChild(genderText)
        deleteTd.appendChild(deleteBtn)

        koderRow.appendChild(indexTd)
        koderRow.appendChild(nameTd)
        koderRow.appendChild(lastNameTd)
        koderRow.appendChild(phoneTd)
        koderRow.appendChild(ageTd)
        koderRow.appendChild(genderTd)
        koderRow.appendChild(deleteTd)

        table.appendChild(koderRow)
        index++
    }

    // Seleccionamos todos los botones de delete y por cada uno mandamos a llamar la funcion de delete
    let buttons = document.querySelectorAll(".delete-btn")

    buttons.forEach(button => {
        button.addEventListener("click", deleteKoderPrinted)
    })
}

printTable( getKodersCollection() )

