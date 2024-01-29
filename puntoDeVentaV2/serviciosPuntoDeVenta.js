calcularValorDescuento=function (monto, porcentajeDescuento) {
    let valorDescuento;
    valorDescuento=monto * (porcentajeDescuento/100);

    return valorDescuento;
}

calcularIVA=function (monto) {
   

    return calcularValorDescuento(monto,12);
}
calcularSubtotal=function (precio,cantidad) {
    let totalPagar;
    totalPagar=precio*cantidad;

    return totalPagar;
}

calcularTotal=function (subtotal,descuento,iva) {
    let totalPagar;
    totalPagar=subtotal-descuento+iva;

    return totalPagar;
}
calcularDescuentoPorVolumen=(subTotal,cantidad)=>{

    let valorDescuento;
if(cantidad<3){
    valorDescuento=0/100;
}else if(cantidad>=3 && cantidad<=5){
    valorDescuento=3/100;
}else if(cantidad>=6 && cantidad<=11){
    valorDescuento=4/100;
}else if(cantidad>=12){
    valorDescuento=5/100;
}

    return (valorDescuento*subTotal);
}