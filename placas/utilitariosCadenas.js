esMayuscula=(caracter)=>{
    let codigo;
    codigo=caracter.charCodeAt(0);

    
    if((codigo>=65 && codigo<=90) ){
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

esGuion=(caracter)=>{
    let codigo;
    codigo=caracter.charCodeAt(0);

    
    if (codigo ==45) {
        return true;
    }else{
        return false;
    }
}