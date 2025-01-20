// 1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log('Bienvenido querido amig@!');
// 2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let nombre = 'Antony';
console.log(`¡Hola, ${nombre}`);
// 3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
alert(`¡Hola, ${nombre}`);
// 4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
let lenguajePreferido = prompt('¿Cuál es el lenguaje de programación que más te gusta?.');
console.log(lenguajePreferido);
// 5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
let valor1 = Math.floor(Math.random()*10+1);
let valor2 = Math.floor(Math.random()*10+1);
let resultado = valor1 + valor2;
console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}.`);
// 6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
let resultado2 = valor1>valor2? valor1-valor2 : valor2-valor1;
console.log(`La diferencia positiva entre ${valor1} y ${valor2} es igual a ${resultado2}.`);
// 7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
let edad = parseInt(prompt('Cual es tu edad queridisimo amigo'));
let estado = edad > 18 ? 'Mayor de edad' : 'Menor de edad, estas wawita';
console.log(`Ud es: ${estado}`);
// 8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
let numero = parseInt(prompt('Ingrese un numero'));
let tipo = numero > 0 ? 'Positivo': numero==0? 'igual a 0': 'Negativo';
console.log(`El numero elegido es ${tipo}`);
// 9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let n = 1;
while (n<11) {
    console.log(`numero ${n}`);
    n++;
};
// 10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
let nota = Math.floor(Math.random()*10+1);
let resultado10 = nota > 7 ? 'Aprobado' : 'Reprobado';
console.log(`El valor de la nota es: ${nota} Ud ha ${resultado10}`);
// 11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio1 = Math.random();
console.log(numeroAleatorio1);
// 12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let numeroAleatorio2 = Math.floor(Math.random()*10+1);
console.log(numeroAleatorio2);
// 13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let numeroAleatorio3 = Math.floor(Math.random()*1000+1);
console.log(numeroAleatorio3);