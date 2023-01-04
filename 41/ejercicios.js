/*21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

// const numbers = [8,2,6,24,89]
// const squareNumbers = numbers.map(function(num){

//     return Math.pow(num,2)
// })

//console.log(numbers)
//console.log(squareNumbers)

/*22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, 
pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

//let miarray = Array.from({length: 10}, () => Math.floor(Math.random() * 10));

// miarray.forEach(function(item,index,arr){ no
//     console.log(item);no
// }); no

// const valor = miarray[0];
// let menor=0, mayor=0;

// for(let i =0; i<miarray.length;i++){

//     if(valor>miarray[i]){
//         menor = miarray[i]
//     } else{
//         mayor = miarray[i]
//     }

// }
// console.log("***************************************")
// console.log(`El array es: ${miarray}`)
// console.log("***************************************")
// console.log(`El numero menor del array es: ${menor}`);
// console.log("***************************************")
// console.log(`El numero mayorr del array es: ${mayor}`)
// console.log("***************************************")

/*23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos 
en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const miarreglo = Array.from({length: 10}, () => Math.floor(Math.random() * 10));
const pares = number => number % 2 === 0;
const impares = number => number % 2 != 0;
const myArrayPar = [];
const myArrayImPar = [];


/************CON FOR*******************/

// for(let i=0; i<miarreglo.length;i++){

//     if((miarreglo[i] % 2)===0){
//          pares.push(miarreglo[i])
//     }else{
//         impares.push(miarreglo[i])
//      }

//  }

/*********CON FOR OF*******************/

//for(let i=0; i<miarreglo.length;i++){
// for(number of miarreglo)    

//      if(pares(number)){
//         myArrayPar.push(number)
//     }else{
//         myArrayImPar.push(number)
//      }

// console.log("***************************************")
// console.log(`El array es: ${miarreglo}`)
// console.log("***************************************")
// console.log(`Los pares son: ${myArrayPar}`);
// console.log("***************************************")
// console.log(`Los impares son: ${myArrayImPar}`)
// console.log("***************************************")
    

/**************CON FILTER SOLO***************************/

const oddOrEven = (arr = undefined)=>{

    if(arr === undefined) return console.log("No ingresaste numeros");
    if(!(arr instanceof Array)) return ("Lo que ingresaste no es un arreglo");
    if(arr.length === 0 ) return ("El arreglo no puede estar vacio");

    for(let num of arr){

        if(typeof num !=="number") return console.log(`El valor "${num}" ingresado no es un numero`);
    }

    // return console.log({
    //      odd: arr.filter(num => num % 2)===0),
    //      even: arr.filter(num=> num % 2)===1);
    // })
}



// pares = miarreglo.filter((pares => miarreglo % 2)===0)
// impares = miarreglo.filter(!(pares => miarreglo % 2)===0)

/*****************Sacar repetidos de dos arrays*********** */

function arrayDiff(a, b) {
  
    const unicos=[];
    
    for(let i=0;i<a.length;i++){
      
      if(b.indexOf(a[i])===-1){
        unicos.push(a[i]);
      }
      
      
    }
   return unicos; 
  }

arrayDiff([25,25,63,96],[25,25,65,13])

/*******otra opcion***************/

function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }

  /*******otra opcion***************/

  function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
  }

/**You live in the city of Cartesia where all roads are laid out in a perfect grid. 
 * You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
 * The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button 
 * it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
 * You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block,
 * so create a function that will return true if the walk the app gives you will take you exactly ten minutes 
 * (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
 * 
Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
It will never give you an empty array (that's not a walk, that's standing still!). */

  function isValidWalk(walk) {
    // Initialize counters for each direction
    let n = 0, s = 0, w = 0, e = 0;
  
    // Count the number of each direction in the array
    for (let i = 0; i < walk.length; i++) {
      switch(walk[i]) {
        case 'n':
          n++;
          break;
        case 's':
          s++;
          break;
        case 'w':
          w++;
          break;
        case 'e':
          e++;
          break;
      }
    }
  
    // Return true if the number of north and south directions are equal
    // and the number of west and east directions are equal
    // and the length of the array is 10
    return n === s && w === e && walk.length === 10;
  }

/*************CON FILTER******************/

function isValidWalk(walk) {
    const north = walk.filter(item => { return item === "n" }).length;
    const south = walk.filter(item => { return item === "s" }).length;
    const east = walk.filter(item => { return item === "e" }).length;
    const west = walk.filter(item => { return item === "w" }).length;
    
    return walk.length === 10 && north === south && east === west;
  }

  /**Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them 
   * and return it. If the two numbers are equal return a or b.
    *******Note: a and b are not ordered!*******

    Examples (a, b) --> output (explanation)
    (1, 0) --> 1 (1 + 0 = 1)
    (1, 2) --> 3 (1 + 2 = 3)
    (0, 1) --> 1 (0 + 1 = 1)
    (1, 1) --> 1 (1 since both are same)
    (-1, 0) --> -1 (-1 + 0 = -1)
    (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2) */


    
