//Librerias

//Variables
let tamaño = parseInt(prompt('Que tan grande quieres que sea el numero para jugar?, elige un numero positivo mayor a 0'))
let numeroSecreto = Math.floor(Math.random()*tamaño)+1;
console.log(`El numero secreto es ${numeroSecreto}`);
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = intentos == 1? 'vez':'veces';
let maximoIntentos = Math.floor(Math.random()*10)+1;
console.log(`El numero maximo de intentos es: ${maximoIntentos}`);
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt(`Me indicas un número entre 1 y ${tamaño} por favor:`);
    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo intentaste ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        if (intentos>maximoIntentos) {
            alert('Llegaste al numero maximo de intentos');
            break
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}