//Rewrite the code, by using the ternary operator.

let number = "a";

let estado = number > 0;
console.log(estado);

if (number > 0) {
  console.log("The number is positive");
} else console.log("The number is negative");

//New code

number > 0
  ? console.log("The number is positive")
  : console.log("The number is negative");


  //Complex Ternary or conditional Operator (?)
console.log("Complex ternary exercise")

const edad = 65;
let resultadoEdad;

//We beging with a simple if

if(edad >0 && edad < 13){
  resultadoEdad = "Es un niño.";
}else if(edad >= 13 && edad < 18){
  resultadoEdad = "Es un adolescente.";
}else if(edad >= 18 && edad <= 30){
  resultadoEdad = "Es un adulto.";
}else{
  resultadoEdad = "Es un anciano.";
}
console.log(resultadoEdad);

//Then we transform in a complex Ternary

const edad2 = 65;

//In a ternary we use const because we assign the value directly. It's a unique code, it doesn't change later
const resultadoEdad2 = edad2 >0 && edad2 < 13
  ? "Es un niño."
  : (edad2 >= 13 && edad2 < 18)
  ? "Es un adolescente."
  : (edad2 >= 18 && edad2 <= 30)
  ? "Es un adulto."
  : "Es un anciano.";

console.log(resultadoEdad2);

