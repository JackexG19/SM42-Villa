//let datos = {"color":"rojo","marca":"seat","modelo":"leon"};
var datos = {
nombre:"Eduardo",
apellidos:"Chan Garduño",
sexo:"H",
domicilio:"SUPMZA 105 TIERRA MAYA",
curp:"CAGE030219HQRHRDA7",
registro:"2021",
nacimiento:"19/02/2003",
seccion:"0590",
vigencia:"2021-2031"
};
    document.write("<br> <br> <br> <br> <br>")
    //document.write("<br> <br> <br>");
for(var clave in datos) {
    document.write(clave+": " +datos[clave]);    
    document.write("<br>");
}