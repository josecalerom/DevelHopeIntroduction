/*
Create a variable and set it to true.
Print the value in the console and the data type.
Convert it to a numeric data type, print the value and the data type.
Convert it to string data type, print the value and the data type.
Finally, convert it to a boolean data type, print the value and the data type.
*/

let var1 = true;

console.log("Variable inicial boolean");
console.log(var1);
console.log(typeof(var1));

console.log("Variable intermedia númerico");
var1 = Number(var1);
console.log(var1);
console.log(typeof(var1));

console.log("Variable intermedia string");
var1 = String(var1);
console.log(var1);
console.log(typeof(var1));

console.log("Variable final boolean");
var1 = Boolean(var1);
console.log(var1);
console.log(typeof(var1));

//Exercise 9
console.log("Ejercicio 9");

const name = "Mario";
const lastname = "Rossi";
const age = 27;
const isGraduated = false;
const average = 27;
const examsCompleted = 10;
const firstYearCompleted = true;
const yearsCompleted = 1;

//"Mario" == "Rossi" (False)
console.log(name == lastname);

//27 <= 27 (True)
console.log(age <= average);

//true == "Rossi" (False)
console.log(firstYearCompleted == lastname);

//1 == true (True)
console.log(yearsCompleted == firstYearCompleted);

//true === 1 (False)
console.log(firstYearCompleted === yearsCompleted);

//10 < 27 (True)
console.log(examsCompleted < age);

//false > 1 (False)
console.log(isGraduated > yearsCompleted);

