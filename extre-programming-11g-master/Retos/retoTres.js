// Limpiar un array de un array de objetos
const clearArray = ({ valuesToRemove = [], objectToClean }) => {
    const keyObject = Object.keys(objectToClean)
    let newObject = {}
    keyObject.forEach((item) => {
      if (!valuesToRemove.includes(item)) {
        newObject = {
          ...newObject,
          [item]: objectToClean[item],
        }
      }
    })
  }