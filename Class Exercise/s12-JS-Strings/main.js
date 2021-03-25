/*
var someString = "Kodemia";
var strLenght = someString.length;

for(var i = 0; i < strLenght; i++){
    var character =  someString.charAt(i);
    console.log("la letra es " + character + " y ocupa la posicion " + i + "/" + strLenght)
    console.log(`${character} ${i} / ${someString.length}`);
    //alert(someString.charAt(i))
}
*/



/*
 1. saber la cantidad de palabras
 2. saber la cantidad de "a"
 3. crear una nueva frase usando solo los caracteres que esten en posiciones pares
 "amjrf"
 4. crear una nueva frase usando solo los caracteres que esten en posiciones nones
 */

 var frase = "La mejor forma de predecir el futuro es creandolo";
 var fraseLenght = frase.length;
 
 //------ CONTADOR DE LETRAS TOTALES ------------

 console.log("El total de caracteres es " + fraseLenght);

//------ CONTADOR DE LETRAS a ------------

//var someChar = frase.match(/a/g);

var aMatches = frase.match(/[AaÁá]/g);
console.log(aMatches);

aMatches = aMatches.length;
console.log(aMatches);

//------ NUEVA FRASE CON PARES ------------

 var evenPhrase = '';

for(var i = 0; i < fraseLenght; i++){
    //var character =  frase.charAt(i);
    //console.log("la letra es " + character + " y ocupa la posicion " + i + "/" + frase)
    //console.log(`la letra es  ${character} y ocupa la posicion ${i} / ${frase.length}`);

    if (i % 2 === 0) {
        evenPhrase+=frase.charAt(i);
    }
}
console.log(`la nueva frase con pares es: ${evenPhrase}`);


//------ NUEVA FRASE CON NONES ------------

var oddPhrase = '';

for(var i = 0; i < fraseLenght; i++){
    //var character =  frase.charAt(i);
    //console.log("la letra es " + character + " y ocupa la posicion " + i + "/" + frase)
    //console.log(`la letra es  ${character} y ocupa la posicion ${i} / ${frase.length}`);

    if (i % 2 === 1) {
        oddPhrase+=frase.charAt(i);
    }
}
console.log(`la nueva frase con nones es: ${oddPhrase}`);

/*
1.- Mostrar la misma frase en snake_case
2.- Mostrar la misma frase en kebab-case
3.- Mostrar la misma frase con todas las vocales en mayúscula
4.- Mostrar los primeros 10 caracteres de la frase
5.- Mostrar los últimos 10 caracteres de la frase 
*/


//------ NUEVA FRASE EN SNAKE CASE ------------

//var frase = "La mejor forma de predecir el futuro es creandolo";
//var fraseLenght = frase.length;

var res = frase.toLowerCase();
console.log(res);

var guion = res.replace(/ /g, "_");
console.log(guion);

//------ NUEVA FRASE EN KEBAB CASE ------------

var guion2 = res.replace(/ /g, "-");
console.log(guion2);

//------ NUEVA FRASE VOCALES MAYUSCULA ------------

var mayus = frase.replace(/a/g, "A").replace(/á/g, "Á").replace(/e/g, "E").replace(/i/g, "I").replace(/o/g, "O").replace(/u/g, "U");
console.log(mayus);



var primeros = frase.slice(0, 10);
console.log(primeros);


//var fraseLenght = frase.length;
console.log(fraseLenght);


var ultimos = frase.slice(fraseLenght - 10, fraseLenght);
console.log(ultimos);
