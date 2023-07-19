console.log("introduce el primer número");
var x=parseInt(prompt("introduce el primer número",""));
console.log("introduce el segundo número");
var y=parseInt(prompt("introduce el segundo número",""));
var resultado=0
resultado=x+y;
console.log(resultado);
resultado=x-y;
console.log(resultado);
resultado=x*y;
console.log(resultado);
resultado=x/y;
console.log(resultado);




function calcular(nro1,nro2, ver =false){
    if(ver==false){
    document.write("sumar: " + (nro1+nro2)+"<br/>" )
    document.write("restar: "+(nro1-nro2)+"<br/>")
    document.write("multiplicación: " +(nro1*nro2)+"<br/>")
    document.write("división: "+ (nro1/nro2)+"<br/>")
    document.write("<hr>")
     

     }


    else{
    document.write("no tengo nada que mostrar")

    }
}

calcular(20,5,false);

