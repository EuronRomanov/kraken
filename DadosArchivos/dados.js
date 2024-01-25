jugar=()=>{
    let aleatorio;
    let mensaje1="";
    let mensaje2="";
 
    aleatorio=lanzarDado();

    cambiarTexto("lblNumero",aleatorio);

    if (aleatorio>3) {
        mensaje1="ES MAYOR A 3";
        mensaje2="GANASTE";
    }else{
        mensaje1="ES MENOR A 3";
        mensaje2="ESTAS DE MALAS";
    }

    cambiarTexto("lblMensaje1",mensaje1);
    cambiarTexto("lblMensaje2",mensaje2);

}

lanzarDado=()=>{
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;

    aleatorio=Math.random(); //0 a 1

    numeroMultiplicado=aleatorio*6; //entre 0 y 5

    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1; //entre 0 y 6

    return valorDado;
}