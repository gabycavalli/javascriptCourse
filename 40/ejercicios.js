// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

// const vocales = (palabra="")=>{

//     if(palabra==="") return console.log("No ingresaste ninguna palabra");
//     if(typeof palabra!== "string") return console.log(`La palabra ${palabra} no es una palabra`);
    
//     //let contarv = palabra.match(/[aeiou]/gi).length;
//     let contarv;

//     if(contarv = palabra.match(/[aeiou]/gi).length){

//         console.log(`La palabra ${palabra} tiene ${contarv} vocales`)

//     }else{

//         console.log(`La palabra ${palabra} No tiene vocales`)

//     }


    


    

    // (contarv)
    // ? console.log(`La palabra ${palabra} tiene ${contarv} vocales`)
    // : console.log(`La palabra ${palabra} No tiene vocales`)

       
//}

//vocales("stvpllmn")

// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.



// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

// 21) Fusion entre 19 y 20

const validarPatron =(cadena="", patron=undefined)=>{
    if(!cadena==="") return console.log("No ingresaste ninguna palabra");
    if(typeof cadena!== "string") return console.log(`La palabra ${cadena} no es una palabra`);

    if(patron===undefined) return console.log("No ingresaste ningun patron a evaluar");
    if(!(patron instanceof RegExp)) return console.log(`El valor ${patron} ingresado NO es una expresion regular`);

    let expReg = patron.test(cadena);

    return(expReg)
    ? console.log(`${cadena} SI cumple con el patron ingresado`)
    : console.log(`${cadena} NO cumple con el patron ingresado`);
}

validarPatron();
validarPatron({});
validarPatron("23");
validarPatron("Gabriel Cavalli",/^[A-Za-z\s]+$/g);
validarPatron("Gabrielcavalli",/^[A-Za-z\s]+$/g);
validarPatron("gabrielcavalli@gmail.com",  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i)
validarPatron("gabrielcavalli@gmail", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i)