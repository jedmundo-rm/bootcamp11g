
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


    // Depues creamos la funcion para mandar a la base de datos y aqui es onde la ejecutamos
    saveCar( carObject )
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
            console.log(response)
        },
        error : error => {
            console.log(error)
        }
    })
}

////////// GET CARS in DB FOR PRINT /////////////

const getCars = () => {

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

//getCars()

////////// DELETE CAR /////////////
////////// Se pone antes de la funcion print pq si no no puede inicializar /////////////

const deleteData = key => {

    console.log(key.target)

    let carKey = key.target.dataset.carKey
    console.log('koderKey:', carKey)

    $.ajax({
        method:"DELETE",
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/${key}.json`,
        success: response => {
            console.log( response)
        },
        error: error => {
            console.log( error )
        }
    })
}


////////// EDIT CAR /////////////

const updateData = key => {
    $.ajax({
        method:"PATCH",
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/${key}.json`,
        // data: JSON.stringify({
        //     brand: "Nissan",
        //     model: "March",
        //     trans: "manual"
        // }),
        data: JSON.stringify(car),
        success: response => {
            console.log( response)
        },
        error: error => {
            console.log( error )
        }
    })
}



////////// PRINT CAR /////////////

const printCars = carsCollection => {

    // for / llave (key en el database) / objeto (el que creamos en el GET)
    for( car in carsCollection){
        let{ model, brand, trans } = carsCollection[car]
        let cardHTML = `                    
        <div class="col-6">
            <div class=" card bg-dark text-white m-2">
                <div class="card-body">
                    <div class="card-text">Marca: ${brand}</div>
                    <div class="card-text">Modelo: ${model}</div>
                    <div class="card-text">Transmicion: ${trans}</div>
                    <div class="d-flex justify-content-between my-2">
                        <div class="btn btn-danger delete-btn" data-carkey="fg">Eliminar</div>
                        <div class="btn btn-warning">Editar</div>
                    </div>
                </div>
            </div>

        </div>`

        $('.cars-wrapper').append(cardHTML)
    }

    // Seleccionamos todos los botones de delete y por cada uno mandamos a llamar la funcion de delete
    //$(".delete-btn").click(deleteData)
    //$('.delete-btn').data('carkey') = key
    
}

printCars( getCars() )




