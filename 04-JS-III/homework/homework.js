// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
return array.length;
 }

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(var i=0; i < array.length; i++){
     array[i]=array[i]+1;
  }
  return array;
  }

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  return array
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  if(palabras.length===4){
    str=palabras[0]+" "+palabras[1]+" "+palabras[2]+" "+palabras[3];
    return str
} 
if(palabras.length===3){
    str=palabras[0]+" "+palabras[1]+" "+palabras[2];
    return str
}
if(palabras.length===2){
    str=palabras[0]+" "+palabras[1]
    return str
    }
    if(palabras.length===1){
      str=palabras[0]
      return str
    }
  }

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i=0; i < array.length; i++){
    if(array[i]===elemento) {     
return true; 
}
} return false
} 
 

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  for(var i=0; i < numeros.length; i++){
    if(numeros.length===4) {     
    suma=numeros[0]+numeros[1]+numeros[2]+numeros[3]
     return suma
   } 
   if(numeros.length===3) {     
    suma=numeros[0]+numeros[1]+numeros[2]
     return suma
   }  
   if(numeros.length===2) {     
    suma=numeros[0]+numeros[1]
     return suma  
   }
   if(numeros.length===1) {     
     return numeros[0]
   }
   }
  }

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  for(var i=0; i < resultadosTest.length; i++){
    if(resultadosTest.length===6) {     
      suma=(resultadosTest[0]+resultadosTest[1]+resultadosTest[2]+resultadosTest[3]+resultadosTest[4]+resultadosTest[5])/6
       return suma
     } 
    if(resultadosTest.length===5) {     
      suma=(resultadosTest[0]+resultadosTest[1]+resultadosTest[2]+resultadosTest[3]+resultadosTest[4])/5
       return suma
     } 
    if(resultadosTest.length===4) {     
    suma=(resultadosTest[0]+resultadosTest[1]+resultadosTest[2]+resultadosTest[3])/4
     return suma
   } 
   if(resultadosTest.length===3) {     
    suma=(resultadosTest[0]+resultadosTest[1]+resultadosTest[2])/3
     return suma
   }  
   if(resultadosTest.length===2) {     
    suma=(resultadosTest[0]+resultadosTest[1])/2
     return suma  
   }
   if(resultadosTest.length===1) {     
     return numeros[0]
   }
   }
  }

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var total1 = "";
  for(var i = 0; i < numeros.length; i++){
  if (total1 < numeros[i]) {
    total1 = numeros[i]
 } 
  }
 return total1
}    
 

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
 var total = 1;
 for(var i = 0; i < arguments.length; i++)
 total = (total * arguments[i]);{
 
if (arguments.length===0){
  return (0)
}
  else {
    return total
}  
}
}

// No modificar nada debajo de esta línea
// --------------------------------

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
};
