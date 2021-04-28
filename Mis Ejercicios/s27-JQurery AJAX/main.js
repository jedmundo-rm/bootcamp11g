$(document).ready(function(){
    $(".content-wrapper").load('./views/home.html')
})

// Con esta funcion vamos a cargar el contenido dinamicamente con el load de jQuery
// Eso es para no tener que hacer varios html con todo su conetenido (navbar, footer, styles, etc)
// De esta forma con el load solo cargara en el content-wrapper el contenido correspondiente
// EL OBJETIVO es poder cambiar la url de los ancors <a> del navbar de manera que solo apunte a views/archivo.html
// tal cual se delcaro en el document ready, arriba.
$('.navbar-nav a').click( (event) => {
    event.preventDefault()
    //console.log('click')
    console.log(event.target.href)

    // Esto solo es para ver las propiedades del href
    //let url = new URL(event.target.href)
    //console.log('url:', url)

    // Aqui es apra ver el replace (quitamos el pathname con uns tring vacio)
    let url = new URL(event.target.href).pathname
    console.log(url.replace('/Mis%20Ejercicios/s27-JQurery%20AJAX/', ""))


    let newUrl = new URL(event.target.href).pathname.replace('/Mis%20Ejercicios/s27-JQurery%20AJAX/', "")
    console.log('newUrl:', newUrl)

    $('.content-wrapper').load(newUrl)

    // **** Esto es para ponerle la clase active al li que le demos click ****

    // Con esto solo estamos dando click al ancor, por lo tanto pondra la clase en el <a>
    // $(event.target).addClass("active")

    // Con closest buscaremos al antecesor inmediato que definamos
    $(event.target).closest(".nav-item").addClass("active")
    // Con esto quitamos la clase a todos los demas
    $(".nav-item").removeClass("active")
})


// FUNCION PARA OBTENER LA DB
const getPets = () => {
    $.ajax({
        method: "GET",
        url: "https://ajaxclass-1ca34.firebaseio.com/11g/jaime/pets/.json",
        success: response => {
            console.log( response )
        },
        error: error => {
            console.log(error)
        }
    })
}