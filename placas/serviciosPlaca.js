validarEstructura=(placa)=>{
let mensaje=null;

if (placa.length<7 || placa.length>8 ) {
    mensaje+="LA LONGUITUD DE LA PLA PLACA DEBE SER DE 7 U 8 CARACTERES \n";
} 
if ( !esMayuscula(placa.charAt(0))) {
    mensaje+="EL PRIMER CARACTER DEBE SER MAYUSCULA \n";
}
if (!esMayuscula(placa.charAt(1))) {
    mensaje+="EL SEGUNDO CARACTER DEBE SER MAYUSCULA \n";
}
if (!esMayuscula(placa.charAt(2))) {
    mensaje+="EL TERCER CARACTER DEBE SER MAYUSCULA \n";
}
if (!esGuion(placa.charAt(3))) {
    mensaje+="EL CUARTO CARACTER DEBE SER UN GUION \n";
}
if (!esDigito(placa.charAt(4))) {
    mensaje+="EL QUINTO CARACTER DEBE SER UN DIGITO \n";
}
if (!esDigito(placa.charAt(5))) {
    mensaje+="EL SEXTO CARACTER DEBE SER UN DIGITO \n";
}
if (!esDigito(placa.charAt(6))) {
    mensaje+="EL SEPTIMO CARACTER DEBE SER UN DIGITO \n";
}
if ( placa.length==8 && !esDigito(placa.charAt(7))) {
    mensaje+="EL OCTAVO CARACTER DEBE SER UN DIGITO ";
}


return mensaje;
}

obtenerProvincia=(placa)=>{

    let provincia=null;
if (placa.charAt(0)=='A') {
    provincia="Azuay";
} else if(placa.charAt(0)=='B') {
    provincia="Bolívar";
} else if(placa.charAt(0)=='U') {
    provincia="Cañar";
} else if(placa.charAt(0)=='C') {
    provincia="Carchi";
} else if(placa.charAt(0)=='X') {
    provincia="Cotopaxi";
} else if(placa.charAt(0)=='H') {
    provincia="Chimborazo";
} else if(placa.charAt(0)=='O') {
    provincia="El Oro";
}else if(placa.charAt(0)=='E') {
    provincia="Esmeraldas";
}else if(placa.charAt(0)=='W') {
    provincia="Galápagos";
}else if(placa.charAt(0)=='G') {
    provincia="Guayas";
}else if(placa.charAt(0)=='I') {
    provincia="Imbabura";
}else if(placa.charAt(0)=='L') {
    provincia="Loja";
}else if(placa.charAt(0)=='R') {
    provincia="Los Ríos";
}else if(placa.charAt(0)=='M') {
    provincia="Manabí";
}else if(placa.charAt(0)=='V') {
    provincia="Morona Santiago";
}else if(placa.charAt(0)=='N') {
    provincia="Napo";
}else if(placa.charAt(0)=='S') {
    provincia="Pastaza";
}else if(placa.charAt(0)=='P') {
    provincia="Pichincha";
}else if(placa.charAt(0)=='K') {
    provincia="Sucumbíos";
}else if(placa.charAt(0)=='Q') {
    provincia="Orellana";
}else if(placa.charAt(0)=='T') {
    provincia="Tungurahua";
}else if(placa.charAt(0)=='Z') {
    provincia="Zamora Chinchipe";
}else if(placa.charAt(0)=='Y') {
    provincia="Santa Elena";
}else if(placa.charAt(0)=='J') {
    provincia="Santo Domingo de los Tsáchilas";
}



    return provincia;
}

obtenerTipoVehiculo=(placa)=>{
    let tipo=null;
    if (placa.charAt(1)=='A' || placa.charAt(1)=='Z') {
        tipo="VEHICULOS COMERCIALES (TAXSI O AUTOBUSES)";
    } else if(placa.charAt(1)=='E') {
        tipo="VEHICULOS GUBERNAMENTALES";
    }else if(placa.charAt(1)=='X') {
        tipo="VEHICULOS DE USO OFICIAL";
    }else if(placa.charAt(1)=='S') {
        tipo="VEHICULOS DL GOBIERNO PROVINCIAL";
    }else if(placa.charAt(1)=='M') {
        tipo="VEHICULOS MUNICIPALES";
    }else if(placa.charAt(1)!='E' &&
     placa.charAt(1)!='X'&&
     placa.charAt(1)!='M' &&
     placa.charAt(1)!='S') {
        tipo="VEHICULOS PARTICULAR (PRIVADO)";
    }

    return tipo;
}

obtenerDiaPicoYPlaca=(placa)=>{
    let dia=null;
    let  ultimo=placa.length-1;
    if (placa.charAt(ultimo)=='1' || placa.charAt(ultimo)=='2') {
        dia="LUNES";
    } else if(placa.charAt(ultimo)=='3' || placa.charAt(ultimo)=='4') {
        dia="MARTES";
    }else if(placa.charAt(ultimo)=='5' || placa.charAt(ultimo)=='6') {
        dia="MIERCOLES";
    }else if(placa.charAt(ultimo)=='7' || placa.charAt(ultimo)=='8') {
        dia="JUEVES";
    }else if(placa.charAt(ultimo)=='9' || placa.charAt(ultimo)=='0') {
        dia="VIERNES";
    }



    return dia;
}