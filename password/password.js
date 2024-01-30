
ejecutarValidacion=()=>{
    let password;
    let respuesta;
    let resultado;
    password=recuperarTexto("txtContrasena");
    
    respuesta=validar(password);

    if (respuesta.length==0) {
        resultado="Password Correcto";
    } else {
        resultado=respuesta;
    }
    cambiarTexto("lblResultado",resultado);

}


validar=(password)=>{
    let error="";
    let hayMayuscula=false;
    let hayCaracterEspecial=false;
    let hayDigito=false;

    
    if (password.length<8 ||password.length>16 || password.length==0) {
        error+="LA LONGUITUD ES DE 8 A 16 CARACTERES \n";
    }

    for (let i = 0; i < password.length; i++) {
       let caracter=password.charAt(i);
        if (esMayuscula(caracter)) {
            hayMayuscula=true;
        }
          if (esDigito(caracter)) {
            hayDigito=true;
        }
          if (esCaracterEspecial(caracter)) {
            hayCaracterEspecial=true;
        }
    }

    if (hayMayuscula==false) {
        error+="DEBE TENER AL MENOS UNA LETRA MAYUSCULA \n";
    } 
    if (hayCaracterEspecial==false) {
        error+="DEBE TENER AL MENOS UN CARACTER ESPECIAL\n";
    }
     if (hayDigito==false) {
       
        error+="DEBE TENER AL MENOS UN DIGITO \n";
    }

    return error;
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

esDigito=(caracter)=>{
    let codigo;
    codigo=caracter.charCodeAt(0);

    
    if (codigo >= 48 && codigo <= 57) {
        return true;
    }else{
        return false;
    }
}
esCaracterEspecial=(caracter)=>{
   
    

    
    if (caracter=='-' || caracter=='*'||caracter=='_' ) {
        return true;
    }else{
        return false;
    }
}

recuperarTexto=function(idComponente){
    let cmpTexto;
    let valor;
    cmpTexto=document.getElementById(idComponente);
    valor=cmpTexto.value;
    return valor;
}
cambiarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}