/*
Metodo es para un objeto (Document es el objeto, Write el método)
Una función es independiente (Alert es la función)
*/


/* let estado = prompt("¿Cómo estás?");

if (estado == "bien"){
    document.write("Felicidades");
}else if(estado == "mal"){
    document.write("im sorry for you");
}
*/


//Declarar funciones || Nomeclatura: MINUSCÚLAS

function fEstado(){

    let vEstado = prompt("¿Cómo estás?");

    if (vEstado == "bien"){
        document.write("Felicidades");
    }else if(vEstado == "mal"){
        document.write("im sorry for you");
    }
    document.write(" <br> ");
}

//Llamar función
document.write(" Resultados:    <br> <br>");
fEstado();
fEstado();
fEstado();
//<br>