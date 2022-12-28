// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () =>{  

    min = 501
    max = 600
        return console.log(Math.round(Math.random()*(max-min))+min)   
    }
    //numeroAleatorio()

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
       (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/

const verCapicua=(numero=0)=>{
   
    const capicua = numero.toString().split("").reverse("").join("")

    if(!numero) return console.log("No ingresaste Numero")
    if(typeof numero!=="number") return console.log("Lo que ingresaste no es un numero")
    
    if(numero == capicua){

        return console.log(`El numero ${capicua} es capicua de ${numero}`)
    } else {
        return console.log(`El numero ${capicua} NO es capicua de ${numero}`)
           }

}

// verCapicua()
// verCapicua(212)
// verCapicua(125)
// verCapicua("salas")
// verCapicua(18.99)
// verCapicua(212.212)
// verCapicua({})




/* 11) Programa una función que calcule el factorial de un número 
       (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos 
       desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/ 

    /********************CON WHILE****************************************/   

    //    const factorial = (numero=undefined)=>{

    //     let i = 1
    //     let nro = numero

    //     if(numero ===0) return console.log("No se puede calcular el factorial de 0");
    //     if(typeof numero!== "number") return console.log(`Ingresaste ${numero} y Solo se pueden ingresar numeros`);
    //     if(Math.sign(numero)===-1) return console.log("El numero no puede ser negativo");

    //     while(numero >=1){
         
    //         i = i * numero 
    //         numero = numero - 1
            
    //     }
    //     return console.log(`El factorial de ${nro} es ${i}`)
    //    }

    /********************** CON FOR****************************************/

    const factorial = (numero=undefined)=>{

        if(numero ===0) return console.log("No se puede calcular el factorial de 0");
        if(typeof numero!== "number") return console.log(`Ingresaste ${numero} y Solo se pueden ingresar numeros`);
        if(Math.sign(numero)===-1) return console.log("El numero no puede ser negativo");
        
        let a = 1

        for(let i=numero; i>=1; i--) {

            a *= i
        }
        return console.log(`El factorial de ${numero} es ${a}`)
    }

       factorial(15)
       factorial("f")
       factorial(-25)
       factorial(0)