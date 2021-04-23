// AUN NO FUNCIONA EL EDIT

// PREGUNTAR COMO HACER EL SELECT LIST EDITABLE EN LA MODAL
// PREGUNTAR COMO FCUNIONA EL WHILE

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

getMentors();


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

    // Seleccionamos todos los input apra sacarles el valor name
    let fields = document.querySelectorAll("form input[type='text']")
    console.log('fields:', fields)

    fields.forEach((field) => {

        //console.log(field.name)

        koderObject[field.name] = field.value
        
        //console.log(koderObject)

        let select = document.getElementById("gender")
        let genderVal = select.options[select.selectedIndex].value
        //console.log('gender:', gender)

        //koderObject.gender = gender
        koderObject = {...koderObject, genderVal}
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


////////// KODER CREATION in DB /////////////

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
           printTable( getKoders() )
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


////////// GET KODER IN DB FOR PRINT /////////////

const getKoders = () => {

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

    // Recordar obetener el data del boton delete
    let koderKey = event.target.dataset.koderKey
    console.log('koderKey:', koderKey)

    let xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let response = xhttp.responseText
            console.log( response  )

            // mandamos a imprimir de nuevo al tabla para mostrar el resultado sin el koder borrado
           printTable(getKoders())
        }
    }

    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/koders/${koderKey}.json`, true);
    xhttp.send( );
  }

////////// EDIT KODER /////////////

const editKoderPrinted = event => {
    
    // aqui obtenemos la key
    let getKoderKey = event.target.dataset.koderKey
    
    // asignamos la key al boton de Save Changes que esta en la ventana modal
    // para editar el objeto que le corresponde
    document.getElementById("save-changes").dataset.getKoderKey = getKoderKey
    
    console.log('getKoderKey:', getKoderKey)
    
    // mostramos la modal
    $("#edition-modal").modal("show")

    //  Creamos el llamado del GET para obtener los valores del objeto
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.response)
            
            let koder = JSON.parse( xhttp.response )
            
            Object.keys( koder ).forEach( key => {
                // trae la key del objeto: nombre, apellido, phone y age 
                console.log('key:', key)

                // esto imprime los elementos input 
                //console.log( document.querySelector(`#edition-modal input[name=${key}]`) )
                document.querySelector(`#edition-modal input[name=${key}]`).value = koder[key]
            }) 

           //console.log( document.querySelector(`#edition-modal input[name="name"]`) )
           // con esto comprobamos que si podamos ingresar a uno de los campos y cambiar el valor
           //document.querySelector(`#edition-modal input[name="name"]`).value = "algun nombre"
        }
    }

    xhttp.open("GET", `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/koders/${getKoderKey}.json`, false);
    // Aqui queda vacio pq no estamos mandando nada, solo vamos a obtener datos
    xhttp.send();
}


const saveChanges = (event) => {

    // Creamos la llave 
    // AQUI ES IMPORTANTE COLOCAR EN EL DATA SET LA VARIABLE getKoderKey !!!!!!!!!!!!!!  (No como en el updateData que declaramos el dataset)
    let getKoderKey = event.target.dataset.getKoderKey

    let editedObject = {}

    document.querySelectorAll("#edition-modal input").forEach(input => {
        editedObject[input.name] = input.value
    })

    //  Creamos el llamado del GET para obtener los valores del objeto
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           console.log(xhttp.response)

           let response = JSON.parse( xhttp.response )
           console.log('response:', response)

            // mandamos a imprimir de nuevo al tabla para mostrar el resultado sin el koder borrado
            printTable(getKoders())

            // escondemos el modal
            $("#edition-modal").modal("hide")
        }
    }

    xhttp.open("PUT", `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/koders/${getKoderKey}.json`, false);
    // Aqui queda vacio pq no estamos mandando nada, solo vamos a obtener datos
    xhttp.send(JSON.stringify(editedObject));
}

document.getElementById("save-changes").addEventListener("click", saveChanges)



////////// PRINT KODER /////////////

// El parametro podemos llamarlo como sea, pero hace referencia a la coleccion guardada en el objeto creado en el GET (podemos llamarlo igual que el objeto)
const printTable = (dataPrint) => {

    console.log('dataPrint:', dataPrint)

    let table = document.getElementById("koders-table")
    let index = 1

    // Para limpar la tabla
    while(table.lastElementChild){
        table.removeChild(table.lastElementChild)
    }

    // for / llave (key en el database) / objeto (que es el parametro asignado)
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
        let editTd = document.createElement("td")

        // En el input del apellido usamor last-name y aqui en la variable usamos lastName (esto no debe ser asi)
        // Deben ser iguales lastname en el name del input y en lastname en la variable
        // Estos valores tienen relacion con los valores declarados en la primera funcion de Obtencion de Datos
        let {name, lastname, phone, age, genderVal} = dataPrint[key]
        
        let indextext =  document.createTextNode(index)
        let nameText = document.createTextNode(name)
        let lastNameText = document.createTextNode(lastname)
        let phoneText = document.createTextNode(phone)
        let ageText = document.createTextNode(age)
        let genderText = document.createTextNode(genderVal)

        let deleteBtn = document.createElement("button")
        deleteBtn.classList = "btn btn-outline-danger delete-btn"
        let deleteText = document.createTextNode("Delete")
        deleteBtn.appendChild(deleteText)
        deleteBtn.dataset.koderKey = key

        let editBtn = document.createElement("button")
        editBtn.classList = "btn btn-outline-primary edit-btn"
        let editText = document.createTextNode("Edit")
        editBtn.appendChild(editText)
        editBtn.dataset.koderKey = key


        indexTd.appendChild(indextext)
        nameTd.appendChild(nameText)
        lastNameTd.append(lastNameText)
        phoneTd.appendChild(phoneText)
        ageTd.appendChild(ageText)
        genderTd.appendChild(genderText)
        deleteTd.appendChild(deleteBtn)
        editTd.appendChild(editBtn)

        koderRow.appendChild(indexTd)
        koderRow.appendChild(nameTd)
        koderRow.appendChild(lastNameTd)
        koderRow.appendChild(phoneTd)
        koderRow.appendChild(ageTd)
        koderRow.appendChild(genderTd)
        koderRow.appendChild(deleteTd)
        koderRow.appendChild(editTd)

        table.appendChild(koderRow)
        index++
    }

    // Seleccionamos todos los botones de delete y por cada uno mandamos a llamar la funcion de delete
    let buttonsDel = document.querySelectorAll(".delete-btn")

    buttonsDel.forEach(button => {
        button.addEventListener("click", deleteKoderPrinted)
    })


    // Seleccionamos todos los botones de delete y por cada uno mandamos a llamar la funcion de delete
    let buttonsEdit = document.querySelectorAll(".edit-btn")

    buttonsEdit.forEach(button => {
        button.addEventListener("click", editKoderPrinted)
    })
}

printTable( getKoders() )

// si llegamos a llamar la funcion deleteData() desde aqui, solo va a borrar una vez el objeto al que demos click a su boton delete 
// ya que el DOM solo lo estamos cargando una vez Ej. Si tenemos dos cards al cargar la pagina y creamos uno nuevo (una tercera card), esta tercera card no esta cargada en el DOM 
// por lo tanto al dar click en el boton borrar no va a pasar nada. Pero si damos un refresh y damos click al boton ahora si lo va a borrar, esto pq despues del refresh esta tercera card ya existe en el DOM

// let buttons = document.querySelectorAll(".delete-btn")

// buttons.forEach(button => {
//     button.addEventListener("click", deleteKoderPrinted)
// })

