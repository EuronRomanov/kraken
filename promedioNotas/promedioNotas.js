calcularPromedioNotas=()=>{
    let nota1;
    let nota2;
    let nota3;

    let promedio;


    nota1=recuperarFlotante("txtNota1");
    nota2=recuperarFlotante("txtNota2");
    nota3=recuperarFlotante("txtNota3");

    promedio=calcularPromedio(nota1,nota2,nota3);

    cambiarTexto("lblResultado", "Su promedio es "+promedio);
    if (promedio>7) {
        
        cambiarImagen("imgResultado","imagenes/exito.gif");
    } else {
        cambiarImagen("imgResultado","imagenes/fracaso.gif");
    }
}