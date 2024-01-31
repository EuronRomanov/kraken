obtenerAleatorio=()=>{
    let numeroAleatorio;
    let numero;
    numeroAleatorio=(Math.random()*100);
    numero=parseInt(numeroAleatorio)+1;
    return numero;
}

generarAleatorio=()=>{

    let aleatorios=[];
    let numeroInput;
    let numeroAleatorio;
    numeroInput=parseInt(document.getElementById("txtNumero").value);
   
   if ( numeroInput>=5 &&  numeroInput<=20) {
    for (let i = 0; i < numeroInput; i++) {
        console.log(i);
        numeroAleatorio=obtenerAleatorio();
        aleatorios.push(numeroAleatorio);
    }
   }

   mostrarResultados(aleatorios);
}

mostrarResultados=(arregloNumeros)=>{
    let cmpTabla=document.getElementById("divTabla");
    let contenidoTabla="<table><tr><th>NOTAS</th></tr>";
     let miNota;

     for (let i = 0; i < arregloNumeros.length; i++) {
        miNota = arregloNumeros[i];
        contenidoTabla+="<tr><td>";
        contenidoTabla+= miNota;
        contenidoTabla+="</tr></td>";
     }
     contenidoTabla+="</table>";
     cmpTabla.innerHTML=contenidoTabla;
}