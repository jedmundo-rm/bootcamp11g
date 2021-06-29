const { throwErrorMessage } = require('../utils/throwErrorMessage')

const verifyArrayInObject = ({ array, object }) => {
  array.forEach((item) => {
    if (!object[item]) {
      throwErrorMessage({
        name: 'informationNotComplete',
        message: `El campo ${item} es requerido para el endpoint`
      })
    }
  })

  return object
}

const verifyValueInObjectArray = ({ objectArray, value, errorMessage }) => {
  if (!objectArray.find((object) => object.value === value)) {
    throwErrorMessage({
      name: errorMessage,
      message: `El valor ${value} no fue encontrado.`
    })
  }
}

const clearObject = ({
  objectToClean,
  valuesToRemove = [],
  reverse = false
}) => {
  const keysObj = Object.keys(objectToClean)
  const keysToMatch = reverse
    ? valuesToRemove
    : keysObj.filter((item) => !valuesToRemove.includes(item))

  return keysToMatch.reduce(
    (acum, item) =>
      !objectToClean[item] ? acum : { ...acum, [item]: objectToClean[item] },
    {}
  )
}

const getNewObj = ({ arrayNewObj, object }) => {
  let objBuild = {}

  arrayNewObj.forEach((key) => {
    objBuild = {
      [key]: object[key],
      ...objBuild
    }
  })

  return objBuild
}

module.exports = {
  verifyArrayInObject,
  verifyValueInObjectArray,
  clearObject,
  getNewObj
}
