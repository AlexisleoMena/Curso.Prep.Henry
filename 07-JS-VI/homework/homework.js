function mayuscula(nombre) { return nombre[0].toUpperCase() + nombre.slice(1);}

function invocarCallback(cb) { cb();}

function operacionMatematica(n1, n2, cb) {  return cb(n1, n2);}

function sumarArray(numeros, cb) { 
  var sumaTotal = numeros.reduce(function(acc, curr) { return acc + curr; },0);
  cb(sumaTotal);
}

function forEach(array, cb) {
  // array.forEach(function(el, index) { cb(el);});
  for(var i = 0; i < array.length; i++) 
    cb(array[i]);
}

function map(array, cb) {
  var NewArray = array.map(function(el) {return cb(el);});
  return NewArray;
}

function filter(array) {
  var NewArray = [];
  for(let i = 0; i<array.length; i++) 
    if(array[i][0] === "a") 
      NewArray.push(array[i])
  return NewArray;
}

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
