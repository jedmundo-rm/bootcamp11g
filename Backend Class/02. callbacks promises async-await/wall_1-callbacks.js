const ejemploMuro = {
    construido: false,
    aplanado: false,
    pintado: false
  }


  function construir (muro, cb) {
    setTimeout(() => {
      muro.construido = true
      cb(false, muro)
    }, 1000)
  }

  function aplanar (muro, cb) {
    setTimeout(() => {
        muro.aplanado = true
        cb(false, muro)
      }, 1000)

  }

  function pintar (muro, cb) {
    setTimeout(() => {
        muro.pintado = true
        cb(false, muro)
      }, 1000)

      return muro
  }


// primero definimos la fuincion y luego la pasamos

//   function alConstruir (error, muroConstruido){
//   console.log('muroConstruido:', muroConstruido)

//   }

//   construir(ejemploMuro, alConstruir)

///////////////////

  // Definimos la funcion directamente donde la necesitamos
//   construir(ejemploMuro, (error, muroConstruido) => {
//     console.log('muroConstruido: ', muroConstruido)
//   })

////////////


  construir(ejemploMuro, (error, muroConstruido) => {
    if(error){
        console.error('no se pudo construir')
        return
    }

    console.log('muro construido', muroConstruido)

    // aplanar recibe el muro construido
    aplanar(muroConstruido, (error, muroAplanado) => {
        if(error){
            console.error('no se pudo aplanar')
            return
        }
    
        console.log('muro aplanado', muroAplanado)

        // pintar recibe el muro aplanado
        pintar(muroAplanado, (error, muroPintado) => {
            if(error){
                console.error('no se pudo pintar')
                return
            }
        
            console.log('muro pintado', muroPintado)

        })

    })

})


// Falsy
// Valores que evaluan a falso cuando hacemos preguntas logicas sobre ellos

// false => false
// '' => false
// null => false
// undefined => false
// 0 => false

// Truthy
// Valores que evaluan a verdadero (true) cuando hacemos preguntas logicas sobre ellos

// []{} => true
// 1,2,3 -1,-2,-3 = true
// '.' => true
// true
