let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1114632033",nombre:"Pedro",apellido:"Jaramillo",sueldo:800.0}
]

let roles = [ ]



let esNuevo=false;


mostrarTotales=()=>{
    let totalEmpleado=0.0;
    let totalEmpleador=0.0;
    let totalAPagar=0.0;
    let totalNomina=0.0;


roles.forEach(rol => {
    totalEmpleado+=rol.aporteEmpleado;
     totalEmpleador+=rol.aporteEmpleador;
     totalAPagar+=rol.valorPagar;
});

totalNomina=totalAPagar+totalEmpleador+totalEmpleado;
mostrarTexto("infoAporteEmpleado",totalEmpleado);
mostrarTexto("infoAporteEmpresa",totalEmpleador);
mostrarTexto("infoTotalPago", totalAPagar);
mostrarTexto("infoTotalNomina", totalNomina);
}

mostrarRoles=()=>{
    let contenidoTabla="<table>"+
    "<tr><th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>VALOR A PAGAR</th>"+
    "<th>APORTE EMPLEADO</th>"+
    "<th>APORTE EMPLEADOR</th></tr>";
    let cmpTabla=document.getElementById("tablaResumen");
    roles.forEach(rol => {
        contenidoTabla+="<tr><td>"+
        rol.cedula+"</td><td>"+
        rol.nombre+"</td><td>"+
        rol.valorPagar+"</td><td>"+
        rol.aporteEmpleado+"</td><td>"+
        rol.aporteEmpleador+"</td></tr>";
    });
    contenidoTabla+="</table>";
    cmpTabla.innerHTML= contenidoTabla; 
}

guardarRol=()=>{
    let aporteEmpleador;
    let cedula=recuperarTextDiv("infoCedula");
    let nombre=recuperarTextDiv("infoNombre");
    let sueldo=recuperarFloatDiv("infoSueldo");
   


    let aporte=recuperarFloatDiv("infoIESS");
    let valorPagar=recuperarFloatDiv("infoPago");

    aporteEmpleador=calcularAporteEmpleador(sueldo);

    let nuevoRol={};

    nuevoRol.cedula=cedula; 
    nuevoRol.nombre=nombre;
    nuevoRol.sueldo=sueldo; 
     nuevoRol.valorPagar=Math.round(valorPagar*100)/100  ; 
     nuevoRol.aporteEmpleado=Math.round(aporte*100)/100;  
     nuevoRol.aporteEmpleador=Math.round(aporteEmpleador*100)/100;
     agregarRol(nuevoRol);
   
}

calcularAporteEmpleador=(sueldoEmpleado)=>{
return (sueldoEmpleado*(11.15/100));
}

agregarRol=(rol)=>{
let encontrado;

encontrado=buscarRol(rol.cedula);
if (encontrado==null) {
    roles.push(rol);
    alert("AGREGADO EXITOSAMENTE ");
}else{
    alert("YA EXISTE OTRO ROL CON EL NUMERO DE CEDULA "+rol.cedula);
}
}

buscarRol=(cedula)=>{
    let rolEncontrado=null;

    

    for (let i = 0; i < roles.length; i++) {
     const rol =  roles[i];
    
     if (rol.cedula==cedula) {
         
         rolEncontrado=rol;
         break;
        }
    
    }
 
 return rolEncontrado;
}


calcularRol=()=>{
    let aporte;
    let valorPagar;
    let sueldo= recuperarFloatDiv("infoSueldo");
    let descuento= recuperarFloat("txtDescuentos");

if (descuento>=0 && descuento<=sueldo) {
    aporte=Math.round(calcularAporteEmpleado(sueldo)*100)/100;

    mostrarTexto("infoIESS",aporte);
    valorPagar=calcularValorApagar(sueldo,aporte,descuento);
    mostrarTexto("infoPago", valorPagar);
    habilitarComponente("btnGuardarRol");
}
}

calcularValorApagar=(sueldo,aporte,descuento)=>{
    let valorPagar;
valorPagar=sueldo-(aporte+descuento);
    return valorPagar;
}

calcularAporteEmpleado=(sueldo)=>{
let aporte;
aporte=sueldo *(9.45/100);
return aporte;
}

buscarPorRol=()=>{
    let encontrado;
    let cedula=recuperarTexto("txtBusquedaCedulaRol");
    encontrado=buscarEmpleado(cedula);
    if (encontrado) {
        mostrarTexto("infoCedula",encontrado.cedula);
        mostrarTexto("infoNombre",encontrado.nombre+" "+encontrado.apellido);
        mostrarTexto("infoSueldo",encontrado.sueldo);
    }else{
        alert("NO EXISTE EMPELEADO");
    }
}

ejecutarBusqueda=()=>{
    let encontrado;
    let cedula=recuperarTexto("txtBusquedaCedula");
    encontrado=buscarEmpleado(cedula);
    if (encontrado) {
        mostrarTextoEnCaja("txtCedula",encontrado.cedula);
        mostrarTextoEnCaja("txtNombre",encontrado.nombre);
        mostrarTextoEnCaja("txtApellido",encontrado.apellido);
        mostrarTextoEnCaja("txtSueldo",encontrado.sueldo);

        deshabilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    } else {
        alert("EMPLEADO NO EXISTE");
    }
}



