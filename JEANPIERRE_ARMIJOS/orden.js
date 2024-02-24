let personas=[
    {nombre:"Marcos", edad:18},
    {nombre:"Roberto", edad:15},
    {nombre:"Kate", edad:25},
    {nombre:"Diana", edad:12},
    {nombre:"bBnja", edad:5}
]

agregarPersona=()=>{
    let nombre=recuperarTexto("txtNombre");
    let edad=recuperarInt("txtEdad");
if (!validarNombre(nombre) & !validarEdad(edad)) {
    let nuevaPersona={};
    nuevaPersona.nombre=nombre;
    nuevaPersona.edad=edad;
personas.push(nuevaPersona);
mostrarTabla();
    alert("PERSONA AGREGADA CORRECTAMENTE");
}
}

validarNombre=(nombre)=>{
    let  mensage="";
    let flag=false;
if (!isNaN(nombre) || nombre==null) {
    mensage="CAMPO OBLIGATORIO";
    flag=true;
}

if (nombre.length<3) {
     mensage="DEBE TENER ALMENOS 3 CARACTERES";
    flag=true;

   
} 
mostrarTexto("lblErrorNombre", mensage);
return flag;
}

validarEdad=(edad)=>{
    let mensage="";
    let flag=false;

    if (isNaN(edad) ) {
        mensage="CAMPO OBLIGATORIO";
        flag=true;
    }
if (edad<0 || edad >100 ) {
     mensage="DEBE ser entre 0 y 100";
    flag=true;

   
} 
mostrarTexto("lblErrorEdad", mensage);

return flag;
}


mostrarTabla=()=>{
   let  tabla=document.getElementById("tblPersonas");
    let contenido="<table><tr><th>Nombre</th><th>Edad</th></tr>";
    personas.forEach(persona => {
        contenido+="<tr><td>"+persona.nombre+"</td><td>"+persona.edad+"</td></tr>";
    });

    contenido+="</table>";
tabla.innerHTML=contenido;
    
}

encontrarMayor=()=>{
    let personaMayor=personas[0];
    let elementoPersona=null;

    personas.forEach(persona => {
       // elementoPersona=persona;
        if (persona.edad>personaMayor.edad) {
            personaMayor=persona;
        }
    });
return personaMayor;
}
determinarMayor=()=>{
let mayor;
mayor=encontrarMayor();
mostrarTexto("nombreMayor", mayor.nombre);
mostrarTexto("edadMayor", mayor.edad);
}