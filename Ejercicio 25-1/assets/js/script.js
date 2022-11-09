//<br>
/* 
    "Las clases son cómo fábricas" 
Cada empresa necesita por lo menos, un constructor
    "Los constructores fungen cómo las máquinas de las fábricas"
Los constructores reciben parámetros
Parámetros del constructor = Atributos
! this = objeto que se va a instanciar
! this tiene propiedades y las propiedades
! tienen parámetros.

Los métodos sí dependen de los objetos

*/

class Animal{
    constructor(especie,color,edad,patas){
        this.especie = especie;
        this.color = color;
        this.edad = edad;
        this.patas = patas;

        this.info = `Hola soy un ${especie} <br> 
        soy de color ${color} <br>
        tengo la edad de ${edad} años <br>
        y cuento con ${patas}`;
    }

    informacion(){
        document.write(this.info)
    }
    Ladrar(){
        document.write("Waaaw waaow <br> <br>");
    }
}


const perro = new Animal("perro", "negro", 32, 4);
const pajaro = new Animal("Pájaro","verde", 1, 2);

perro.Ladrar();
perro.informacion();

pajaro.info();