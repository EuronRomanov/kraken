let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1114632033",nombre:"Pedro",apellido:"Jaramillo",sueldo:800.0}
]

let esNuevo=false;




guardar=()=>{

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
               bloquearCamposFormulario();
               
            } else {
                alert("YA EXISTE UN EMPLEADO CON LA CEDULA "+empleadoNuevo.cedula);
            }
        }

   }
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
}

mostrarOpcionResumen=()=>{
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
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