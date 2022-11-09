//<br>
class Persona{
    constructor(nombre,altura,peso,edad,color,idioma_materno){
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
        this.edad = edad;
        this.color = color;
        this.idioma_materno = idioma_materno;

        this.hola  = `<br> Hola, me llamo ${nombre}
        y mido ${altura} y peso ${peso} Kg. Pero tengo ${edad} años
        soy de color ${color} y mi idioma materno es ${idioma_materno} <br>`; 
    }

    presentar(){
        document.write(this.hola);
    }
}  

const julieta = new Persona ("Julieta", 1.56, 50, 18, "Güera", "Inglés.");
const maria = new Persona ("Maria", 1.69, 62, 20, "Café lechero", "Español.");
const andres = new Persona ("Andres", 1.73, 70, 22, "Humilde", "Maya.");
const javier = new Persona ("Javier", 1.55, 56, 18, "Normalito","Español.");
const lalo = new Persona ("Lalo", 1.84, 52, 19, "Como que quiere pero no", " ni yo sé.");

julieta.presentar();
maria.presentar();
andres.presentar();
javier.presentar();
lalo.presentar();