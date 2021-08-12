// Do not change any of the function names

function mayuscula(nombre) {
  //1La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
 
  return nombre.toUpperCase().charAt(0)+nombre.slice(1);//
  //or //
  // return nombre[0].toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
  //2 Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //3Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1,n2);
}

function sumarArray(numeros, cb) {
  //4 Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var sum = 0;
  for(var i = 0; i < numeros.length; i++) {
    sum = sum + numeros[i];
   }
   cb(sum);
   /* Segunda opcion
   var sumaTotal = numeros.reduce(function(acc, curr) {
    return acc + curr;
  },0);
  cb(sumaTotal);*/ 
}

function forEach(array, cb) {
  //5 Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for (i=0; i < array.length; i++){
    cb(array[i]);
  }// array.forEach(cb);
}

function map(array, cb) {
  //6 Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  const Narray = array.map (function(element){
    return cb(element);
  })
 return Narray;
}

function filter(array) {
  //7Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  /*var nuevoArray = [];
  for(let i = 0; i<array.length; i++) {
    if(array[i][0] === "a") {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;*/
  /*
  var filtro = array.filter(function(el){
    return el.chartAt(0) === "a" });
  return filtro;*/
  var Narray= [];
  for (var i=0 ; i < array.length; i++){
    if ("a"=== array[i].charAt(0)){ Narray.push(array[i])};
  }
  return Narray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
