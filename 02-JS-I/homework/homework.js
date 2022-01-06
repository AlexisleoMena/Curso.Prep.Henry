const nuevaString = "Hola";

const nuevoNum = 23;

const nuevoBool = true;

const nuevaResta = 10 - 5 === 5;

const nuevaMultiplicacion = 10 * 4 === 40 ;

const nuevoModulo = 21 % 5 === 1;

function devolverString(str) { return str;}

function suma(x, y) { return x+y;}

function resta(x, y) { return x-y;}

function multiplica(x, y) { return x*y;}

function divide(x, y) {
  if(y===0)
    return -1;
  return x/y;
}

function sonIguales(x, y) { return x===y;}

function tienenMismaLongitud(str1, str2) { return str1.length === str2.length;}

function menosQueNoventa(num) { return num<90;}

function mayorQueCincuenta(num) { return num>50;}

function obtenerResto(x, y) { return x%y;}

function esPar(num) { return num%2 === 0;}

function esImpar(num) { return num%2 !== 0;}

function elevarAlCuadrado(num) { return Math.pow(num,2);}

function elevarAlCubo(num) { return Math.pow(num,3);}

function elevar(num, exponent) { return Math.pow(num,exponent);}

function redondearNumero(num) { return Math.round(num);}

function redondearHaciaArriba(num) { return Math.ceil(num); /*floor -> hacia abajo*/}

function numeroRandom() {
  /*Número entre min(incluido) y max(excluido): Math.random()*(max - min) + min;
    Etero entre min(incluido) y max(excluido): Math.floor(Math.random()*(max - min)) + min;*/
  return Math.random();
}

function esPositivo(numero) {
  if(numero !== 0)
    if(numero>0)
      return "Es positivo";
    else
      return "Es negativo";
  return false;
}

function agregarSimboloExclamacion(str) { return str+"!";}

function combinarNombres(nombre, apellido) { return nombre+" "+apellido;}

function obtenerSaludo(nombre) { return "Hola "+nombre+"!";}

function obtenerAreaRectangulo(alto, ancho) { return alto*ancho;}

function retornarPerimetro(lado){ return lado*4;}

function areaDelTriangulo(base, altura){ return (base*altura)/2;}

function deEuroAdolar(euro){ return euro*1.20;}

function esVocal(letra){
  if(letra.length === 1){
    letra = letra.toLowerCase();
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u")
      return "Es vocal";
  }
  return "Dato incorrecto";
}

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};