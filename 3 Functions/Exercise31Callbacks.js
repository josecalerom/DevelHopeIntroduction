console.log("Callbacks functions");

/* We use the callback function to perform some kind of operation after some other
operation has already run */

function first(callback) {
  setTimeout(function () {
    console.log(1);
    callback();
  }, 500);
}

function second() {
  console.log(2);
}

//First is my "main" function and secind is my callback
//We use it when the order matters

first(second);

console.log("Examples from class");

console.log("Example #1");
function miFuncion(numeroUno, numeroDos, callback) {
  const resultado = numeroUno + numeroDos;
  callback(resultado);
}

function imprimir(argUno) {
  console.log("El resultado es: " + argUno);
}

function saludoResultado(argUno) {
  console.log("Hola, aquí está el resultado: " + argUno);
}

miFuncion(1, 8, imprimir);
miFuncion(2, 3, saludoResultado);

console.log("Example #2");

function sumaNumerosImpares(firstParameter, secondParameter) {
  sumOdd = 0;
  for (i = firstParameter; i <= secondParameter; i++) {
    if (i % 2 !== 0) {
      sumOdd += i;
    }
  }
  return sumOdd;
}

function miFuncionDos(numOne, numTwo, callback) {
  return callback(numOne, numTwo);
}
//We have to use return to have a functional callback or use an arrow function like:

// const miFuncionDos = (numOne, numTwo, callback) => callback(numOne, numTwo);

const impar = miFuncionDos(5, 17, sumaNumerosImpares);
console.log(impar);

console.log("Exercise 31");

/*
-Create two functions: the first one is called sayHelloName
and takes is as parameter another function (the second one) called printName.
-The printName function should just execute the console.log() method and print the name.
The sayHelloName that takes in the callback as parameter,
must execute the console.log() of the "Hello" string and after that invoke the function taken in as parameter.
*/

function sayHelloName(callback) {
  console.log("Hello ");
  callback();
}

function printName() {
  console.log("Jose");
}

sayHelloName(printName);
