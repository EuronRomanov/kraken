calcularPromedioNotas=()=>{
    let nota1;
    let nota2;
    let nota3;

    let promedio;
let mensage;
let imagen;

    nota1=recuperarFlotante("txtNota1");
    nota2=recuperarFlotante("txtNota2");
    nota3=recuperarFlotante("txtNota3");

    promedio=calcularPromedio(nota1,nota2,nota3);
    
    cambiarTexto("lblResultado", "Su promedio es "+promedio);
    if (promedio>0 && promedio<5) {
         mensage="REPROBADO";
          imagen="reprobada";
    } else  if (promedio>=5 && promedio<=8)  {
        mensage="BUEN TRABAJO";
        imagen="buenTrabajo";
    }else  if (promedio>8 && promedio<=10)  {
        mensage="EXCELENTE";
        imagen="excelenteTrabajo";
    }else{
        mensage="DATOS INCORRECTOS";
          imagen="incorrecto";
    }
    cambiarTexto("lblMensaje", mensage);
    cambiarImagen("imgResultado","imagenes/"+imagen+".gif");
}