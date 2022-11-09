//<br>

function fFlechita1 (){

}

const operacion = (numero1, numero2) => {
    
    let multi = numero1 * numero2;
    document.write(multi);

}

operacion(5,2);
document.write("<br>");

const saludar = nombre => document.write(`Hola ${nombre}`);
// otra opción sin arg sería | const saludar = () => document.write(`Hola ${nombre}`);

saludar("Luis");