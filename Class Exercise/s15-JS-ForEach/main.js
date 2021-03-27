var productsList = [
    {
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous"
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables"
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths"
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers"
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers"
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers"
    },{
        name:"producto 7",
        price:150.00,
        category:"Cloths"
    },{
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous"
    },{
        name:"producto 9",
        price:50.00,
        category:"Vegetables"
    },{
        name:"producto 10",
        price:200.00,
        category:"Cloths"
    }
]

/*Imprimir los nombres de cada producto*/

productsList.forEach( (product) => {
  console.log( product.name )
})

/*Crear un nuevo array en el que cada item tenga el nombre y precio de cada producto*/

/*
  forma larga
let labelsArray = productsList.map( (product) => {
  return `El ${product.name} tiene un costo de ${product.price}` 
})*/

/*forma corta*/
let labelsArray = productsList.map( product => `El ${product.name} tiene un costo de ${product.price}` )


console.log( labelsArray )

/*Crear un nuevo array con únicamente los productos de la categoría "Cloths"*/

/* forma larga */

/*let result = productsList.filter( ( product ) => {
  return product.category === "Cloths"
})*/

/*forma semi-corta*/


/*const filterByCategory = ( array, selectedCategory ) => {
  let result = array.filter( product => product.category === selectedCategory )
  return result 
}*/

/*forma corta*/

const filterByCategory = ( array, selectedCategory ) => array.filter( product => product.category === selectedCategory )

let computers = filterByCategory( productsList, "Computers")
let vegetables = filterByCategory( productsList, "Vegetables")

console.log( computers )
console.log( vegetables )

/*Obtener el precio total de todos los productos*/

/*forma larga*/
/*const getTotalPrice = ( array ) => {
  let result = array.reduce( (  accum, current ) => {
    return accum + current.price
  },0)

  return result
}*/

/*forma semi-corta*/

/*const getTotalPrice = ( array ) => {
  let result = array.reduce( (  accum, current ) => accum + current.price, 0)
  return result
}*/

/*forma corta*/

const getTotalPrice = array => array.reduce( (  accum, current ) => accum + current.price, 0)
  
let totalPrice = getTotalPrice( productsList )

console.log( totalPrice )



