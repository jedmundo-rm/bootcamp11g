
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

        let transVal = $("#trans option:selected").val();
        //console.log('trans:', trans)

        //carObject.trans = trans
        // en la propagacion, lo que va despues de la "," es lo que se va a agregar 
        carObject = {...carObject, transVal}
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
            printCars( getAllCars() )

            console.log(response)
        },
        error : error => {
            console.log(error)
        }
    })
}

////////// GET CARS in DB FOR PRINT /////////////

const getAllCars = () => {

    let carsCollection;

    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars.json",
        success: response => {
            console.log(response)
            carsCollection = response
        },
        async: false,
        error: error => {
            console.log(error)
        }
    })

    return carsCollection;

}


////////// DELETE CAR /////////////
////////// Se pone antes de la funcion print pq si no no puede inicializar /////////////

const deleteData = event => {

    console.log(event.target)

    // Recordar obetener el data del boton delete
    let getCarKey = $(event.target).data('carkey');
    console.log('koderKey:', getCarKey)

    $.ajax({
        method:"DELETE",
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/${getCarKey}.json`,
        success: response => {

            // GUARDADO EXITOSO
            // Volvemos a imprimir la tabla para mostrar el nuevo valor guardado
            // pq en la funcion en si la limpiamos 
            printCars( getAllCars() )

            console.log( response)
        },
        error: error => {
            console.log( error )
        }
    })
}


////////// EDIT CAR /////////////

const updateData = event => {

    // aqui obtenemos la key
    let getCarKey = $(event.target).data('carkey');
    //console.log('getCarKey:', getCarKey)
    
    // asignamos la key al boton de Save Changes que esta en la ventana modal
    // para editar el objeto que le corresponde
    // $("#save-changes").data("carkey") = getCarKey;
    document.getElementById("save-changes").dataset.getCarKey = getCarKey

    console.log('getCarKey:', getCarKey)

    // mostramos la modal
    $("#edition-modal").modal("show")

    /////////// JQUERY AJAX ////////////

    let dbData

    $.ajax({
        method:"GET",
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/${getCarKey}.json`,
        // data: JSON.stringify({
        //     brand: "Nissan",
        //     model: "March",
        //     trans: "manual"
        // }),
        success: response => {
            console.log( response)
            dbData = response

            Object.keys( dbData ).forEach( key => {
                // trae la key del objeto: nombre, apellido, phone y age 
                console.log('key:', key)

                let objKey = key
                console.log('objKey:', objKey)

                // esto obtiene los valores de los elementos input 
                //document.querySelector(`#edition-modal input[name=${key}]`).value = dbData[key]
                $(`#edition-modal input[name=${key}]`).val(dbData[key])

                // con esto cambiamos el select al valor actual de la propiedad transVal que ya tiene el objeto
                $(`#transVal option[value="${dbData[key]}"]`).prop('selected', true)

                // if(key === "transVal"){
                //     $(`#transVal option[value="${dbData[key]}"]`).prop('selected', true)
                // }else{
                //     $(`#edition-modal input[name=${key}]`).val(dbData[key])
                // }
            }) 

            // con esto comprobamos que si podamos ingresar a uno de los campos y cambiar el valor
            //$('#edition-modal input[name="brand"]').val("algun nombre")

        },
        error: error => {
            console.log( error )
        },
        async:false
    })
}

const saveChanges = (event) => {

    // Creamos la llave AQUI ES IMPORTANTE COLOCAR EN EL DATA SET LA VARIABLE getCarKey
    // AQUI ES IMPORTANTE COLOCAR EN EL DATA SET LA VARIABLE getKoderKey !!!!!!!!!!!!!!  (No como en el updateData que declaramos el dataset)
    let getCarKey = $(event.target).data("getCarKey");

    let editedObject = {}
    console.log('editedObject:', editedObject)

    // metemos en el objeto los nuevos valores de cada input
    document.querySelectorAll("#edition-modal input").forEach(input => {
        editedObject[input.name] = input.value
    })

    // metemos en el objeto los nuevos valores del select
    let transVal = $("#transVal option:selected").val();

    editedObject["transVal"] = transVal

    /////////// JQUERY AJAX ////////////

    $.ajax({
        method: "PATCH",
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/${getCarKey}.json`,
        // data: JSON.stringify({
        //     brand: "Nissan",
        //     model: "March",
        //     trans: "manual"
        // }),
        data: JSON.stringify(editedObject),
        success : response => {

            // GUARDADO EXITOSO
            // Volvemos a imprimir la tabla para mostrar el nuevo valor guardado
            // pq en la funcion en si la limpiamos 
            printCars( getAllCars() )
            // escondemos el modal
            $("#edition-modal").modal("hide")

            console.log(response)
        },
        error : error => {
            console.log(error)
        },
        async: false
    })

}

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
        // Estos valores tienen relacion con los valores declarados en la primera funcion de Obtencion de Datos
        let{ model, brand, transVal } = carsCollection[key]
        let cardHTML = `                    
        <div class="col-6">
            <div class=" card bg-dark text-white m-2">
                <div class="card-body">
                    <div class="card-text">Marca: ${brand}</div>
                    <div class="card-text">Modelo: ${model}</div>
                    <div class="card-text">Transmicion: ${transVal}</div>
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
    // la funcion PrintCars() obtiene sus valores al ejecutar getAllCars() por lo tanto al llegar al deleteData obtiene el key y puede borrar el objeto
    $(".delete-btn").click(deleteData)

    // Mandamos a llamar la funcion de editar al boton
    $(".edit-btn").click(updateData)

    // Mandamos a llamar la funcion para guardar los datos editados
    $("#save-changes").click(saveChanges)
}


// Imprimimos las cards
printCars( getAllCars() )

// si llegamos a llamar la funcion deleteData() desde aqui, solo va a borrar una vez el objeto al que demos click a su boton delete 
// ya que el DOM solo lo estamos cargando una vez Ej. Si tenemos dos cards al cargar la pagina y creamos uno nuevo (una tercera card), esta tercera card no esta cargada en el DOM 
// por lo tanto al dar click en el boton borrar no va a pasar nada. Pero si damos un refresh y damos click al boton ahora si lo va a borrar, esto pq despues del refresh esta tercera card ya existe en el DOM
// $(".delete-btn").click(deleteData)


////////// FILTRAR /////////////

const filterByCategory = (array) => {

    let select = document.getElementById("select-filter")

    let inputCategory = select.options[select.selectedIndex].value

    console.log('inputCategory:', inputCategory)

    let filterArray = {};

    if(inputCategory === "todos"){

        //console.log('inputCategory:', inputCategory)
        printCars( array )

    } else{
        for (key in array){
        
            // Tenemos todo el array
            //console.log('array:', array)

            let {brand, model, transVal} = array[key];

            if(inputCategory === transVal){
                // si exporta los values
                // console.log('inputCategory.value:', inputCategory)

                // todos son de tipo string
                // let type = inputCategory.value
                // console.log(typeof type)

                let objectItem = array[key]
                //console.log('objectItem:', objectItem)
                
                 // en la propagacion, lo que va despues de la "," es lo que se va a agregar
                filterArray = {...filterArray, [key]:objectItem}
                // Esto es lo mismo que lo de arriba
                //filterArray[key] = array[key]

                console.log('filterArray:', filterArray)
                
            }

            printCars(filterArray)
            //console.log('filterArray:', filterArray)

        }
    }
}


