
//ejercicio 1
function ejercicio1() {
  var myIMC = parseFloat(prompt("Escribe tu valor de IMD del 15 al 50"));

  switch(true){
      // Peso Inferior
      case myIMC <= 18.5:
        alert("Tu peso es inferior al normal");
      break;
      // Peso Normal
      case myIMC >= 18.5 && myIMC <= 24.9:
        alert("Tu peso es normal");
      break;
      // Peso Superior al Normal!
      case myIMC >= 25.0 && myIMC <= 29.9:
        alert("Tu peso es superior al normal!");
      break;
      // Obesidad
      case myIMC >= 30.0:
        alert("TIENES OBESIDAD!!!");
      break;
  }
}


//ejercicio 2
function ejercicio2() {

  var myCountry = prompt("Escribe tu pais de origen: \n\nMexico \nAustralia \nCanda \nBrasil \nReino Unido");
  var myHeight = parseFloat(prompt("Escribe tu altura en cm. Ejem: 164, 174, 182:"));

  switch(myCountry){
      // MEXICO
      case "Mexico":
        if(myHeight >= 160.9 && myHeight <= 169.9){
          alert("En Mexico: Tu estatura es promedio a este Pais.");
        }else if(myHeight >= 170.0){
          alert("En Mexico: Tu estatura es Promedio a un varon");
        }else if(myHeight <= 160.8){
          alert("En Mexico: Tu estatura es Promedio a una mujer");
        }
      break;

      // AUSTRALIA
      case "Australia":
        if(myHeight >= 166.0 && myHeight <= 179.3){
          alert("En Australia: Tu estatura es promedio a este Pais.");
        }else if(myHeight >= 179.2){
          alert("En Australia: Tu estatura es Promedio a un varon");
        }else if(myHeight <= 165.9){
          alert("En Australia: Tu estatura es Promedio a una mujer");
        }
      break;

      // CANADA
      case "Canada":
        if(myHeight >= 164.0 && myHeight <= 178.2){
          alert("En Canada: Tu estatura es promedio a este Pais.");
        }else if(myHeight >= 178.1){
          alert("En Canada: Tu estatura es Promedio a un varon");
        }else if(myHeight <= 163.9){
          alert("En Canada: Tu estatura es Promedio a una mujer");
        }
      break;

      // BRASIL
      case "Brasil":
        if(myHeight >= 161.0 && myHeight <= 174.7){
          alert("En Brasil: Tu estatura es promedio a este Pais.");
        }else if(myHeight >= 173.6){
          alert("En Brasil: Tu estatura es Promedio a un varon");
        }else if(myHeight <= 160.9){
          alert("En Brasil: Tu estatura es Promedio a una mujer");
        }
      break;

      // REINO UNIDO
      case "Reino Unido":
        if(myHeight >= 164.5 && myHeight <= 177.6){
          alert("En Reino Unido: Tu estatura es promedio a este Pais.");
        }else if(myHeight >= 177.5){
          alert("En Reino Unido: Tu estatura es Promedio a un varon");
        }else if(myHeight <= 164.4){
          alert("En Reino Unido: Tu estatura es Promedio a una mujer");
        }
      break;

      // OTRO PAIS
      default:
      alert("no hay datos de estatura de este pais")
      break;
  }
}



//ejercicio 3
function ejercicio3() {
  
}

