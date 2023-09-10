/*Use a for loop to print all the numbers from 0 to 10 and their sum. The output should be:
0
1
2
3
4
5
6
7
8
9
10
55
*/

let productoSuma = 0;

// for(i=0; i<11; i++){
//     productoSuma = productoSuma + i;
//     console.log(productoSuma);
// }

for (i=0; i<11; i++) {
    productoSuma += i;
    console.log(i);
}

console.log(productoSuma);

console.log("Ejemplo de String:");

let sumaString = "Hola";

for (i=0; i<sumaString.length; i++) {
        console.log(sumaString[i]);
}


console.log("Example for inside a for:");


for(i=0; i < 4; i++){
    console.log("Entro al primer ciclo");
    for(j=0; j < 4; j++){
        console.log("Entro al segundo ciclo");
        for(k=0; k < 4; k++){
            console.log("X= " + i + "; "+ "Y= " + j + "; "+ "Z= " + k);
        }
    }
    
}