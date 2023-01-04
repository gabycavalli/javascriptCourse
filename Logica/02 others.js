/**Given two integers a and b, which can be positive or negative, in Javascript find the sum of all 
 * the integers between and including them and return it. If the two numbers are equal return a or b.
**********Note: a and b are not ordered!*****************/

function getSum( a,b )
{
   //Good luck!
  let sum = 0;
  let min = Math.min(a, b);
  let max = Math.max(a, b);

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
  
}

/*****************otra opcion*************************/

const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

/**Your task is to make a function that can take any non-negative integer as an argument and return 
 * it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number. */

/**Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321 */

/**
valores.split(" ") -> devuelve un array del contenido de valores separando los elementos por el espacio
map(el => parseInt(el)) -> devuelve cada uno de los valores del array como enteros
sort((a,b) => a-b) -> ordena los valores ascendentemente
join(" ") -> convierte el array en cadena juntando cada elemento del array con un espacio */

function descendingOrder(n){
    //...
    // Convert the integer to a string and split it into an array of digits
    let digits = n.toString().split('');
  
    // Sort the array in descending order
    digits.sort((a, b) => b - a);
  
    // Join the array back into a string and return it as an integer
    return console.log(parseInt(digits.join('')));
  }

  descendingOrder(52369987)