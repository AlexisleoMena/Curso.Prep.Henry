const { suma } = require("../../02-JS-I/homework/homework");

function devolverPrimerElemento(array) { return array[0];}

function devolverUltimoElemento(array) { return array[array.length - 1];}

function obtenerLargoDelArray(array) { return array.length;}

function incrementarPorUno(array) {
  var NewArray = [];
  for(var i=0; i<array.length; ++i)
    NewArray.push(array[i]+1);
  return NewArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) { return palabras.join(" ");}

function arrayContiene(array, elemento) {
  for(var i=0; i<array.length; ++i)
    if(array[i] === elemento)
      return true;
  return false;
}

function agregarNumeros(numeros) {
  var suma = 0;
  for(var i=0; i<numeros.length; ++i)
    suma += numeros[i];
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  var suma = 0;
  for(var i=0; i<resultadosTest.length; ++i)
    suma += resultadosTest[i];
  return suma/resultadosTest.length;
}

function numeroMasGrande(numeros) {
  var mayor = numeros[0];
  for(var i=1; i<numeros.length; ++i)
    if(mayor<numeros[i])
      mayor = numeros[i];
  return mayor;
}

function multiplicarArgumentos() {
  if(arguments.length<1) return 0;
  var total = 1;
  for(var i=0; i<arguments.length; ++i)
    total *= arguments[i];
  return total;
}

function cuentoElementos(arreglo){
  var cantidad = 0;
  for(var i=0; i<arreglo.length; ++i)
    if(arreglo[i]>19)
      cantidad++;
    return cantidad;
}

function diaDeLaSemana(numeroDeDia) {
  if(numeroDeDia>1 && numeroDeDia<7) return "Es dia Laboral";
  return "Es fin de semana";
} 

function empiezaConNueve(n) {
  let num = n.toString();
  return num.charAt(0) === '9';
}

function todosIguales(arreglo) {
  for(var i=0; i<arreglo.length-1; ++i)
    if(arreglo[i] !== arreglo[i+1])
      return false;
  return true;
} 

function mesesDelAño(array) {
  var NewArray = []; 
  for(var i=0; i<array.length; ++i)
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre")
      NewArray.push(array[i]);
  if(NewArray.length<3) return "No se encontraron los meses pedidos";
  return NewArray;
}

function mayorACien(array) {
  var NewArray = [];
  for(var i=0; i<array.length; ++i)
    if(array[i]>100)
      NewArray.push(array[i]);
  return NewArray;
}

function breakStatement(numero) {
  var array = [];
  for(var i=0; i<10; ++i){
    numero += 2;
    if(numero !== i){ 
      array.push(numero);
    }else{
      return "Se interrumpió la ejecución";
      break;
    }
  }
  return array;
}


function continueStatement(numero) {
  var array = [];
  for(var i=0; i<10; ++i){
    if(i === 5){ 
      continue;
    }else{
      numero += 2;
      array.push(numero);
    }
  }
  return array;
}

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
