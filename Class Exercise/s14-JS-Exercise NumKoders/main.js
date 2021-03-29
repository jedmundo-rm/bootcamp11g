/*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders
*/

/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista
*/


//let numkoders = parseInt(prompt("ingresa el numero de koders"));

function registro(){

    for (let i = 0; i < numkoders; i++){
        var nombre =  prompt("ingresa el nombre dle usuario")
        var apellido = prompt("ingresa el apellido del usuario")

        alert(nombre + " " + apellido);      
    }
}

//registro();


/************************/


let koders = [];

// Add Koders

console.log("Functions needs koders array");

function addKoders(array) {
  let num = parseInt(prompt("¿Cuantos koders quieres agregar?"));

  for (let i = 0; i < num; i++) {
    let name = prompt(`Introduce el nombre del ${array.length + 1}.- koder`);
    let lastName = prompt(`Introduce el apellido del ${array.length + 1}.- koder`);

    array.push(name + " " + lastName);
  }
  console.log(array);
}

addKoders(koders);

// delete random koders in koders array

function deleteRandomKoder(koders) {
  let randomItem = koders[Math.floor(Math.random() * koders.length - 1)];

  koders.splice(randomItem, 1);

  console.log(koders);
}