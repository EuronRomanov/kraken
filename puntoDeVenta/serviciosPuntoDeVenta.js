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