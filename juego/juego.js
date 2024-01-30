let puntosUsuario=0;
let puntosComputador=0;


jugar=(seleccionado)=>{
let elementoSelecionado;
let imagenSeleccionada;
let ganador;
let resultados= ["EMPATE", "GANASTES LA PARTIDA!!", "PERDISTE LA PARTIDA!!"];

elementoSelecionado=generarElemento();
imagenSeleccionada=generarRuta(elementoSelecionado);
cambiarImagen("imgElemento", imagenSeleccionada);

ganador=determinarGanador( seleccionado,elementoSelecionado);

if (ganador==1) {
    incrementarPuntosUsuario();
} else if (ganador==2){
    incrementarPuntosComputador();
}
cambiarTexto("lblResultado",resultados[ganador]);

if (puntosUsuario==5) {
    cambiarTexto("lblGanador","HAS GANADO EL JUEGO");
} else if (puntosComputador==5){
    cambiarTexto("lblGanador","EL COMPUTADOR TE HA VENCIDO");
}

}

incrementarPuntosUsuario=()=>{
    puntosUsuario++;
    cambiarTexto("lblPuntosUsuario",puntosUsuario);
}
incrementarPuntosComputador=()=>{
    puntosComputador++;
    cambiarTexto("lblPuntosComputador",  puntosComputador);
}

limpiar=()=>{
    cambiarImagen("imgElemento", "");
    cambiarTexto("lblResultado","");
    cambiarTexto("lblGanador","");
    cambiarTexto("lblPuntosUsuario","0");
    cambiarTexto("lblPuntosComputador",  "0");
    puntosUsuario=0;
 puntosComputador=0;
}