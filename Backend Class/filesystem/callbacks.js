

const ejemploMuro = {
    construido: false, 
    aplanado: false, 
    pintado: false
}
function construir(muro){
    muro.construido = true
    return muro
}

function aplanar(muro){
    muro.aplanado = true
    return muro
}

function pintar(muro){
    muro.pintado = true
    return muro
}

const muroConstruido =  construir(ejemploMuro)
console.log('muroConstruido:', muroConstruido)

const muroAplanado = construir(aplanar(ejemploMuro))
console.log('muroAplanado:', muroAplanado)


const muroPintado = construir(pintar(ejemploMuro))
console.log('muroPintado:', muroPintado)