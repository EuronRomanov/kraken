saludar=function () {
    //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");


    let edad=recuperarInt("txtEdad");
    let estatura=recuperarFloat("txtEstatura");
}

recuperarTexto=function (idComponente) {
    let compoenente;
    let valorIngresado;
    compoenente=document.getElementById(idComponente);
    valorIngresado=compoenente.value;
    return valorIngresado; 
}


recuperarInt=function (idComponente) {
    let valorCaja=recuperarTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}

recuperarFloat=function (idComponente) {
    let valorCaja=recuperarTexto(idComponente);
    let valorFlotante=parseFloat(valorCaja);
    return valorFlotante;
}