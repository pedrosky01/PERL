var precio= parseInt(prompt("escribe el importe de la compra"));
var mes=(prompt("introduce el mes"));
var pfinal=0
document.write("el precio es " +precio + " $+</br>");
document.write("el precio es "+mes+"<br/>");
if(mes=="octubre"){
    pfinal=precio*0.85;

}
else{
    pfinal=precio;

}
document .write("el precio final es" +pfinal+ "<br/>");