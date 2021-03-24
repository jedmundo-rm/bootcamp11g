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

