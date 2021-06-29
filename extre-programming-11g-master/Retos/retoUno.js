// De un array dado, dejar todos los elemento excepto aquellos que se indiquen en otro array
const clearArray = ({ valuesToRemove = [], arrayToClean }) => {
  return arrayToClean.reduce((acum, item) => {
    if (!valuesToRemove.includes(item)) acum = [...acum, item]
    return acum
  }, [])
}
