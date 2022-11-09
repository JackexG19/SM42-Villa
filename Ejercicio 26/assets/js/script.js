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

    }

    silbar(){
        document.write("Fiu fiuuuu");
    }
}

class Perro extends Animal{
    constructor(especie,color,edad,patas,raza){
        super(especie,color,edad,patas);
        this.raza = raza;
    
        this.info = `Hola soy un ${especie} <br> 
        soy de color ${color} <br>
        tengo la edad de ${edad} años <br>
        cuento con ${patas}
        y soy de la raza ${raza}`;
    }

    informacion(){
        document.write(this.info)
    }
    Ladrar(){
        document.write("Waaaw waaow <br> <br>");
    }
}

const perro = new Perro("perro", "negro", 32, 4," Pitbull");
const pajaro = new Animal("Pájaro","verde", 1, 2);

perro.Ladrar();
perro.informacion();