calcularTasaInteres=(ingresoAnual)=>{
let tasaInteres;
if (ingresoAnual<300000) {
    tasaInteres=16;
} else if (ingresoAnual>=300000 && ingresoAnual<500000){
    tasaInteres=15;
}else if (ingresoAnual>=500000 && ingresoAnual<1000000){
    tasaInteres=14;
}else if (ingresoAnual>=1000000 && ingresoAnual<2000000){
    tasaInteres=13;
}else if (ingresoAnual>=2000000) {
    tasaInteres=12;
}

return tasaInteres;
}


/*

*/


calcularCapacidadPago=(edad,ingresos,egresos)=>{
   
    let capacidad;
    let diferencia;

    diferencia=ingresos-egresos;

    if (edad>50 ) {
        capacidad=0.30*diferencia;
    } else if (edad<=50 ) {
        capacidad=0.40*diferencia;
    }

    return capacidad;
}

calcularDescuento=(precio,cantidad)=>{
let valorPagar;
let descuento;

valorPagar=precio*cantidad;

if (cantidad<3) {
    descuento=valorPagar*(0/100) ;
} else if(cantidad>=3 && cantidad<=5) {
    descuento=valorPagar*(2/100) ;
}else if(cantidad>=6 && cantidad<=11) {
    descuento=valorPagar*(3/100) ;
}else if( cantidad<=12) {
    descuento=valorPagar*(4/100) ;
}

return (valorPagar-descuento);
}

determinarColesterolLDL=(nivelColesterol)=>{
let nivelLDL;
    if (nivelColesterol<100) {
        nivelLDL="Óptimo (lo mejor para su salud)";
    } else if (nivelColesterol>=100 && nivelColesterol<=129) {
        nivelLDL="Casi óptimo";
    }else if (nivelColesterol>=130 && nivelColesterol<=159) {
        nivelLDL="Límite superior del rango normal";
    }else if (nivelColesterol>=160 && nivelColesterol<=189) {
        nivelLDL="Alto";
    }else if (nivelColesterol>=190 ) {
        nivelLDL="Muy alto";
    }
return nivelLDL;
}

validarClave=(clave)=>{
if (clave.length >=8 && clave.length<=16 ) {
    return true;
}else{
    return false;
}
}


esMayuscula=(caracter)=>{
    let codigo;
    codigo=caracter.charCodeAt(0);

    
    if((codigo>=65 && codigo<=90) || (codigo === 209) ||  (codigo === 193) || (codigo === 201) || (codigo === 205) ||  (codigo === 211) ||  (codigo === 218)){
        return true;
    }else{
        return false;
    }
}

esMinuscula=(caracter)=>{
    let codigo;
    codigo=caracter.charCodeAt(0);

    
    if ((codigoAscii >= 97 && codigoAscii <= 122) || codigoAscii === 241) {
        return true;
    }else{
        return false;
    }
}


esDigito=(caracter)=>{
    let codigo;
    codigo=caracter.charCodeAt(0);

    
    if (codigoAscii >= 48 && codigoAscii <= 57) {
        return true;
    }else{
        return false;
    }
}

darPermiso=(notaMatematica,notaFisica,notaGeometrica)=>{

if (notaMatematica>90 || notaFisica>90 ||notaGeometrica>90) {
    return true;
} else {
    return false;
}

}


otorgarPermiso=(notaMatematica,notaFisica,notaGeometrica)=>{

    if ((notaMatematica>90 || notaFisica>90) && notaGeometrica>80) {
        return true;
    } else {
        return false;
    }
    
    }

   dejarSalir=(notaMatematica,notaFisica,notaGeometrica)=>{

        if ((notaMatematica>90 || notaFisica>90 ||notaGeometrica>90)&& notaFisica>notaMatematica) {
            return true;
        } else {
            return false;
        }
        
        }