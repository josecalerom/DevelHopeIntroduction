console.log("Example class");

function myFunction(parameter1, parameter2, callback) {}

mostrarSuma = console.log(parameter1 + parameter2);

console.log(myFunction(1, 5));

console.log("Exercise31");

function sayHelloName(callback) {
  console.log("Hello");
  callback();
}

function printName() {
  console.log("Cosimo");
}

sayHelloName(printName);
