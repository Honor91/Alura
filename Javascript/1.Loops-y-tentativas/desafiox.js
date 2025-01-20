// Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let n=0;
while (n<10) {
    n++;
    console.log(n);
}

//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let m=10;
while (m>=0){
    console.log(m)
    m--;
}
//Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let cuentaRegresiva = parseInt(prompt('Ingrese un numero para realizar la cuenta regresiva'));
while (cuentaRegresiva>=0) {
    console.log(cuentaRegresiva);
    cuentaRegresiva--
}


//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let ingreseNumero = parseInt(prompt('Ingrese un numero entero positivo'));

let k = 0;
while ( k <ingreseNumero+1) {
    console.log(k);
    k++;
}