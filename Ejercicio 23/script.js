//<br></br>
let animales = ["Perro", "Gato", "Pajaro", "Marmota", "Alux"];

// IN muestra las posiciones, OF muestra los valores

document.write(" <br> <br> Normalito <br> <br>")
for(let i = 0; i <= 4; i++){
    document.write(animales[i] + "<br>");
}

document.write(" <br> <br> IN <br> <br>")
for(animal in animales){
    document.write(animal + "<br>");
}

document.write(" <br> <br> OF <br> <br>")

for(animal of animales){
    document.write(animal + "<br>");
}

document.write("<br> <br> FUSIONAO' <br> <br>")

for (animal in animales){
    document.write(animales[animal] + "<br>");
}