//<>
let a=0;
let b=0;

document.write(" Empezamos por el While")
while(a <= 10){
    
    if(a == 3){
        break;
    }

    document.write(`el valor es ${a} <br>`);
        a++;
}

document.write("Ahora va el do while <br>");
do {
    document.write(`El valor es ${b} <br>`);
    b++;
} while (b <= 10);