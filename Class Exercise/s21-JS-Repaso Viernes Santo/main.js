

/*
1. Dado un string de dos palabras realizar una función que devuelva la palabra más larga

    input: 'Programación Javascript'
    Output: 'Programación'
*/
    

var frase = "Programación Javascript"

let paragraphs = frase.split(" ")

console.log(paragraphs)

let paragraphsLength = paragraphs.map((item, index)=>{
    let each = item.length
    return each
})
console.log(paragraphsLength)

switch (paragraphsLength[0] > paragraphsLength[1]) {
    case true:
        console.log(`La palabra mas larga es ${paragraphsLength[0]}`)
        break;

    case false:
        console.log(`La palabra mas larga es ${paragraphsLength[1]}`)
        break;
}

/*
2. Crear un programa que permita detectar si una frase finaliza con punto. Dicho programa debe estar encapsulada en una función y recibir el o los parametros necesarios.
    
    frase: 'Hola soy una desarrollador FullStack.'
    Output: 'Finalizó en punto'

    frase: 'Hola soy una desarrollador FullStack'
    Output: 'No finalizó en punto D:'
    */
    
/*



3. Crear un programa que permita al usuario retornar el numero de coincidencias de una palabra en una frase que el mismo usuario ingrese.
    
    input:
    palabra a buscar: 'Hola'

    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/
 

/*
4. Crear un programa que permita al usuario extraer una subacadena de una frase dada.
    
    Inputs:
    cadena a extraer: 'desarrollador'

    frase: 'Soy un desarrollador FullStack'
    Output: 'desarrollador'
*/


/* 
5. crear un programa que permita comparar dos palabaras das por el usuario y determinar si son iguales.
    
    Inputs:
    palabra1: 'Hola'
    palabra2: 'Hola'
    
    Output: 'Son iguales :D'
    
    Inputs:
    palabra1: 'Hola'
    palabra2: 'Hi'
    
    Output: 'Son iguales D:'
*/
    
/*
6. Realizar un programa que permita a una cadena de texto convertirlo a Mayusculas.
    
    Inputs:
    frase: 'Hola soy desarrollador fullstack'
    Output: 'HOLA SOY DESARROLLADOR FULLSTACK'
*/

/*
7. Crear un programa que permita a una cadena de texto mostrar el sogno '-' entre cada caracter
    
    Inputs:
    cadena: 'Hola soy un desarrollador'
    Output: 'H-o-la--soy--u-n--d-e-s-a-r-r-o-l-l-a-d-o-r'
*/

/*
8. Crear un programa que devuelva la cantidad de vocales que tenga una frase dada por el usuario.
    
    Inputs:
    cadena: 'Soy una desarrollador'
    Output: 'La cadena tiene 8 vocales'
*/

/*
9. Crear un programa que permita devolver una cadena de texto de forma inversa a la que el usuario lo ingresa.
    
    Inputs:
    cadena: 'Hola
    Output: 'aloH'
*/
    