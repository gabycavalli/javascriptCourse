// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

const convertirBinarioDecimal = (numero = undefined, base = undefined)=>{

    if(numero===undefined) return console.log("No ingresaste ningun numero");
    if(typeof numero!== "number") return console.log(`El valor ${numero} no es un Numero`);
    if(base===undefined) return console.log("Debes ingresar una Base");
    if(typeof base!== "number") return console.log(`El valor ingresado ${base} no es un Numero valido para la Base`);

    if(base===2){
        return console.log(`El numero ${numero} en Base ${base} es igual a ${parseInt(numero,base)}`)
    } else if(base === 10){
        return console.log(`El numero ${numero} en Base ${base} es igual a ${(numero.toString(base))}`)
    }

}

// convertirBinarioDecimal();
// convertirBinarioDecimal("");
// convertirBinarioDecimal(200);
// convertirBinarioDecimal(100,2);
// convertirBinarioDecimal(4,10);
// convertirBinarioDecimal(114,10)



// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.



// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). Ver clase 27.

