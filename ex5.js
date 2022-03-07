/**
 * Extiende la función del ex4.
 * 
 * Ahora, también vamos a determinar el agua necesaria en función de la condición física del ciclista. 
 * 
 * Si la condición es 'buena', el ciclista necesita 0.5l por cada km
 * Si la condicion es 'regular', el ciclista necesita 0.6l por cada km
 * Si la condición es 'mala', el ciclista necesita 0.7l por cada km
 */

/** La función está incompleta */

function agua_necesaria(condicion, km) {
    let agua_por_km
    let litros_totales

    if (condicion == "regular") {
        agua_por_km = 0.6
        litros_totales = km * agua_por_km
        return litros_totales
    }
    if (condicion == "buena"){
        agua_por_km = 0.5
        litros_totales = km * agua_por_km
        return litros_totales
    }
    if (condicion3 == "mala"){
        agua_por_km = 0.7
        litros_totales = km * agua_por_km
        return litros_totales
    }

    return litros_totales

}

let condicion2 = 'buena'
let km2 = 5
let agua2 = agua_necesaria(condicion2, km2)
console.log("Este ciclista deberia necesitar 5 * 0.5 = 3 litros de agua en total: ", agua2) 

 let condicion = 'regular'
let km = 5
let agua = agua_necesaria(condicion, km)
console.log("Este ciclista deberia necesitar 5 * 0.6 = 3 litros de agua en total: ", agua) 



let condicion3 = 'mala'
let km3 = 5
let agua3 = agua_necesaria(condicion3, km3)
console.log("Este ciclista deberia necesitar 5 * 0.7 = 3 litros de agua en total: ", agua3)