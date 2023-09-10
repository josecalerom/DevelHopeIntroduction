//If
// It allows to run or not a block of code instead of just assign a new value only

let age = 10;
let numero = 2;
let condition1 = age >= 18;
console.log(condition1);
let condition2 = age < 18;
console.log(condition2);

// console.log("The previous way")
// let permission = (typeof(age) === typeof(numero) && condition1 === true)
//     ? "You can drive a car"
//     : ((typeof(age) === typeof(numero) && condition2 === true)
//         ? "You are too young to drive"
//         : "Invalid age");

console.log("The new way with IF")
if(typeof(age) === typeof(numero) && condition1 === true){
    console.log("You can drive a car");
} else if (typeof(age) === typeof(numero) && condition2 === true){
    console.log("You are too young to drive");
}else{
    console.log("Invalid age");
}



//Exercise 17
console.log("Exercise 17");

//Rewrite the exercise number 15, by using the if else statement.

/*
Create a variable called age and assign it a numeric value. Use the Conditional (ternary) operator.
If the variable is grater or equal to 18, print You can drive a car.
If the variable is less than 18, print You are too young to drive.
*/

let edad = 10;
let numeroControl = 2;
let firstCondition = edad >= 18;
console.log(condition1);
let secondCondition = edad < 18;
console.log(condition2);

if ((typeof(edad) === typeof(numeroControl)) && firstCondition == true){
    console.log("You can drive a car");
}else if((typeof(edad) === typeof(numeroControl)) && secondCondition == true){
    console.log("You are too young to drive");
}else{
    console.log("Invalid age");
}

