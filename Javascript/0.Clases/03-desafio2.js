/*let diaSemana = prompt("Que dia es?");
if ( diaSemana == 'Sábado' || diaSemana == 'Domingo' || diaSemana == 'Lunes') {
    alert("¡Buen fin de semana!");
} else {
    alert("¡Buena semana!")
}
*/

/* 

Parte 2 

let numeroUsuario = prompt('ingrese un numero');
if (numeroUsuario >0) {
    alert("El numero es positivo");
} else if ( numeroUsuario == 0){
    alert("El numero es 0")

} else {
    alert("El numero es negativo")
}

*/

/*
Parte 3
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
*/
/*
let n = 0;
let suma = 0;
while (n<3) {
    let numero = parseInt(prompt(`ingrese la puntuacion #${n+1}`));
    suma +=numero;
    n = n+1;
}
if ( suma >100) {
    alert(`Su puntuacion es: ${suma}, ¡Felicidades, has ganado!`);
} else{
    alert(`Su puntuacion es: ${suma}, Intentalo nuevamente para ganar.`)
}
/*
Parte 4
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
*/
/*
let saldoCuenta = 100;
alert(`Ud tiene en su cuenta ${saldoCuenta}`);

/*
Parte 5
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

let nombreUsuario = prompt('Cual es tu nombre?');
alert(`Bienvenido/a ${nombreUsuario}`)