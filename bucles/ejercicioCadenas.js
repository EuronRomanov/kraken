ejecutarPrueba1=()=>{
    let mensaje;
    mensaje=recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
ejecutarPrueba2=()=>{
    let mensaje;
    let resultado;
    mensaje=recuperarTexto("txtCadena");
    resultado=invertirCadena(mensaje);

    cambiarTexto("lblResultado", resultado);
}

recorrerCadena=(cadena)=>{
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
       caracter=cadena.charAt(posicion);
       console.log("Caracter "+caracter+" posicion "+posicion);
        
    }

    for (let posicion = 0; posicion <= cadena.length-1; posicion++) {
        caracter=cadena.charAt(posicion);
        console.log("CARACTER "+caracter+" posicion "+posicion);
         
     }
}

invertirCadena=(cadena)=>{
    let caracter;
   let resultado="";

    for (let posicion =  cadena.length-1; posicion >=0; posicion--) {
        caracter=cadena.charAt(posicion);
        resultado+=caracter;
         
     }

     return resultado;
}