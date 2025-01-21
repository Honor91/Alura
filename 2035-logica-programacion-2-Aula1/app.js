let numeroSecreto = generarNumeroSecreto()

function asignarTextoElemento(elemento,texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento() {
    let numeroDelUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    console.log(numeroDelUsuario);
    console.log(numeroDelUsuario == numeroSecreto);
}

function intentoDeUsuario() {
    alert('click desde la funcion');
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero del 1 al 10');
verificarIntento();
