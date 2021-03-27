/********************************************************************************
1 - Crear un script que reciba la dimensión de los 3 lados de un triángulo, y con base en la información recibida, determine si el triángulo en cuestión es equilátero, isóceles o escaleno. Informar el resultado mediante un alert.
2 - Crear un script para recibir 2 de los lados de un cuadrilátero, y determinar si es un cuadrado o un rectángulo. Informar el resultado mediante un alert
2.1 - Calcular el área del cuadrilátero en cuestión, e informarla a través de un alert
3 - Crear un script que pida los datos necesarios para calcular el área de un triángulo, calcular el área y entregar el resultado mediante un alert.
********************************************************************************/

//ejercicio 1
function ejercicio1() {
  var ladoUno = parseInt(prompt("Escribe el valor del primer lado"));
  var ladoDos = parseInt(prompt("Escribe el valor del segundo lado"));
  var ladoTres = parseInt(prompt("Escribe el valor del tercer lado"));
  if (ladoUno === ladoDos && ladoUno === ladoTres) {
    alert(
      ladoUno +
        "," +
        ladoDos +
        "," +
        ladoTres +
        " " +
        "El triangulo es Equilatero"
    );
  } else if (
    (ladoUno === ladoDos && ladoTres !== ladoUno) ||
    (ladoUno === ladoTres && ladoDos !== ladoUno) ||
    (ladoDos === ladoTres && ladoTres !== ladoUno)
  ) {
    alert(
      ladoUno +
        "," +
        ladoDos +
        "," +
        ladoTres +
        " " +
        "El triangulo es Isoseles"
    );
  } else if (
    ladoUno !== ladoDos &&
    ladoUno !== ladoTres &&
    ladoDos !== ladoTres
  ) {
    alert(
      ladoUno +
        "," +
        ladoDos +
        "," +
        ladoTres +
        " " +
        "El triangulo es Escaleno"
    );
  }
}

//ejercicio 2
function ejercicio2() {
  var ladoAB = parseInt(prompt("Escribe el valor de un par de lados"));
  var ladoCD = parseInt(prompt("Escribe el valor del otro par de lados"));
  var area = ladoAB * ladoCD;
  if (ladoAB === ladoCD) {
    alert(
      ladoAB + "," + ladoCD + " " + "Es un cuadrado con un area de: " + area
    );
  } else {
    alert(
      ladoAB + "," + ladoCD + " " + "Es un rectangulo con un area de: " + area
    );
  }
}

//ejercicio 3
function ejercicio3() {
  var baseTriangulo = parseInt(
    prompt("Escribe el valor de la base del triangulo")
  );
  var alturaTriangulo = parseInt(
    prompt("Escribe el valor de la altura del triangulo")
  );
  var areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

  alert("El área del triángulo es: " + areaTriangulo);
}
