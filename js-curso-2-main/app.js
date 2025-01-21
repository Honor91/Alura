// Parte 2
// Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
// creando variable titulo luego instanciandola
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

//parte 3
// Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function mensaje() {
    alert('El botón fue clicado');
};

// Parte 4
// Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

function nombreCiudad() {
    let nombre = prompt('Dime el nombre de una ciudad de Brasil');
    alert(`Estuve en ${nombre} y me acorde de ti`);
};
// parte 5
// Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function mensajeAlerta() {
    alert('Yo amo JS')
}
// parte 6
// Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function sum(){
    let numb1 = parseInt(prompt('Ingrese el primer numero'));
    let numb2 = parseInt(prompt('Ingrese el segundo numero'));
    let suma = numb1 + numb2;
    alert(`${suma}`);
};