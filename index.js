//ejercicio 1
let num1 = 7
let num2 = 5

if (num1, num2) {
    if (num1 > num2) {
        console.log("El primer número es mayor que el segundo.");
    }
}
//ejercicio 2

if (num1, num2) {
    if (num1 === num2) {
        console.log("Los números son iguales.");
    } else {
        console.log("Los números son diferentes.");
    }
}

//ejercicio 3
if (num1, num2) {
    if (num1 > num2) {
        console.log("El primer número es mayor que el segundo.");
    } else if (num2 >= num1) {
        console.log("El segundo número es mayor que el primero.");
    } else {
        console.log("Los números son iguales.");
    }
}

//ejercicio 4
let num = 10
let masChico

if (num, num1, num2) {
    if (num <= num1 && num <= num2) {
        masChico = num;
    } else if (num2 <= num && num1 <= num2) {
        masChico = num1;
    } else {
        masChico = num2;
    }
    console.log(masChico);
}

// ejercicio 5
let persona1 = {
    nombre: "liz",
    edad: 34,
    altura: 1.62
}

let persona2 = {
    nombre: "jose",
    edad: 54,
    altura: 1.82,
}

// Comparar alturas
if (persona1.altura > persona2.altura) {
    console.log(`${persona1.nombre} es más alto que ${persona2.nombre}.`);
} else if (persona2.altura > persona1.altura) {
    console.log(`${persona2.nombre} es más alto que ${persona1.nombre}.`);
} else {
    console.log("Ambas personas tienen la misma altura.");
}

// Comparar edades
if (persona1.edad > persona2.edad) {
    console.log(`${persona1.nombre} es mayor que ${persona2.nombre}.`);
} else if (persona2.edad > persona1.edad) {
    console.log(`${persona2.nombre} es mayor que ${persona1.nombre}.`);
} else {
    console.log("Ambas personas tienen la misma edad.");
}

//ejercicio 6
let nombreConductor = "joseph"
let edadConductor = 35
let alturaConductor = "174cm"
let visionConductor = "9/10"

/*nombreConductor = prompt("ingrese nombre")
edadConductor = prompt("ingrese edad")
alturaConductor = prompt("ingrese altura")
visionConductor = prompt("tipo de vision (1 al 10)")*/

if (edadConductor >= 18 && alturaConductor > 150 && visionConductor > 8) {
    console.log(`${nombreConductor}, estás capacitado/a para conducir.`);
} else {
    console.log(`${nombreConductor}, no cumples los requisitos para conducir.`);
}

//ejercicio 7
let nombre = "Ana"
let pase = "vip"
// Solicitar datos al usuario
/*
let nombre = prompt("Ingresa tu nombre:");
let pase = prompt("¿Tienes un pase? (vip/ normal/ no):");

// Verificar si tiene el mismo nombre o un pase vip
if (nombre === "Ana" || pase === "vip") {
    console.log("¡Bienvenido/a! Tienes acceso libre.");
    
}else if(pase === "si") {
    let usarEntrada = promt("desea usar su entrada si/no")
    if(usarEntrada === "si")
    console.log("Bienvenido");
}else {
    let comprarEntrada = prompt("¿Deseas comprar una entrada? (si o no):");
    if (comprarEntrada) {

     let dineroDisponible = (prompt("Ingresa tu dinero disponible:"));
        if (dineroDisponible >= 1000) {
            console.log("¡Venta exitosa! Bienvenido/a al evento.");
        } else {
            console.log("Lo siento, no tienes suficiente dinero para comprar una entrada.");
        }
    } else {
        console.log("Gracias por tu visita. ¡Hasta luego!");
    }
}
*/

//ejercicio 8
// número aleatorio entre 1 y 10
/*let numeroIncognita = 7

let numeroIngresado = parseInt(prompt("ingrese num de adivinanza"))

// Juego de adivinanza 1

if (numeroIngresado === numeroIncognita) {
    console.log("¡Ganaste! ¡Has adivinado el número!");
} else {
    if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor. Vuelve a intentarlo.");

    } else {

        console.log("El número ingresado es menor. Vuelve a intentarlo.");
    }
}

numeroIngresado = parseInt(prompt("ingrese num de adivinanza"))

// Juego de adivinanza 2

if (numeroIngresado === numeroIncognita) {
    console.log("¡Ganaste! ¡Has adivinado el número!");
} else {
    if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor. Vuelve a intentarlo.");

    } else {

        console.log("El número ingresado es menor. Vuelve a intentarlo.");
    }
}

// Juego de adivinanza 3
numeroIngresado = parseInt(prompt("ingrese num de adivinanza"))

if (numeroIngresado === numeroIncognita) {
    console.log("¡Ganaste! ¡Has adivinado el número!");
} else {
    console.log("Lo siento sera la proxima.");
} */

//ejercicio 9
/*let edadIndividuo = parseInt(prompt("Que edad tienes?"))


if (edadIndividuo <= 12) {
    console.log("Eres un infante");
} else {
    if (edadIndividuo <= 18) {
        console.log("Eres un adolecente");
    } else {
        if (edadIndividuo <= 45) {
            console.log("Eres joven");
        } else {
            if (edadIndividuo > 45) {
                console.log("Eres un anciano");
            }
            if (edadIndividuo > 100 ) {
                console.log("¿Realmenmte tienes esa edad?");
            }
        }
    }
}*/

//ejercicio 10 
/*
let opciones = {
    piedra: "tijeras",
    papel: "piedra",
    tijeras: "papel"
}

let jugador1 = prompt("Jugador 1, elige PIEDRA, PAPEL o TIJERAS:")
let jugador2 = prompt("Jugador 2, elige PIEDRA, PAPEL o TIJERAS:")

// (!) verifica si la elección del no está en el objeto  
if (!opciones[jugador1] || !opciones[jugador2]) {
    console.log("¡Uno de los jugadores ha hecho trampa! Ingresa opciones válidas.");
} else if (jugador1 === jugador2) {
    console.log("Empate. Ambos eligieron " + jugador1);
} else if (opciones[jugador1] === jugador2) {
    console.log("¡Jugador 1 gana! " + jugador1 + " vence a " + jugador2);
} else {
    console.log("¡Jugador 2 gana! " + jugador2 + " vence a " + jugador1);
}
*/

//ejercicio 11

