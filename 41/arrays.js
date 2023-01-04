//Clase 11 arreglos

var fruta = [];

var fruta = new Array();

const a = []
console.log(a)

const b = [12,2,3,"o","p","t"]
console.log(b)
console.log(b.length)

b.sort(function(a,b){
    return a-b
    
})

console.log("Arreglo ordenado: " + b)


console.log(b.sort(function(a,b){
    return a-b
}))

const c = ["a","b","c",[1,2,3,4,5],"d","e"]
console.log(c)

// Filtrar impares
// const numeros = [1, 2, 3, 4];
// const pares = numeros.filter(item => item % 2 === 0);
// console.log(pares); // [2, 4]

// Filtrar Pares

// const numeros = [1, 2, 3, 4];
// const impares = numeros.filter(item => item % 2 === 1);
// console.log(pares); // [1, 3]

// Mostrar los duplicados

// let letras = ['A', 'B', 'A', 'C', 'B'];

// let letrasDuplicadas = letras.filter((elemento, index) => {
//     return letras.indexOf(elemento) !== index;
// });

// console.log(letrasDuplicadas);


/*Para obtener el promedio, tenemos que resumir los números y luego dividir por el número de valores. Los pasos son los siguientes:

obtener la longitud del array
sumar los valores
obtener el promedio (suma/length)

let values = [2, 56, 3, 41, 0, 4, 100, 23];
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;
// avg = 28*/

/****Con variable que guarda el tamanio del array*****

let values = [2, 56, 3, 41, 0, 4, 100, 23];
let count = values.length;
values = values.reduce((previous, current) => current += previous);
values /= count;
avg = 28*/
