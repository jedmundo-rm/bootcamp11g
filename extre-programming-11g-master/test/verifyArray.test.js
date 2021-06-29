const razas = [
  'afghan',
  'basset',
  'blood',
  'english',
  'ibizan',
  'plott',
  'walker',
]

// De un array dado, dejar todos los elemento excepto aquellos que se indiquen en otro array
const clearArray = ({ valuesToRemove = [], arrayToClean }) => {
  return arrayToClean.reduce((acum, item) => {
    if (!valuesToRemove.includes(item)) acum = [...acum, item]
    return acum
  }, [])
}

const newArrayDogs = clearArray({
  valuesToRemove: ['walker', 'plott'],
  arrayToClean: razas,
})

test('El valor de walker no está dentro del array', () => {
  expect(newArrayDogs).not.toContain('walker')
})

test('El valor de plott no está dentro del array', () => {
  expect(newArrayDogs).not.toContain('plott')
})

test('El valor de ibizan está dentro del array', () => {
  expect(newArrayDogs).not.toContain('ibizan')
})
