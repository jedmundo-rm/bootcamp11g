function irACasa(avisar) {
    console.log('llendo a casa')
    console.log('llegamos')

    avisar()
}

function llamarMama(){
    console.log('hola ma ya llegue a casa')
}

irACasa(llamarMama)


//factory functions

function a (b){
    console.log('a')

    return function () {
        console.log('b: ', b)
    }
}

a('hola')()


const funcB = a('hola')
funcB()


//

function generadorDeValidadoresDeRoles (roles) {
    return function(rol) {
        if(roles.includes(rol)){
            console.log('permitido')
        }else{
            console.log('denegado')
        }
    }
}

const soloAdmin = generadorDeValidadoresDeRoles(['Admin'])
const soloUser = generadorDeValidadoresDeRoles(['User'])