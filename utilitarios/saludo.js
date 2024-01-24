saludar=function () {
    //recuperar el valor de la caja de texto txtNombre
    let nombre=recuperarTexto("txtNombre");
    //recuperar el valor de la caja de texto txtApellido
    let apellido=recuperarTexto("txtApellido");
}

recuperarTexto=function (idComponente) {
    let compoenente;
    let valorIngresado;
    compoenente=document.getElementById(idComponente);
    valorIngresado=compoenente.value;
    return valorIngresado; 
}