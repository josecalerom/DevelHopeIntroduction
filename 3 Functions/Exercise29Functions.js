console.log("Functions and Methods:");

/*Functions: a little more general.

function (argument 1, argument2, ...)
Examples: Number(arg); typeof(arg); console.log(arg)

2 kind of functions:

1)Function which returns an output

2)function which performs operations without output*/

console.log("Declaring a function:");

// function name (arg1, arg2, arg3) {the logic of my function}
// the "return" action makes possible to access the value outside of the function

console.log("Testing we can use a function we declare after");
console.log(sumExample(5, 5));

console.log("Example 1");

function sumExample(arg1, arg2) {
  let sum = arg1 + arg2;
  return sum;
}

let output = sumExample(5, 8);
console.log(output);

console.log(typeof sumExample);
console.log(typeof sumExample(10, 9));

let usingSum = sumExample;
console.log(usingSum(10, 9));

console.log("Example 2");

/*Now we have a function without a return
if we try to assign something the result will be undefined by default*/

function sayHello() {
  console.log("Hello!");
}

let hello = sayHello();
console.log(hello);

console.log(typeof sayHello);

//We can assign the value of a function (new or existing) to a variable

let usingHello = sayHello;
usingHello();

console.log("Example 3");

//Function Expression: we can only call it after the declaration

let newFunction = function (arg1) {
  console.log(arg1 + " added.");
};

newFunction(4);

/*Methods: refers directly to a function attached to some other class. */

//When we need something to be executed automatic

// function saludar() {
//   console.log("HOLA");
// }

const saludar = () => console.log("Hola");

(() => {
  let a = saludar;
  console.log(a());
})();

console.log("Suma pares");
//Sum of even numbers from parameter1 to parameter2

function sumaNumerosPares(firstParameter, secondParameter) {
  sumEven = 0;
  for (i = firstParameter; i <= secondParameter; i++) {
    if (i % 2 === 0) {
      sumEven += i;
    }
  }
  return sumEven;
}

/* When a return statement is used in a function body,
the execution of the function is stopped */

console.log("Suma pares: " + sumaNumerosPares(1, 10));

console.log("Suma impares");
//Sum of odds numbers from parameter1 to parameter2

function sumaNumerosImpares(firstParameter, secondParameter) {
  sumOdd = 0;
  for (i = firstParameter; i <= secondParameter; i++) {
    if (i % 2 !== 0) {
      sumOdd += i;
    }
  }
  return sumOdd;
}

const sumaImparesConFlecha = (firstParameter, secondParameter) => {
  sumImpares = 0;
  for (i = firstParameter; i <= secondParameter; i++) {
    if (i % 2 !== 0) {
      sumImpares += i;
    }
  }
  return sumImpares;
};

console.log("Suma impares normal: " + sumaNumerosImpares(10, 25));
console.log("Suma impares flecha: " + sumaImparesConFlecha(10, 25));

console.log("Exercise 29");

/* Create a function called printName that prints in the console the name:

Use the console.log() function to print the name.
The function doesn't return anything.
The function doesn't take in any parameters.
*/

function printName() {
  console.log("José");
  return;
}

console.log(typeof printName);

console.log(typeof printName());
