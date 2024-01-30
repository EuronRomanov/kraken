obtenerAleatorio=()=>{
    let numeroAleatorio;
    let numero;
    numeroAleatorio=(Math.random()*3);
    numero=parseInt(numeroAleatorio)+1;
    return numero;
}

generarElemento=()=>{
    let numero;
    numero=obtenerAleatorio();

    if (numero==1) {
        return "piedra";
    }else if(numero==2){
        return "papel";
    }else if(numero==3){
        return "tijera";
    }
}

determinarGanador=(eleccionJugador1, eleccionJugador2)=>{
    let ganador;

    if (eleccionJugador1===eleccionJugador2) {
        ganador=0;
    }else if ((eleccionJugador1=='piedra'&& eleccionJugador2=='tijera' ) ||
    (eleccionJugador1=='tijera'&& eleccionJugador2=='papel' )||
    (eleccionJugador1=='papel'&& eleccionJugador2=='piedra' ) ) {
        ganador=1;
    } else if ((eleccionJugador2=='piedra'&& eleccionJugador1=='tijera' ) ||
    (eleccionJugador2=='tijera'&& eleccionJugador1=='papel' )||
    (eleccionJugador2=='papel'&& eleccionJugador1=='piedra' ) ){
        ganador=2;
    }
    return ganador;
}

generarRuta=(nombre)=>{
      return "./imagenes/"+nombre+".png";
}