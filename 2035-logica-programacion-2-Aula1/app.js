let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function asignarTextoElemento(elemento,texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function intentoDeUsuario() {
    alert('click desde la funcion');
}
asignarTextoElemento();