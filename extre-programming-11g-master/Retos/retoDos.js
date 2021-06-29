const jsonDogs = require('./allDogs')

const keysObjDogs = Object.keys(jsonDogs)
console.log(`keysObjDogs`, keysObjDogs)
let newDogs = {}
console.log(`jsonDogs.length`, keysObjDogs.length)

keysObjDogs.forEach((dog) => {
  if (jsonDogs[dog].length) {
    newDogs = {
      ...newDogs,
      [dog]: jsonDogs[dog],
      // buhund: ['norwegian']
    }
  }
})

console.log(`newDogs`, Object.keys(newDogs).length)
