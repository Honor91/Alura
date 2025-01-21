
function asignarTextoElemento(elemento,texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function intentoDeUsuario() {
    alert('click desde la funcion');
}
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero del 1 al 10');