guardar=()=>{
    let encontrado;
    let esAgregado;
    let cedula=recuperarTexto("txtCedula");
    let nombre=recuperarTexto("txtNombre");
    let apellido=recuperarTexto("txtApellido");
    let sueldo=recuperarFloat("txtSueldo");

    if (!esValidadCedula("lblErrorCedula", cedula) &
    !esValidadNombre("lblErrorNombre", nombre) &
    !esValidadNombre("lblErrorApellido", apellido) &
    !esValidoSueldo("lblErrorSueldo", sueldo)) {
     
        if(esNuevo){
            let empleadoNuevo={};
            empleadoNuevo.cedula=cedula;
            empleadoNuevo.nombre=nombre;
            empleadoNuevo.apellido=apellido;
            empleadoNuevo.sueldo=sueldo;

            esAgregado= agregarEmpleado(empleadoNuevo);
            if (esAgregado) {
                alert("EMPLEADO GUARDADO CORRECTAMENTE");
                mostrarEmpleados();
                limpiar();
               
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+empleadoNuevo.cedula);
            }
        }else{
            encontrado=buscarEmpleado(cedula);
            encontrado.cedula=cedula;
            encontrado.nombre=nombre;
            encontrado.apellido=apellido;
            encontrado.sueldo=sueldo;
            alert("EMPLEADO MODIFICADO EXITOSAMENTE");
            mostrarEmpleados();
            limpiar();
        }

   }
}


limpiar=()=>{
    mostrarTextoEnCaja("txtCedula","");
    mostrarTextoEnCaja("txtNombre","");
    mostrarTextoEnCaja("txtApellido","");
    mostrarTextoEnCaja("txtSueldo","");
    bloquearCamposFormulario();
}

agregarEmpleado=(empleado)=>{
let nuevoEmpleado=null;
nuevoEmpleado=buscarEmpleado(empleado.cedula);

if (nuevoEmpleado==null) {
  
    empleados.push(empleado);
    return true;
} else {
    return false;
}

}

buscarEmpleado=(cedula)=>{
    let empleadoEncontrado=null;

    

   for (let i = 0; i < empleados.length; i++) {
    const empleado =  empleados[i];
   
    if (empleado.cedula==cedula) {
        
        empleadoEncontrado=empleado;
        break;
       }
   
   }

return empleadoEncontrado;

}

ejecutarNuevo=()=>{

    esNuevo=true;
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
}

mostrarEmpleados=()=>{
    let contenidoTabla="<table>"+
    "<tr><th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>APELLIDO</th>"+
    "<th>SUELDO</th></tr>";
    let cmpTabla=document.getElementById("tablaEmpleados");
    empleados.forEach(empleado => {
        contenidoTabla+="<tr><td>"+
        empleado.cedula+"</td><td>"+
        empleado.nombre+"</td><td>"+
        empleado.apellido+"</td><td>"+
        empleado.sueldo+"</td></tr>";
    });
    contenidoTabla+="</table>";
    cmpTabla.innerHTML= contenidoTabla; 
}

mostrarOpcionEmpleado=()=>{
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    mostrarEmpleados();

    bloquearCamposFormulario();
}


bloquearCamposFormulario=()=>{
    esNuevo=false;
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}

mostrarOpcionRol=()=>{
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("btnGuardarRol");
    mostrarRoles();
}

mostrarOpcionResumen=()=>{
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
    mostrarRoles();
    mostrarTotales();
}




esValidoSueldo=(idComponente, valor)=>{
    let hayError=false;
    if (!estaVacia(idComponente, valor)) {
            if (valor<400 || valor>5000) {
                hayError=true;
                mostrarTexto(idComponente,"DEBE TENER VALOR ENTRE 400 Y 5000");
            }
    }else{
        hayError=true;
    }
    if (hayError==false) {
        mostrarTexto(idComponente,"");
    }

    return hayError;
}


esValidadNombre=(idComponente, valor)=>{

    let hayError=false;
    if (!estaVacia1(idComponente,  valor)) {
        if (valor.length<3) {
            hayError=true;
            mostrarTexto(idComponente,"DEBE TENER AL MENOS 3 CARACTERES");
        } else {
            for (let i = 0; i < valor.length; i++) {
                const element = valor.charAt(i);
                if (!esMayuscula(element )) {
                   hayError=true;
                   mostrarTexto(idComponente,"DEBE SER MAYUSCULAS");
                    break;
                }
            }

          

        }

        
    }else{
        hayError=true;
    }
    if (hayError==false) {
        mostrarTexto(idComponente,"");
    }
    return hayError;
}

esValidadCedula=(idComponente, valor)=>{

    let hayError=false;
    if (!estaVacia(idComponente.trim(), valor)) {
        if (valor.length!=10) {
            hayError=true;
            mostrarTexto(idComponente,"DEBE TENER 10 DIGITOS");
        } else {
            for (let i = 0; i < valor.length; i++) {
                const element = valor.charAt(i);
                if (!esDigito(element )) {
                   hayError=true;
                   mostrarTexto(idComponente,"DEBE SER DIGITOS");
                    break;
                }
            }

          

        }

        
    }else{
        hayError=true;
        
    }

    if (hayError==false) {
        mostrarTexto(idComponente,"");
    }

    return hayError;
}

estaVacia=(idComponente, valor)=>{
    console.log(valor);
    if ( isNaN(valor) || valor=='') {
        mostrarTexto(idComponente,"ESTE CAMPO ES OBLIGATORIO");
        return true;
    }else{
        return false;
    }
}

estaVacia1=(idComponente, valor)=>{
    console.log(valor);
    if ( !isNaN(valor) || valor=='') {
        mostrarTexto(idComponente,"ESTE CAMPO ES OBLIGATORIO");
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

esDigito=(caracter)=>{
    let codigo;
    codigo=caracter.charCodeAt(0);

    
    if (codigo >= 48 && codigo<= 57) {
        return true;
    }else{
        return false;
    }
}