


document.getElementById("save-user").addEventListener("click", () => {
    console.log("guardando")
})



$("#save-user").click( () => {
    console.log("guardando")
})




$('#toggle-text').click( () => {

    ////////// bootstrap y vanilla ////////

    //document.getElementById("text").classList.add("d-none")

    //////////// con jquery //////////

    //$("#text").hide();

    ////////// conmutar el elemento con vailla y boostrap //////////

    // let element = document.getElementById("text")
    // let elementVisible =  !element.classList.contains("d-none")

    // console.log('elementVisible:', elementVisible)

    // elementVisible ? element.classList.add("d-none") : element.classList.remove('d-none')
    
    ///////////// conmutar el elemento con jQuery /////////

    $("#text").toggle()
})

//Ejercicio 1
$(".radio-wrapper input[type='radio']").click( ()=> {
    let selection = $(".radio-wrapper input[type='radio']:checked").val()
    if (selection =="square"){
        $('#figura').css('height','60px')
        $('#figura').css('width','60px')
        $('#figura').css('border-radius','0%')
    }
    else if (selection =="rectangle"){
        $('#figura').css('height','60px')
        $('#figura').css('width','120px')
        $('#figura').css('border-radius','0%')
    }
    if (selection =="circle"){
        $('#figura').css('height','60px')
        $('#figura').css('width','60px')
        $('#figura').css('border-radius','50%')
    }
})

//Ejercicio 2

// var image = [
//     "https://picsum.photos/id/237/500/500",
//     "https://picsum.photos/seed/picsum/500/500",
//     "https://picsum.photos/id/214/500/500",
//     "https://picsum.photos/id/215/500/500",
//     "https://picsum.photos/id/218/500/500",
//     "https://picsum.photos/id/280/500/500"
// ]
// var contImg = 0

// $('#text2').html(`1/${image.length}`)

// $("#siguiente").click(()=>{
//     if (contImg >= image.length-1){
//          contImg = image.length-1
//      }
//     else{
//         contImg += 1
//     }
//     let img1= $("#imagenAlt").attr("src",image[contImg])
//     console.log(contImg)
//     console.log(image.length-1)
//     $('#text2').html(`${contImg+1}/${image.length}`)
// })

// $("#atras").click(()=>{
//     if (contImg <= 0){
//         contImg = 0
//     }
//     else{
//         contImg -- 
//     }
//     let img1= $("#imagenAlt").attr("src",image[contImg])
//     console.log(contImg)
//     console.log(image.length-1)
//     $('#text2').html(`${contImg+1}/${image.length}`)     
// })



// ISRA CODE

let imgIndex = 0;

let imgArray = [
    "https://picsum.photos/id/169/500/300",
    "https://picsum.photos/id/170/500/300",
    "https://picsum.photos/id/171/500/300",
    "https://picsum.photos/id/172/500/300",
    "https://picsum.photos/id/173/500/300"
]

const setImgSrc = src => {
    $(".gallery-wrapper img").fadeTo("slow",0, () => {
        $(".gallery-wrapper img").attr("src",src)
        setTimeout( function(){
            $(".gallery-wrapper img").fadeTo("slow",1)
        },300)
    })
}

const setButtonsState = () => {
    imgIndex === 0 
        ? $(".backward").attr("disabled", true)
        : $(".backward").attr("disabled", false)

    imgIndex === imgArray.length - 1
        ? ($(".forward").attr("disabled", true), $(".add-slides").removeClass("d-none"))
        : ($(".forward").attr("disabled", false), $(".add-slides").addClass("d-none"))
}

setButtonsState()

const forward = () => {
    imgIndex++
    let src = imgArray[imgIndex]
    setImgSrc(src)
    setButtonsState()

    //console.log(src);
    $("#img-caption").text(src)
}

const backward = () => {
    imgIndex--
    let src = imgArray[imgIndex]
    setImgSrc(src)
    setButtonsState()

    //console.log(src);
    $("#img-caption").text(src)
}

const addSlides = amount => {
    for( let i = 0; i < amount; i++ ){
        let randomId = Math.floor(Math.random() * ( 255 - 1) + 1)
        console.log( randomId )
        let url = `https://picsum.photos/id/${randomId}/500/300`
        imgArray.push( url )
    }
    setButtonsState()
}

$(".forward").click( forward )
$(".backward").click( backward )

$(".add-slides").click(() => {
    addSlides(5)
})


