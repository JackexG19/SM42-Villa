//<br>

let num1= prompt(" Dame un digito");
let num2= prompt(" Dame otro digito");

function fun1(n1,n2){

    let multi = n1*n2;
    
    document.write(multi);
    return multi;

}

fun1(num1,num2);
document.write("<br>");
fun1(3,3);
document.write("<br>");
fun1(10,3);
document.write("<br>");
fun1(5,2);
document.write("<br>");
