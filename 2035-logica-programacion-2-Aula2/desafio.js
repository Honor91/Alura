// Parte 1
// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function indiceMasaCorporal(altura,peso) {
    return peso/Math.pow(altura,2);
}
// Parte 2 
// Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function factorialNumero(numero){
    return numero === 0 ? 1: factorialNumero(numero-1)*numero;
}
// Parte 3 
// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function dolaresASolesPeruanos(cantidadDolares) {
    let tipoDeCambio = 3.72;
    return cantidadDolares*tipoDeCambio
}

// Parte 4 
// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
function figura(altura, anchura) {
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.innerHTML = `El perimetro es ${2*(altura+anchura)}`
    p2.innerHTML = `El Area es ${anchura*altura}`
    let body = document.querySelector('body');
    body.append(p1);
    body.append(p2);
}
// Parte 5 
// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
function area(radio) {
    let pi = 3.14;
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.innerHTML = `El area es: ${pi*Math.pow(radio,2)}`
    p2.innerHTML = `El perimetro es: ${2*pi*radio}`
    let body = document.querySelector('body');
    body.append(p1);
    body.append(p2);
}

// Parte 6 
// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function tablaMultiplicar(numero) {
    let n=1;
    while (n<101) {
        console.log(`${numero} por ${n} es igual a: ${numero*n}`);
        n++;    
    }
}

console.log(factorialNumero(5));
console.log(dolaresASolesPeruanos(10));
figura(3,2);
area(1,2);
tablaMultiplicar(3)