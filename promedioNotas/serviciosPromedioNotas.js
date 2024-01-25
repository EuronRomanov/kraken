calcularPromedio=(n1,n2,n3)=>{
let sumaNotas;
let promedio;
sumaNotas=n1+n2+n3;
promedio=sumaNotas/3;
return Math.round(promedio*100)/100 ;
}