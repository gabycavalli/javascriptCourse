// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

function contarCaracteres(cadena ="") {

    if (!cadena){
        console.warn("Cadena esta vacia")
    } else {
        console.info("Cadena tiene" + `${cadena}` + "tiene" `${cadena.length}` + "caracteres")
    }

    contarCaracteres();
    contarCaracteres("Gabriel");
}