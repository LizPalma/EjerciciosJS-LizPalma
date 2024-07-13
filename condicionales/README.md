# EjerciciosJS-LizPalma

Resumen 

1. Palabra reservada “if” para crear una sentencia de decisión. 
2. Abrir paréntesis (expresión a evaluar) donde ira la sentencia a evaluar la cual dará 
siempre tendrá como valor verdadero (true) o falso (false). 
3. Abrir llaves {… bloque de código…} para escribir la o las acciones a realizar en caso de 
que la expresión a evaluar haya sido verdadera (true). 
4. Luego de la llave de cierre de la expresión “if” se puede utilizar “else” por si se quiere 
realizar alguna acción o acciones cuando la expresión evaluada dentro del “if” haya 
sido falsa (false). 
5. En caso de usar “else” se debe abrir nuevamente llaves {…bloque de código…} para 
realizar la o las acciones en el mismo. 
6. También se puede escribir “else if {…bloque de código…}” para realizar otra pregunta 
en caso de haber sido falsa (false) el valor del “if” inicial y se puede seguir agregando 
tantos “else {}” o “else if{}” como se requieran al finalizar una sentencia “if” o “else if”. 
7. Palabra reservada “switch” para crear una sentencia de decisión múltiple. 
8. Abrir paréntesis (variable de control) para colocar la variable que se va a evaluar el 
valor que contiene. 
9. Abrir llaves para escribir el bloque de código del “switch(variable de control){…bloque 
de código…}” 
10. Dentro de las llaves se definen los casos literales a evaluar: ”case ‘valor’:{}”. 
11. Dentro de cada caso se debe usar la palabra reservada “break” para finalizar ese caso 
de uso. 
12. Al final de los casos declarar un caso “default:{}” para cualquier caso no contemplado. - 
Dato extra, pueden utilizar la función “confirm(‘texto de pregunta al usuario’)” para 
poder preguntar algo por pantalla y según sea la respuesta escogida por el usuario la 
función devuelve verdadero (true) o falso (false) según corresponda. 


                               Ejercitación: 

1. Realizar un programa que dado 2 números imprima por consola si el primer numero es mayor que el segundo. ✔

2. Realizar un programa que dado 2 números imprima por consola si los numeros son 
iguales o si son diferentes. ✔

3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros 
es el mas grande o si son iguales. ✔

4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más chico. ✔

5. Realizar un programa que dado 2 objetos representando personas con las propiedades nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual es la de mayor edad. ✔

6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión y permita determinar si estas capacitado para conducir. La persona deberá cumplir con una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como mínimo. ✔

7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase 
(vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu mismo nombre tienen ingreso libre así como también los que posean un pase vip, mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en caso contrario a no querer comprar, mostrar mensaje de despedida. ✔

8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá guardar en una variable llamada numeroIngresado, y en cada intento deberás 
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a 
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de 
adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si usas mucho código repetido, mas adelante veraz como realizar este juego de manera 
más eficiente. ✔

9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12 
años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de 45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje 
preguntando si en realidad tiene esa edad. ✔

10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 
jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho 
trampa. ✔

11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol, Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor: Excelente elección, no lo teníamos pensado. ✔

12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación. Según sea la operación ingresada (suma, resta, multiplicación, división) el programa deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber elegido división realizar la operación siempre que sea posible o mostrar un mensaje de ERROR si el divisor ingresado fue 0. 

13. Crear un programa que permita ingresar todos los datos de tu documento nacional de identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.