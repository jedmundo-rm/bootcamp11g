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

/*
    -quiero conocer la cantidad de productos en el array
    -quiero conocer el costo total de todos los productos del array
    -quiero conocer la cantidad de productos de cada categoría
        (Vegetables, Cloths, Miscellaneous, Computers)
    -quiero un nuevo array para cada categoría
    -quiero un nuevo array de strings que tenga lo siguiente
        [
            "El { productName } tiene un costo de { price }"
        ]
*/


//1 cantidad productos
var totalProducts = productsList.length
console.log("El total de productos es: " + totalProducts)

//2
function totalPrice (){
  let total = 0;
  for (var i = 0; i<totalProducts; i++){
    let productPrice = productsList[i].price
    total += productPrice;
    console.log(total)
  }
}
totalPrice()
//cantidad de cada categoría

function totalOfType (){
 let a = 0;
 let b = 0;
 let c = 0;
 let d = 0;
 let newArrayCloths = []
 let newArrayVegetables = []
 let newArrayMiscellaneous = []
 let newArrayComputers = []

for (var i = 0; i<totalProducts; i++){
  switch (productsList[i].category){
   case "Cloths":
     a++
     newArrayCloths.push(productsList[i])
   break
   case "Vegetables":
     b++
   break
   case "Miscellaneous":
     c++
   break
   case "Computers":
     d++
   break
  }

}
 console.log("La cantidad de productos tipo ropa es: ", a )
 console.log("La cantidad de productos tipo vegetales es: ",b)
 console.log("La cantidad de productos tipo misceláneos es: ",c)
 console.log("La cantidad de productos tipo computadoers es: ",d)
 console.log(newArrayCloths)
}
totalOfType ()


/********************* ISRA *********************/
/*
const getProductsQuantity = array => array.lenght

let totalProducts = getProductsQuantity(productsList)

console.log(totalProducts)*/

/************/
/*
const getProductsPrice = array => {
    let totalPrice = 0
    for( let i = 0; i < array.lenght; i++){
        console.log(array[i].price)
        totalPrice += array[i].price
    }
    return totalPrice
}

let totalPrice = getProductsPrice(productsList)

console.log(totalPrice)
*/
/************/
/*
const filterByCategory = (array, selectedCategory) => {
    let result = []
    for( let i = 0; i < array.lenght; i++){
        array[i].category === selectedCategory && result.push(array[i])
    }
    return result
}


let vegetablesArray = filterByCategory(productsList, "vegetables")

console.log(vegetablesArray)
*/