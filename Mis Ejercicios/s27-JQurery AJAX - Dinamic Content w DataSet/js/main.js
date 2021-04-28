$(document).ready(function(){
    // cargado del home.html de forma hardcodeada. NO ejecuta scripts al cargar
    /*$(".content-wrapper").load('./views/home.html')*/

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

    // Con esta forma el unico incoveniente es que no ejecuta el alert en home
    // Pq en un inicio cargamos el home de una forma hardcodeada
    // Para que funcione deberia estar esto encerrado en una funcion
    /*$('.content-wrapper').load(url, () => {
        console.log('url:', url)

        switch( view ){
        case "home":
            alert("cargando home")
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
    })*/

    loadView(url, view);
})

const loadView = (url, view) => {
    $('.content-wrapper').load(url, () => {
        console.log('url:', url)

        switch( view ){
        case "home":
            alert("cargando home")
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



// FUNCION PARA OBTENER LA DB
const getPets = () => {
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/cars/.json",
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log(error)
        }
    })
}

// Este click es llamado para el boton que esta en users.html
// NO FUNCIONA pq el boton que esta en users.html aun no existe caundo se carga el contenido
$(".add-user").click(() => {
    alert("con metodo click")
})


// Este si funiona pq con on() ejecuta la accion a los elementos que ya existen
// mas a los que van a existir
/* Event Handlers*/
$(".content-wrapper").on("click", ".btn", () => {
    alert("con metodo on")
})