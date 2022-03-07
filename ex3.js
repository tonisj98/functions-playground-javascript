/**
 * Hasta ahora hemos visto funciones muy sencillitas, pero pueden ser más complejas.
 * 
 * La siguiente función escribe 'n' veces el texto que le pasamos en 'texto'
 */

 function escribeVeces(n, texto) {
     for (let i=0; i<n; i++) {
         console.log(texto)
     }
 }

 /**
  * Invoca esta función de manera adecuada para que escribe la palabra 'Hola!' 10 veces
  */
 escribeVeces(10, "HOLA!")

