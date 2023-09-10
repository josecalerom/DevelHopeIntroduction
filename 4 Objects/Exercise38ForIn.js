console.log("Objects properties");

//We use -in- to check if a property is part of our object or not.

let numerosSuma = {
  numOne: 98,
  numTwo: 14,
  numThree: 3,
  func: (argOne) => argOne + 2,
  objInside: {
    Jason: 0.00005,
  },
};

//We use that if to check the values inside of our object
if ("numOne" in numerosSuma) {
  console.log(numerosSuma.numOne + 102);
} else {
  console.log("Number does not exist.");
}

for (const variable in numerosSuma) {
  console.log(variable);
  console.log(typeof variable);
  console.log(typeof numerosSuma[variable]);
}

console.log("Exercise 38");

/*Starting from the exercise 37, print the key of the car object
Use for in statement*/

let car = {
  name: "Corsa",
  color: "red",
};

for (const llave in car) {
  console.log(llave);
}
