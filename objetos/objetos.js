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

modificarAtributos=()=>{
    let cuenta={
        numero:"54234389893834",
        saldo:0.0
    };
    cuenta.saldo=100;
    cuenta.saldo+=10;
    console.log(cuenta.saldo);
}


crearCliente=()=>{
    let cliente={
        cedula:"120323",
        nombre:"Juan"
    };

    let cliente1={};
    cliente1.nombre="Romeo";
    cliente1.apellido="Salcedo";
    cliente1.cedula="12123222";
}

probarIncrementoSaldo=()=>{
    let cta={numero:"23424",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}

probarDeterminarMayor=()=>{
    let per1={nombre:"Daniel",edad:45};
    let per2={nombre:"Luisa",edad:48};
    let mayor;
    mayor=determinarMayor(per1,per2);

  if (mayor!=null) {
    console.log("El mayor es: "+mayor.nombre);
  }
}



incrementarSaldo=(cuenta, monto)=>{
    cuenta.saldo+=monto;
}

determinarMayor=(persona1,persona2)=>{
    if (persona1.edad>persona2.edad) {
        return persona1;
    }else if (persona1.edad<persona2.edad) {
        return persona2;
    } else {
        return null;
    }
}