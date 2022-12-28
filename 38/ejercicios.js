/* 12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

// ver clase 13 - 17

const esPrimo = (numero = "")=>{

    if(numero ===0) return console.log("El numero 0 no es primo");
    if(numero ===1) return console.log("El numero 1 no es primo");    
    if(typeof numero!== "number") return console.log(`Ingresaste ${numero} y Solo se pueden ingresar numeros`);
    if(Math.sign(numero)===-1) return console.log("El numero no puede ser negativo");

    let divisible = false;

    for(let i = 2; i<numero;i++) {

        if((numero % i) === 0){
            divisible=true;
            break;
        }
    }

    // if(divisible=true){
    //     return console.log(`El numero ${numero} NO es primo`)
    // } else {
    //     return console.log(`El numero ${numero} SI es primo`)
    // }

    return(divisible)
    ?console.log(`El numero ${numero} NO es primo`)
    :console.log(`El numero ${numero} SI es primo`)

}

// esPrimo();
// esPrimo(2)
// esPrimo(25)
// esPrimo(0)
// esPrimo(-1)
// esPrimo(13)




// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const tipo = (numero = "")=>{

    if(typeof numero!== "number") return console.log(`Ingresaste ${numero} y Solo se pueden ingresar numeros`);

    if(numero % 2 == 0){
        return console.log(`El numero ${numero} es PAR` )
    } else {
        return console.log(`El numero ${numero} es IMPAR`)
    }

}

// tipo("g")
// tipo(2)
// tipo(0)
// tipo(-1)
// tipo(1)
// tipo(26)






// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. 

const convertir = (celsius = "", farenheit="")=>{

if(typeof celsius!== "number") return console.log(`Ingresaste ${celsius} y Solo se pueden ingresar numeros`);

farenheit = (celsius * 9/5) + 32

return console.log(`Los ${celsius} grados Celsius equivalen a ${farenheit} grados Farenheit `)
}

convertir(0)
convertir(10)
convertir("52")
convertir("")
convertir(-44)
 