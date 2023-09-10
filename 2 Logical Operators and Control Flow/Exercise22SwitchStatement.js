//Switch
//Switch is faster than an if

console.log("Class exercise 1");

const comida = "pizza";

switch(comida){
    case "pizza":
        console.log("Es una comida poco saludable");
        break;
    case "hamburguesa":
        console.log("Es una comida rápida");
        break;
    case "ensalada":
    case "frutas":
    case "frutos secos":
    //The three cases share the same result
        console.log("Es una comida saludable.");
        break;
    default:
        console.log("No es ninguna de las opciones.");
}

console.log("Class exercise 2");

const calificacion = 85;

switch(true){
    case calificacion >= 90:
        console.log("A");
        break;
    case calificacion >= 80:
    /*We don't have to write the condition calificacion >= 80 && calificacion < 90
    Because we have the break. However we have to do it in order to have a good result*/
        console.log("B");
        break;
    case calificacion >= 70:
        console.log("C");
        break;
    case calificacion >= 60:
        console.log("D");
        break;
    default:
        console.log("F");
}



//Exercise 22

/*
Rewrite the exercise 20, by using a Switch statement:
Create a variable called primitive and assign it a value.
Check if the value is number, string or boolean type and print it in the console.
*/

let primitive = 5;
let typePrimitive = typeof(primitive);

// switch (typePrimitive){
//     case "string":
//         console.log("The variable is a string.");
//         break;
//     case "number":
//         console.log("The variable is a number.");
//         break;
//     case "boolean":
//         console.log("The variable is a boolean.");
//         break;
//     default:
//         console.log("The data is unvalied.");
//         break;  
// }

switch (typeof(primitive)){
    case "string":
        console.log("The variable is a string.");
        break;
    case "number":
        console.log("The variable is a number.");
        break;
    case "boolean":
        console.log("The variable is a boolean.");
        break;
    default:
        console.log("The data is unvalied.");
        break;  
}

