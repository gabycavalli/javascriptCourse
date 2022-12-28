// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

const invertirCadena = (cadena="")=>{
(!cadena)   
? console.warn("No pusiste un texto para invertir")
: console.info(cadena.split("").reverse().join(""))
}

//invertirCadena("")
//invertirCadena("Hola Mundo")


/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
      pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/

const textoEnCadena = (cadena="", texto="")=>{
    if(!cadena) return console.warn("No ingresaste texto largo")
    if(!texto) return console.warn("No ingresaste texto a evaluar")

    let i = 0
    contador = 0
    while(i!== -1) {
        i = cadena.indexOf(texto,i)
        if (i !== -1){
            i++
            contador ++
        } 
    }    
    return console.info(`La palabra ${texto} se repite ${contador} veces`)
}

//textoEnCadena("argentina campeon del mundo argentina campeon campeon campeon", "campeon")

/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
      (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.*/

  const palindromo = (palabra = "")=>{
    if(!palabra) return console.warn("No ingresaste palabra a analizar")
    
    palabra = palabra.toLowerCase()
    let alReves = palabra.split("").reverse("").join("")

    if(palabra === alReves){
       return console.log(`La palabra ${alReves} es palindroma de ${palabra} `)
    } else{
       return console.log(`La palabra ${alReves} NO es palindroma de ${palabra}`)
    }   
  }
 
  //palindromo("")
  //palindromo("GaBrieL")
  //palindromo("salas")



// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const eliminarCaracteres = (texto="", patron="")=>{
    if(!texto) return console.warn("No ingresaste texto a evaluar")
    if(!patron){
        return console.warn("No ingresaste patron a eliminar")
    } else {
        console.log(texto.replace(new RegExp(patron,"ig"),"")) // la i ignora la mayuscula o minuscula y la g hace que no se detenga en el primer match.
    }

}

eliminarCaracteres()
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5")
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
eliminarCaracteres("lorem ipsum", "m")