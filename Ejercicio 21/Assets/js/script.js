//<br></br>

/*
        Notas:

        en HTML
<p id="apellidoP"> </p>
<p id="apellidoM"> </p>
<p id="nombre"> </p>

        en JS
        correct way
    FORMA 1     let apellidoP = arrayA["apellidoP"];
    FORMA 2     let apellidoM = arrayA.ApellidoM;


let nombre = arrayA.nombre;

        mal / es hardcodeo
document.getElementById("apellidoP").innerHTML = apellidoP; 
document.getElementById("apellidoM").innerHTML = apellidoP; 
document.getElementById("nombre").innerHTML = apellidoP; 
*/ 

let arrayA = {
    nombre: "Eduardo",
    apellidoP: "Chan",
    apellidoM: "Garduño",
    imgP: "Assets/img/persona1.png",
    imgF: "Assets/img/firma1.png",
};

let apellidoP = arrayA["apellidoP"];
let apellidoM = arrayA.apellidoM;
let nombre = arrayA.nombre;
let imgP = arrayA.imgP;
let imgF = arrayA.imgF;

document.getElementById("nombre").innerHTML = nombre;
document.getElementById("apellidoP").innerHTML = apellidoP;
document.getElementById("apellidoM").innerHTML = apellidoM;
document.getElementById("imgP").innerHTML = imgP;
document.getElementById("imgF").innerHTML = imgF;

//Parametro = "22 del aire acondicionado" Valor que se requiere para que lo demás funcione
//Propiedad = "Apellido de la persona" Sólo va a funcionar a un objeto en concreto