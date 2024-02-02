let clientes=[
    {cedula:"1231213",nombre:"Juan",edad:20},
    {cedula:"1231214",nombre:"Mario",edad:50},
    {cedula:"1231215",nombre:"Pepe",edad:22},
];


guardarCambios=()=>{

    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarTexto("txtEdad");
    
    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    modificarCliente(nuevoCliente);
    mostrarClientes();
}

modificarCliente=(cliente)=>{
    let clienteEncontrado=buscarCliente(cliente.cedula);

    if (clienteEncontrado!=null) {
        clienteEncontrado.nombre=cliente.nombre;
        clienteEncontrado.edad=cliente.edad;
    }
}

ejecutarBusquedad=()=>{
    let valorCedula=recuperarTexto("txtCedulaBusqueda");
   let respuesta= buscarCliente(valorCedula);

   if (respuesta==null) {
    alert("cliente no encontrado");
   } else {
    mostrarTextoEnCaja("txtCedula",respuesta.cedula);
    mostrarTextoEnCaja("txtNombre",respuesta.nombre);
    mostrarTextoEnCaja("txtEdad",respuesta.edad);
   }

}
crearCliente=()=>{
    let valorCedula=recuperarTexto("txtCedula");
    let valorNombre=recuperarTexto("txtNombre");
    let valorEdad=recuperarTexto("txtEdad");
    
    let nuevoCliente={};
    nuevoCliente.cedula=valorCedula;
    nuevoCliente.nombre=valorNombre;
    nuevoCliente.edad=valorEdad;
    
    agregarCliente(nuevoCliente);
}

agregarCliente=(cliente)=>{
    let resultado;
    resultado=buscarCliente(cliente.cedula);
    if (resultado==null) {
        clientes.push(cliente);
        alert("cliente agregado");
    } else {
        alert("ya existe cliente con esa cedula"+cliente.cedula);
    }
}

buscarCliente=(cedula)=>{
let elementoCliente;
let clienteEncontrado=null;

for (let i = 0; i < clientes.length; i++) {
    elementoCliente = clientes[i];
    if (elementoCliente.cedula==cedula) {
        clienteEncontrado= elementoCliente ;
        break;
    }
}

return clienteEncontrado;
}

mostrarClientes=()=>{
    let cmpTabla=document.getElementById("tablaClientes");

    let contenidoTabla="<table><tr>"+
    "<th>CEDULA</th>"+
    "<th>NOMBRE</th>"+
    "<th>EDAD</th>"+
    "</tr>";
    let elementoCliente;

    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        contenidoTabla+="<tr><td>"+elementoCliente.cedula+"</td>"
        +"<td>"+elementoCliente.nombre+"</td>"
        +"<td>"+elementoCliente.edad+"</td>"
        +"</tr>";
    }
    contenidoTabla+="</table>";
    cmpTabla.innerHTML=contenidoTabla;
}