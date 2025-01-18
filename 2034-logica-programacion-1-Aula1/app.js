let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el numero');
}


alert("¡Bienvenida y bienvenido a nuestro sitio web!");

let nombre = 'Lua';
let edad = 25;
parseInt(edad);
let numeroDeVentas = 50;
parseInt(numeroDeVentas);
let saldoDisponible = 1000;
let mensajeDeError ="¡Error! Completa todos los campos";
alert(mensajeDeError);
nombre = prompt("Ingrese su nombre");
edad = prompt("ingrese su edad");

if ( edad >= 18 ) {
    alert("¡Puedes obtener tu licencia de conducir!")
}