//<br></br>
let animales = ["Perro", "Gato", "Pajaro", "Marmota", "Alux"];
animales.edad = 20;
// IN muestra las posiciones, OF muestra los valores

document.write(" <br> <br> IN <br> <br>")
for(animal in animales){
    document.write(animal + "<br>");
}

document.write(" <br> <br> OF <br> <br>")

for(animal of animales){
    document.write(animal + "<br>");
}

document.write(animales.edad);

/* El IN es capaz de enlistar la "posición" 'edad' */