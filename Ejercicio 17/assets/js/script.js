//<br>

const estado = function(){
    let estados = prompt("Ingresa el estado de animo ");

    if (estados == "bien"){
        document.write("Felicidades <br>");
    }else if (estados == "mal"){
        document.write(" Lo siento, carnalito <br>");
    }
};

estado();

function saludo (){
    return "Hola mundo";
}

let funcion = saludo();
document.write(funcion);