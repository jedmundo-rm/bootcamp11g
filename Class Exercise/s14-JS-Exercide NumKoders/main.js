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


let numkoders = parseInt(prompt("ingresa el numero de koders"));

registro();

function registro(){

    for (let i = 0; i < numkoders; i++){
        var nombre =  prompt("ingresa el nombre dle usuario")
        var apellido = prompt("ingresa el apellido del usuario")

        alert(nombre + " " + apellido);      
    }
}




let someArray = [
    "a",
    "b",
    "c"
]

someArray.splice(1,1)

conmsole.log(someArray)

someArray.filter(item => item != "b")