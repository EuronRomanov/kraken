recuperarTexto=function(idComponente){
    let cmpTexto;
    let valor;
    cmpTexto=document.getElementById(idComponente);
    valor=cmpTexto.value;
    return valor;
}
cambiarValor=function(idComponente,newValue){
    let cmpTexto;
    
    cmpTexto=document.getElementById(idComponente);
    cmpTexto.value=newValue;
    
}
recuperarEntero=function(idComponente){
    let valor;
    let valorEntero;
    valor=recuperarTexto(idComponente);
    valorEntero=parseInt(valor);
    return valorEntero;
}
recuperarFlotante=function(idComponente){
    let valor;
    let valorFloat;
    valor=recuperarTexto(idComponente);
    valorFloat=parseFloat(valor);
    return valorFloat;
}
cambiarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}
cambiarImagen=function(idComponente,imagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src=imagen;
}