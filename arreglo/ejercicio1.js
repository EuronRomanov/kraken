let notas=[];

agregarElementos=()=>{
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

recorrerArreglo=()=>{
    let notaR;
    for (let index = 0; index < notas.length; index++) {
        notaR = notas[index];
        console.log(notaR);
        
    }
}


probarAgregar=()=>{
    let notaRecuperada;
    notaRecuperada=recuperarEntero("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota=(nota)=>{
    notas.push(nota);
}

calcularPromedio=()=>{
    let sumaNotas=0;
    let promedio;
    for (let index = 0; index < notas.length; index++) {
        sumaNotas+=notas[index];
    }

        promedio=sumaNotas/notas.length;

        return promedio;

}

ejecutarPromedio=()=>{
    cambiarTexto('lblPromedio',calcularPromedio());
}