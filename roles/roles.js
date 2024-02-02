let empleados = [
    {cedula:"1714616123",nombre:"John",apellido:"Cena",sueldo:500.0},
    {cedula:"0914632123",nombre:"Luisa",apellido:"Gonzalez",sueldo:900.0},
    {cedula:"1114632033",nombre:"Pedro",apellido:"Jaramillo",sueldo:800.0}
]

let esNuevo=false;



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