validarPlaca=()=>{
    let placa;
    let erroresEstructura;
    let correctaPlaca=false;
    let correctaPlaca1=false;
    placa=recuperarTexto("txtPlaca");

    erroresEstructura=validarEstructura(placa);
    if (erroresEstructura==null) {
        cambiarTexto("lblResultado","ESTRUCTURA VALIDA");
       // limpiarErrores();
        erroresEstructura=obtenerProvincia(placa);
        if (erroresEstructura!=null) {
            
            cambiarTexto("lblProvincia","Provincia : "+ erroresEstructura);
            correctaPlaca=true;
        } else {
           
            correctaPlaca=false;
            cambiarTexto("lblProvincia","PROVINCIA INCORRECTA");
            cambiarTexto("lblDiaPicoPlaca","");
        }
        //limpiarErrores();
        erroresEstructura=obtenerTipoVehiculo(placa);
        if (erroresEstructura!=null) {
          
            cambiarTexto("lblTipoVehiculo", erroresEstructura);
            correctaPlaca1=true;
        } else {
            
            cambiarTexto("lblTipoVehiculo","VEHICULO INCORRECTA");
            cambiarTexto("llblDiaPicoPlaca","");
            correctaPlaca1=false;
        }

        if (correctaPlaca1 && correctaPlaca) {
           
            
            cambiarTexto("lblDiaPicoPlaca","Pico y Placa el dia : "+ obtenerDiaPicoYPlaca(placa));
        }else{
            
            cambiarTexto("lblDiaPicoPlaca","");
          
        }
       
        limpiarErrores();
    } else {
        cambiarTexto("lblResultado","ESTRUCTURA INCORRECTA");
        cambiarTexto("lblErrores",erroresEstructura.replace(null,""));
    }
}




limpiarErrores=()=>{
    cambiarTexto("lblErrores","");
   
}

limpiar=()=>{
    cambiarTexto("lblErrores","");
    cambiarValor("txtPlaca","");
    cambiarTexto("lblDiaPicoPlaca","");
    cambiarTexto("lblProvincia","");
    cambiarTexto("lblTipoVehiculo","");
    cambiarTexto("lblResultado","");
}