$(document).ready(function(){

    // Mandamos a llamar la funcion loadview para ejecute scripts al cargar home.html
    loadView("./views/home.html", "home")
})

// Con esta funcion vamos a cargar el contenido dinamicamente con el load de jQuery
// Eso es para no tener que hacer varios html con todo su conetenido (navbar, footer, styles, etc)
// De esta forma con el load solo cargara en el content-wrapper el contenido correspondiente
// EL OBJETIVO es poder cambiar la url de los ancors <a> del navbar de manera que solo apunte a views/archivo.html
// tal cual se delcaro en el document ready, arriba.
$('.navbar-nav a').click( (event) => {
    event.preventDefault()

    // Obtenemos el data de cada boton
    let view = event.target.dataset.viewTarget
    console.log('view:', view)

    let url = `./views/${view}.html`

    // Con closest buscaremos al antecesor inmediato que definamos
    $(event.target).closest(".nav-item").addClass("active")
    // Con esto quitamos la clase a todos los demas
    $(".nav-item").removeClass("active")

    loadView(url, view);
})

const loadView = (url, view) => {
    $('.content-wrapper').load(url, () => {
        console.log('url:', url)

        switch( view ){
        case "home":
            //alert("cargando home")
            getAllPets()
            break
        case "pets":
            //alert("cargadno pets")
            getPets()
            break
        case "users":
            //alert("cargando users")
            break
        default:
            //alert("cargando  home")
        }
    })
}



///////////////////////////////////////////////////////// OWNERS AND PETS GET DATA ///////////////////////////////////////////////////////

/* Funcion para obter la data del Usuario */

const getUserData = () => {

    // Creamos el objeto vacio
    let userObject = {}

    $(".user-form input").each(function () {
        let property = this.name
        //console.log('property:', property)
        let value = this.value
        //console.log('value:', value)

        // Si lo hacemos asi solo estamos sobreescribiendo, mas no agregrando
        /*userObject[property] = value*/
        
        // en la propagacion, lo que va despues de la "," es lo que se va a agregar
        userObject = {...userObject, [property]:value}
        console.log('userObject:', userObject)
    })

    //Aqui agregamos el id con date
    // en la propagacion, lo que va despues de la "," es lo que se va a agregar
    userObject = {...userObject, id: new Date().getTime()}
    console.log('userObject:', userObject)

    saveOwner( userObject )
}

$(".content-wrapper").on("click", ".save-user", () => {
    getUserData()
})

/* Funcion para obter la data de la Mascota */

const getPetData = () => {

    // Creamos el objeto vacio
    let petObject = {}

    $(".pet-form input").each(function () {
        let property = this.name
        //console.log('property:', property)
        let value = this.value
        //console.log('value:', value)

        // Si lo hacemos asi solo estamos sobreescribiendo, mas no agregrando
        /*petObject[property] = value*/
        
        // en la propagacion, lo que va despues de la "," es lo que se va a agregar
        petObject = {...petObject, [property]:value}
        console.log('petObject:', petObject)
    })

    //Aqui agregamos el id con date
    // en la propagacion, lo que va despues de la "," es lo que se va a agregar
    petObject = {...petObject, id: new Date().getTime()}
    console.log('petObject:', petObject)

    savePet( petObject )
}

$(".content-wrapper").on("click", ".save-pet", () => {
    getPetData()
})


//////////////////////////////////////////////////// OWNERS AND PETS CREATION in DB ////////////////////////////////////////

/* Creamos la funcion para mandar a la base de datos la data de User*/

const saveOwner = (user) => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/owners.json",
        data: JSON.stringify(user),
        success : response => {

            // GUARDADO EXITOSO
            // Volvemos a imprimir la tabla para mostrar el nuevo valor guardado
            // pq en la funcion en si la limpiamos 
            //printCars( getUsers() )

            console.log(response)
        },
        error : error => {
            console.log(error)
        }
    })
}

/* Creamos la funcion para mandar a la base de datos la data de Pets*/

const savePet = (pet) => {
    $.ajax({
        method: "POST",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/pets.json",
        data: JSON.stringify(pet),
        success : response => {

            // GUARDADO EXITOSO
            // Volvemos a imprimir la tabla para mostrar el nuevo valor guardado
            // pq en la funcion en si la limpiamos 
            //printCars( getUsers() )

            console.log(response)
        },
        error : error => {
            console.log(error)
        }
    })
}


//////////////////////////////////////////////////////////  GET PETS in DB FOR PRINT ////////////////////////////////////////////////////////


const getAllPets = () => {
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/pets.json",
        success : response => {
            console.log(response)
            printPets( response )
        },
        error : error => {
            console.log(error)
        }
    })
}



////////////////////////////////////////////////////////// DELETE OWNER ////////////////////////////////////////////////////////

////////// Se pone antes de la funcion print pq si no no puede inicializar /////////////

const deleteData = event => {

    console.log(event.target)

    // Recordar obetener el data del boton delete
    //let getOwnerKey = $(event.target).data('ownerkey');
    //console.log('koderKey:', getOwnerKey)

    $.ajax({
        method:"DELETE",
        url:`https://ajaxclass-1ca34.firebaseio.com/11g/jaime/pets/.json`,
        success: response => {

            // GUARDADO EXITOSO
            // Volvemos a imprimir la tabla para mostrar el nuevo valor guardado
            // pq en la funcion en si la limpiamos 
            //printCars( getCars() )

            console.log( response)
        },
        error: error => {
            console.log( error )
        }
    })
}


///////////////////////////////////////////////////////////// PRINT PETS /////////////////////////////////////////////////

const printPets = ( petCollection ) => {

    console.log("imprimiendo")
    console.log('petCollection:', petCollection)

    $(".pets-wrapper").empty();

    Object.keys( petCollection ).forEach(( pet ) => {
        let {name, description, picture, owner} = petCollection[ pet ]

        if(!owner){
            let petCard = `        
            <div class="col-12 col-md-6 d-flex align-items-stretch">
                <div class="card">
                    <img src="${ picture }"/>
                    <div class="card-body">
                        <h2 class="card-title">${ name }</h2>
                        <p>${ description }</p>
                    </div>
                    <button data-pet-key=${ pet } type="button" class="btn btn-primary adopt-pet">Adoptame</button>
                </div>            
            </div>`

            $(".pets-wrapper").append(petCard)
        } 

        
    })
}


// FUNCION PARA ADOPTAR

$(".content-wrapper").on("click", ".adopt-pet", () => {
    adoptPet( event )
})


const adoptPet = (event) => {

    //let petKey = event.target.dataset.petKey
    let petKey = $(event.target).data('pet-key');

    $.ajax({
        method:"PATCH",
        data: JSON.stringify({
            owner: "54546468468468"
        }),
        url: `https://ajaxclass-1ca34.firebaseio.com/11g/jaime/pets/${petKey}/.json`,
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log( error )
        }
    })
}

