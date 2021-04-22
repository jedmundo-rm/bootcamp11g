// PREGUNTAR COMO PASAR LA LINEA 149 A JQUERY

/*Object.keys( objeto ) => devuelve un array con las llaves del objeto */
/*Object.values( objeto ) => devuelve un array con los values de cada llave del objeto */
/*Object.entries( objeto ) => devuleve un array bidimensional con las llaves y los valores del objeto */

/*for( key in object){}*/


////////////////////////////////////////////////////////////////////////////

//////////////////// EJERCICO PARA GUARDAR KODERS (MIO DE MI) //////////////////

////////// CAR FUNCTION CRATION /////////////

const getCarData = () => {

    let carObject = {}

    // Seleccionamos todos los input apra sacarles el valor name
    $("form input").each(function (field) {
        let property = this.name
        console.log('property:', property)

        let value = this.value

        carObject[property] =  value
        
        //console.log(carObject)

        let select = document.getElementById("trans")
        let trans = select.options[select.selectedIndex].value
        //console.log('trans:', trans)

        //carObject.trans = trans
        carObject = {...carObject, trans}
        console.log('carObject:', carObject)
    })

    // Despues creamos la funcion para mandar a la base de datos y aqui es onde la ejecutamos
    saveCar( carObject )

    // Una vez guardado limpiamos los campos
    $("form input").val(" ");
}

$('#guardar').click(getCarData)

////////// CAR CREATION in DB /////////////

// Creamos la funcion para mandar a la base de datos

const saveCar = (car) => {

    /////////// JQUERY AJAX ////////////

    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars.json",
        // data: JSON.stringify({
        //     brand: "Nissan",
        //     model: "March",
        //     trans: "manual"
        // }),
        data: JSON.stringify(car),
        success : response => {

            // GUARDADO EXITOSO
            // Volvemos a imprimir la tabla para mostrar el nuevo valor guardado
            // pq en la funcion en si la limpiamos 
            printCars( getCars() )

            console.log(response)
        },
        error : error => {
            console.log(error)
        }
    })
}

////////// GET CARS in DB FOR PRINT /////////////

const getCars = () => {

    /////////// JQUERY AJAX ////////////

    let dbData;

    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars.json",
        success: response => {
            console.log(response)
            dbData = response
        },
        async: false,
        error: error => {
            console.log(error)
        }
    })

    return dbData;

}

//getCars()

////////// DELETE CAR /////////////
////////// Se pone antes de la funcion print pq si no no puede inicializar /////////////

const deleteData = event => {

    console.log(event.target)

    // Recordar obetener el data del boton delete
    let getCarKey = event.target.dataset.carkey
    console.log('koderKey:', getCarKey)

    /////////// JQUERY AJAX ////////////

    $.ajax({
        method:"DELETE",
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/${getCarKey}.json`,
        success: response => {

            // GUARDADO EXITOSO
            // Volvemos a imprimir la tabla para mostrar el nuevo valor guardado
            // pq en la funcion en si la limpiamos 
            printCars( getCars() )

            console.log( response)
        },
        error: error => {
            console.log( error )
        }
    })
}


////////// EDIT KODER /////////////

const updateData = event => {
    
    // aqui obtenemos la key
    let getKoderKey = event.target.dataset.carkey
    
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

    xhttp.open("GET", `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/${getKoderKey}.json`, false);
    // Aqui queda vacio pq no estamos mandando nada, solo vamos a obtener datos
    xhttp.send();
}


const saveChanges = (event) => {

    // Creamos la llave
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
            printTable(getCars())

            // escondemos el modal
            $("#edition-modal").modal("hide")
        }
    }

    xhttp.open("PUT", `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/${getKoderKey}.json`, false);
    // Aqui queda vacio pq no estamos mandando nada, solo vamos a obtener datos
    xhttp.send(JSON.stringify(editedObject));
}

document.getElementById("save-changes").addEventListener("click", saveChanges)



////////// PRINT CAR /////////////

// El parametro podemos llamarlo como sea, pero hace referencia a la coleccion guardada en el objeto creado en el GET (podemos llamarlo igual que el objeto)
const printCars = (carsCollection) => {

    let table = $(".cars-wrapper")

    // Para limpar la tabla
    // while(table.lastElementChild){
    //     table.removeChild(table.lastElementChild)
    // }

    // vaciamos la tabla
    $(table).children('.col-6').remove();

    // for / llave (key en el database) / objeto (que es el parametro asignado)
    for( key in carsCollection){
        let{ model, brand, trans } = carsCollection[key]
        let cardHTML = `                    
        <div class="col-6">
            <div class=" card bg-dark text-white m-2">
                <div class="card-body">
                    <div class="card-text">Marca: ${brand}</div>
                    <div class="card-text">Modelo: ${model}</div>
                    <div class="card-text">Transmicion: ${trans}</div>
                    <div class="d-flex justify-content-between my-2">
                        <div class="btn btn-danger delete-btn" data-carkey="${key}">Eliminar</div>
                        <div class="btn btn-warning edit-btn" data-carkey="${key}">Editar</div>
                    </div>
                </div>
            </div>

        </div>`

        $('.cars-wrapper').append(cardHTML)
    }

    // Seleccionamos todos los botones de delete y por cada uno mandamos a llamar la funcion de delete
    // la funcion PrintCars() obtiene sus valores al ejecutar getCars() por lo tanto al llegar al deleteData obtiene el key y puede borrar el objeto
    $(".delete-btn").click(deleteData)

    // Mandamos a llamar la funcion de editar al boton
    $(".edit-btn").click(updateData)

    // Mandamos a llamar la funcion para guardar los datos editados
    $("#save-changes").click(saveChanges)
}

// Imprimimos las cards
printCars( getCars() )




// si llegamos a llamar la funcion deleteData() desde aqui, solo va a borrar una vez el objeto al que demos click a su boton delete 
// ya que el DOM solo lo estamos cargando una vez Ej. Si tenemos dos cards al cargar la pagina y creamos uno nuevo (una tercera card), esta tercera card no esta cargada en el DOM 
// por lo tanto al dar click en el boton borrar no va a pasar nada. Pero si damos un refresh y damos click al boton ahora si lo va a borrar, esto pq despues del refresh esta tercera card ya existe en el DOM
// $(".delete-btn").click(deleteData)








