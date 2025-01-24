// Parte 1
// Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];
// Parte 2 Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin','Python'];
// Parte 3
// Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java','Ruby','Golang');
// Parte 4
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function elementosEnLista() {
    let contador = 0;
    while (contador < lenguagesDeProgramacion.length) {
        console.log(lenguagesDeProgramacion[contador]);
        contador++;
    }
}
// Parte 5
// Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function elementosEnListaInverso() {
    let longitud = lenguagesDeProgramacion.length;
    while (longitud>0) {
        console.log(lenguagesDeProgramacion[longitud-1]);
        longitud--;
    }
}
// Parte 6
// Crea una función que calcule el promedio de los elementos en una lista de números.
function promedio(lista1) {
    let contador = 0;
    let promedio = 0;
    while (contador< lista1.length) {
        promedio += lista1[contador];
        contador++;
    }
    console.log(`El promedio es: ${promedio/lista1.length}`);
}
// Parte 7
// Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
function minMax(lista1) {
    let min = Math.min(...lista1);
    let max = Math.max(...lista1);
    console.log(`Esta lista tiene valor minimo: ${min} y valor maximo: ${max}`);   
}
// Parte 8
// Crea una función que devuelva la suma de todos los elementos en una lista.
function sum(list1) {
    let contador = 0;
    let suma = 0;
    while (contador<list1.length) {
        suma += list1[contador];
        contador++
    }
    console.log(`La suma de todos los elementos es: ${suma}`);
}
// Parte 9
// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
function buscarPosicion(elemento,lista1) {
    if (!lista1.includes(elemento)) {
        console.log(-1);  
    } else {
       for ( let index in lista1){
            if (lista1[index]==elemento) {
                console.log(`El elemento a buscar es: ${elemento}, y su posicion es:${index}`);
            }
        }
    }
}
// Parte 10
// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function zippedList(list1,list2) {
    if (list1.length != list2.length) {
        console.log('Las longitudes de las listas no son las mismas');
    } else {
        let list3 = [];
        for (var index = 0; index < list1.length; index++) {
           list3.push(list1[index]+list2[index]);
        };
        console.log(list3);
    }
}
// Parte 11
// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoLista(lista1) {
    for (let index = 0; index < lista1.length; index++) {
        lista1[index] = lista1[index]**2;
    }
    console.log(lista1);
}


elementosEnLista();
elementosEnListaInverso();
promedio([1,2,3,4,5]);
minMax([6,2,3,4,5]);
sum([3,4,3])
buscarPosicion(35,[1,4,35,2,32,3,14,'b']);
zippedList([1,2,3],[2,3,4]);
cuadradoLista([8,9]);
