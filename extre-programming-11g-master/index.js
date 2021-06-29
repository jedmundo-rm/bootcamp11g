const suma = ({ numUno, numDos }) => {
  return numUno + numDos
}

const verificarSuma = ({ numUno, numDos, total }) => {
  const sumarValores = suma({ numUno, numDos })

  if (sumarValores === total) console.log('Los valores coinciden')
  else
    throw new Error('La suma de los valores no conincide con el valor esperado')
}

verificarSuma({numUno: 5, numDos: 5, total: 10})
verificarSuma({numUno: 6, numDos: 5, total: 10})