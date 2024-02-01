probarAtributos=()=>{
    let persona={
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo==false) {
        console.log("no esta vivo");
    } else {
        console.log("si esta vivo");
    }
}

crearProducto=()=>{
    let producto1={
        nombre:'TOMATE',
        precio: 1.5,
        stock:1

    };
    let producto2={
        nombre:'COCA COLA',
        precio: 1.3,
        stock:2

    };

    if (producto1.stock==producto2.stock) {
        console.log("TIENEN EL MISMO STOCK");
    }else if (producto1.stock>producto2.stock) {
        console.log("PRODUCTO 1 TIENE MAYOR STOCK");
    }else if (producto1.stock<producto2.stock) {
        console.log("PRODUCTO 2 TIENE MAYOR STOCK");
    } 
}