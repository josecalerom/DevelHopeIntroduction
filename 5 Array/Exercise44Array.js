console.log("Arrays");
/*
Until now, in fact, the variables have allowed us to store only one value.
The arrays instead allow us to store and access a list of values.

This list is indexed, i.e. each element has a numerical index
that allows us to directly access the i-th element
*/

let object = {
  First: "1",
  Second: 2,
  Third: true,
};

let keys = Object.keys(object);
console.log(keys);

/* The problem with ojects is that we are not sure about their specific order
always, we can't guarantee that. And to iterate we need to use some methods before
We have the keys to be oriented */

let arr = [
  "1",
  2,
  true,
  3,
  4,
  5,
  ["a", "b", "c", "d"],
  85,
  55,
  { Dentro: true, Fuera: false },
  99,
  100,
];

/*In an array we can different values and different data types.
We no longer have the keys, but we have numbers and the elements
will stay in the same order
*/

console.log("Object element");
console.log(object["First"]); // or object.First
console.log("Array element");
console.log(arr[0]);

console.log("Array length and iterate");
/*We can use the array length to iterate
Objects does not have length, so it's more difficult to do this that quickly
*/
console.log(arr.length);

for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("Array iterate with forEach");

let miArray = [0, 1, 2, 3, 4, 5];

miArray.forEach(function (element) {
  console.log(element);
});

console.log("Object to an Array and then iterate with forEach");

let camionero = {
  nombre: "José",
  edad: 80,
};

let propiedades = Object.keys(camionero);
console.log(propiedades);
console.log(Array.isArray(propiedades));

//First method
propiedades.forEach(function (propiedad) {
  console.log(camionero[propiedad]);
});

//Second Method
for (let i = 0; i < propiedades.length; i++) {
  console.log(camionero[propiedades[i]]);
}

console.log("Array iterate with arrow function");

miArray.forEach((element) => console.log(element));

console.log("Trying to access an index that does not exist");
console.log(arr[arr.length]); // undefined
console.log(arr[arr.length - 1]); // The last value in an array is the length minus one

console.log("Array iterate with for...of");

for (element of miArray) {
  console.log(element);
}

console.log("Changing a value in an array");

// In an object we could do object["First"] = 1010;
arr[0] = 99;
console.log(arr[0]);

/*We can assign a value to an index that does not exist yet
It wont be a problem and the array will left empty spaces util that position
*/

// In an object we could do object["First"] = 1010;
arr[20] = "Index que era vacío";
console.log(arr);

console.log("Transform an Object into an Array");

const user = {
  name: "Manz",
  life: 99,
  power: 10,
  talk: function () {
    return "Hola!";
  },
};

let keysArray = Object.keys(user); // ["name", "life", "power", "talk"]
console.log(keysArray);
let valuesArray = Object.values(user); // ["Manz", 99, 10, ƒ]
console.log(valuesArray);
let pairsArray = Object.entries(user); // [["name", "Manz"], ["life", 99], ["power", 10], ["talk", ƒ]]
console.log(pairsArray);

/* Cualquier otra estructura se podría utilizar con Object.keys(), Object.values() o Object.entries()
pero devolverá un array vacío si no se puede iterar. Por ejemplo:

Object.keys(new Date());   []  (Iterar una fecha)
Object.values(/.+/);       []  (Iterar una expresión regular)
Object.entries(true);      []  (Iterar un booleano)
*/

console.log("Exercise 44");

/* Given the following array:

    Print the first element of the array.
    Print the last element of the array.
    Print the array length.
    Print the twentieth element of the array and explain the output. */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("First element");
console.log(numbers[0]);
console.log("LAst element");
console.log(numbers[numbers.length - 1]);
console.log("Array length");
console.log(numbers.length);
console.log("Twentieth element empty");
console.log(numbers[20]);
console.log("Twentieth element after creating");
numbers[20] = 20;
console.log(numbers[20]);
console.log("The complete array");
console.log(numbers);
/*The array has 10 elements, however the 20th element will appear and
it will create empty spaces between the array.length and the new 20th element */
