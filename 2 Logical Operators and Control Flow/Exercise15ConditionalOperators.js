let num = 9;

let conditionA = num > 2;
let conditionB = num < 10;



//Ternary or conditional Operator (?)

let str = conditionA && conditionB ? "In bounds" : "Out of bounds";
console.log(str);

//The following is a checkpoint to be sure about having an output number
let output = num == null || num == undefined ? 0 : num + 5;
console.log(output);


//Exercise 15
console.log("Exercise 15");

/*
Create a variable called age and assign it a numeric value. Use the Conditional (ternary) operator.
If the variable is grater or equal to 18, print You can drive a car.
If the variable is less than 18, print You are too young to drive.
*/

let age = "a";
let numero = 2;
let condition1 = age >= 18;
console.log(condition1);
let condition2 = age < 18;
console.log(condition2);

console.log("My way, my answer")
let permission = (typeof(age) === typeof(numero) && condition1 === true) ? "You can drive a car" : ((typeof(age) === typeof(numero) && condition2 === true) ? "You are too young to drive" : "Invalid age"); 

console.log(permission);

// Another way
console.log("Another way")

age >= 18 ? console.log("You can drive a car") : console.log("You are too young to drive");


