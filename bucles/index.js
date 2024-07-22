//Ejercicio 1

// let numeroMultiplicado = 5

// for (let i = 1; i <= 10; i++) {
//     console.log(numeroMultiplicado * i);
// }

//Ejercicio 2

// for (let i = 25 ; i > 0; i--) {
//     console.log( i );
// }
// console.log("llego a cero");

//Ejercicio 3

// let numeroAdivinado = 7
// let gano = false
// let intentos = 0

// for (let i = 1; i <= 100; i++) {
//     let numIngresar = parseInt(prompt("Ingresa un número entre 1 y 100"))
//     if (numIngresar === numeroAdivinado) {
//         gano = true;
//         alert(`¡Felicitaciones! Adivinaste el número en ${intentos} intentos.`);
//         break;
//     } else {
//         intentos++;
//         if (numeroAdivinado > numIngresar) {
//             alert("El numero es menor, vuelve a intentarlo");
//         } else {
//             alert("El numero es mayor, vuelve a intentarlo ");
//         }

//     }
// }


//Ejercicio 4
// function primo(numero) {
//     if (numero <= 1) {
//         return false;

//     }
//     for (let i = 2; i <= numero / 2; i++) {
//         // (%) para imprimir pares e impares
//         if (numero % i === 0) {
//             return false; // Si encontramos un divisor, no es primo
//         }
//     }

//     return true; // Si no encontramos divisores, es primo
// }

// let numeroIngresado = parseInt(prompt("Ingresa un número para verificar si es primo:"));

// if (primo(numeroIngresado)) {
//     alert(`${numeroIngresado} es un número primo.`);
// } else {
//     alert(`${numeroIngresado} no es un número primo.`);
// }

//Ejercicio 5



//Ejercicio 6

let fechas = [5, 7, 15, 9, 1989, 23, 26, 20, 3, 18]

let significado = parseInt(prompt("Escribe uno de los siguientes numeros y te digo el significado: 5, 7, 15, 9, 1989, 23, 26, 20, 3, 18 "));
while (i < fechas.length) {

    switch (significado) {
        case 5:
            console.log("Representa la cantidad de hermanos que somos.");
            break;
        case 7:
            console.log("Con Papá y Mamá somos 7.");
            break;
        case 15:
            console.log("La fecha de mi cumpleaños.");
            break;
        case 9:
            console.log("mes de mi aniversario.");
            break;
        case 1989:
            console.log("Año de mi nacimiento.");
            break;
        case 23:
            console.log("Numero de la camiseta de Bechkam en el Real Madrid.");
            break;
        case 26:
            console.log("Dia del cumple de mi prometido.");
            break;
        case 20:
            console.log("Dia del cumple de mi papá.");
            break;
        case 3:
            console.log("Dia que llegue a la Argentina.");
            break;
        case 18:
            console.log("Dia que Argentina Gano la copa mundial de fulbol.");
            break;
        default:
            console.log("No tengo información sobre ese número.");
    }
}




//Ejercicio 7


//Ejercicio 8
//Ejercicio 9
//Ejercicio 10
//Ejercicio 11
//Ejercicio 12
//Ejercicio 13
//Ejercicio 14
//Ejercicio 15
//Ejercicio 16
