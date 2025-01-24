// Parte 1 Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludo1() {
    console.log('¡Hola, mundo!');
};
// Parte 2 Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludo2(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
// Parte 3 Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function dobleNumero(numero1) {
    console.log(numero1*2);     // Para que se vea en consola
    return numero1*2;
}
// Parte 4 Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numeroX,numeroY,numeroZ) {

    console.log((numeroX + numeroY + numeroZ)/3);     // Para que se vea en consola
    return (numeroX + numeroY + numeroZ)/3;
}
// Parte 5 Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function numeroMayor(numb1,numb2) {
    console.log( numb1 > numb2 ? numb1 : numb2 );     // Para que se vea en consola
    return numb1 > numb2 ? numb1 : numb2;
}
// Parte 6 Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function potencia(num) {
    console.log(num*num);     // Para que se vea en consola
    return num*num;
}
saludo1();
saludo2('Antony');
dobleNumero(10);
promedio(100,200,300);
numeroMayor(505,400);
potencia(2.12);