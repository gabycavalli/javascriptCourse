/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, 
el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

const sort = (arr = undefined)=>{

    if(arr === undefined) return console.log("No ingresaste numeros");
    if(!(arr instanceof Array)) return console.log("Lo que ingresaste no es un arreglo");
    if(arr.length === 0 ) return console.log("El arreglo no puede estar vacio");

    for(let num of arr){
        if(typeof num !== "number") return console.log("Lo que ingresaste debe ser un numero")
    }

    console.log(`El arreglo ordenado acsendente queda asi: ` + arr.sort());
    console.log(`El arreglo ordenado descendente queda asi: ` + arr.reverse());

}

// sort();
// sort("hola","como","estas")
// sort(1,5,3,9,6,7,3)
// sort([])
// sort([1,5,3,9,6,7,3])



/* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, 
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]*/


const quitRepeated = (arr = undefined)=>{

    if(arr === undefined) return console.log("No ingresaste numeros");
    if(!(arr instanceof Array)) return console.log("Lo que ingresaste no es un arreglo");
    if(arr.length === 0 ) return console.log("El arreglo no puede estar vacio");
    if(arr.length === 1 ) return console.log("El arreglo debe tener mas de 1 elemnto para comparar");

    // creo un nuevo array y le paso los valores filtrados. En este caso los repetidos.

//     let uniquevalues = arr.filter((elemento, index) => { // estoy creando un nuevo array y le paso los elementos y el indice
//     return arr.indexOf(elemento) === index; // aca filtro los elementos que segun el indice tienen el mismo valor
//     });

//     console.log(`El arreglo: [${arr}] sin duplicados queda asi: [${uniquevalues}]`);

// Opcion 2
// return console.log({
//     original: arr,
//     sinDuplicados:arr.filter((values,index,self)=>self.index=== index)
// })

// Opcion 3

 return console.log({
     original: arr,
     sinDuplicados:[... new Set(arr)]
 })
 

 }

//quitRepeated([23,25,63,25,63,96,45,45]);
//quitRepeated([25,25,"Hola","Hola",93,true,true,false])



/* 26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5*/

/******Con FOR normal************** */

const average = (arr = undefined)=>{

    // Validaciones
    if(arr === undefined) return console.log("No ingresaste numeros");
    if(!(arr instanceof Array)) return console.log("Lo que ingresaste no es un arreglo");
    if(arr.length === 0 ) return console.log("El arreglo no puede estar vacio");

    //Recorrer y sumar
    let sum = 0; 
    for(let i=0;i<arr.length;i++){

        sum += arr[i];           

    }

    console.log(`El promedio del array [${arr}] es: ` + (sum/arr.length))
}

// average();
// average(25);
// average([]);
// average([9,8,7,6,5,4,3,2,1,0])
// average([9,8,7])

/**********Con la funcion reduce***************/

//let values = [2, 56, 3, 41, 0, 4, 100, 23];
let values = Array.from({length: 10}, () => Math.floor(Math.random() * 10)); // crea array ramdon
let sum = values.reduce((previous, current) => current += previous);
let avg = sum / values.length;
console.log(`El promedio de [${values.join(" + ")}] es ${avg}`)

