const suma = ({ numUno, numDos }) => {
  return numUno + numDos
}

test('La suma de dos valores que conciden con el valor esperado', () => {
  expect(suma({ numUno: 1, numDos: 2 })).toBe(3)
})

test('La suma de dos valores no conciden con el valor esperado', () => {
    expect(suma({ numUno: 1, numDos: 2 })).toBe(5)
  })
