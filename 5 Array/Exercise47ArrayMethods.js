console.log("Arrays methods");

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

console.log("Add an element at the end: PUSH");

console.log(arr.length);
/* Instead of just adding a new item and a value
We will use a property to use the memory in a more efficient way
arr[20] = "Index que era vacío"; */
arr.push("Nuevo valor con Push");
arr.push(4, 5);
//The push function just create a new element at the end and add the value we gave to it
console.log(arr.length);

console.log("Add an element at the beginnig: UNSHIFT");
arr.unshift("Soy el primero ahora");

console.log("Remove the first element: SHIFT");
//The shift function delete the first element
console.log("SHIFT function:" + arr.shift());
console.log(arr.length);

console.log("Remove last element: POP");
//The pop function delete the last element and return to us
console.log("Pop function:" + arr.pop());
console.log(arr.length);

/*
Those functions use a "Last in last out"
That menas that we grab the last element and we push to the end of the array
*/

console.log("Eliminate multiple elements from an array: SPLICE");

let arrayBorrar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayBorrar.splice(2, 2); //position initial, number of elements to delete
console.log(arrayBorrar);

console.log("Splice para agregar un Array dentro:");
let arrayAgregar = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let agregar = [4.5, 4.8, 4.9];

arrayAgregar.splice(4, 0, agregar); //position before the elements will be added, number of elements to add
console.log(arrayAgregar);

console.log("Splice para agregar un número dentro:");

let arrayAgregarDos = [1, 2, 3, 4, 5, 6, 7, 8, 9];

arrayAgregarDos.splice(4, 0, 4.5, 4.8); //position before the elements will be added, number of elements to add
console.log(arrayAgregarDos);

console.log("JOIN function");
/*
It takes all the elements of an array in a big string at the end
*/

let nombres = ["José", "María", "Pedro", "Juan", "Jesús", "Antonio", "Carmen"];
console.log(nombres.join(", ")); //This is the symbol that will appear between every element

let sentence = [
  "Esta",
  "es",
  "una",
  "oración",
  "que",
  "será",
  "unida",
  "por",
  "JOIN",
];
console.log(sentence.join(" "));

console.log("Combine two arrays: CONCAT");
//The result will be a new array with the elements of the other two
const miArrayUno = [1, 2, 3, 4, 5];
const miArrayDos = [6, 7, 8];

const combinado = miArrayUno.concat(miArrayDos);
console.log(combinado);

console.log("Copy a part of an array: SLICE");

let copia = miArrayUno.slice(1, 3); // It will copy from position 1 to 2
console.log(copia);

console.log("FOREACH function");
/* It's an array function to iterate, but we hano no access to the positions of the array*/

const miArrayTres = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("Con FOREACH");
miArrayTres.forEach(function (elemento) {
  console.log(elemento);
});

//We can use an arrow function inside the FOREACH
// miArrayTres.forEach((elemento) => console.log(elemento));

//We can add steps to the arrow function
/* miArrayTres.forEach((elemento) =>{
a = 1;
console.log(elemento+a)});
*/

//We can do this using a normal -for-

console.log("Con for");
for (let i = 0; i < miArrayTres.length; i++) {
  console.log(miArrayTres[i]);
}

console.log("Con for...of");
for (const numero of miArrayTres) {
  console.log(miArrayTres[numero]);
}

console.log("MAP function: copy an array with a condition");

const miArrayCuatro = [1, 2, 3, 4, 5, 6, 7, 8];

let duplicadoCuatro = miArrayCuatro.map(function (elemento) {
  return elemento * 2;
});

console.log(duplicadoCuatro);

console.log("Filter elements in an array: FILTER");

const miArrayCinco = [1, 2, 3, 4, 5, 6, 7, 8];

let filtrados = miArrayCinco.filter(function (elemento) {
  return elemento > 3;
});

console.log(filtrados); //Elements that are >3: [4, 5, 6, 7, 8]

console.log("Add all elements from an array: REDUCE");
//It returns a unique value not a String

const miArraySeis = [10, 40, 40, 30, 10, 20];

let sumaSeis = miArraySeis.reduce(function (acumulador, elemento) {
  return acumulador + elemento;
});
//acumulador: elemento fuera del -for-
//elemento: es el elemento de la iteración

console.log("Reduce corto: " + sumaSeis);

//Forma más detallada

let miArraySuma = [2, 4, 6, 8, 10];

const res = miArraySuma.reduce((acc, item) => {
  return (acc += item);
}, 10);

/* El último elemento -10- es el valor que tomará inicialmente el acc
De lo contrario tomará el valor del primer elemento del array y comenzará
a iterar con el segundo
*/

console.log("Reduce largo: " + res);

console.log("Orgaize an array: SORT");

const miArraySiete = ["z", "b", "o", "k", "h", "a"];

miArraySiete.sort();
//In advanced JS we can control de parameters to organize the array
console.log(miArraySiete);

console.log("Invert an array order: REVERSE");

const miArrayOcho = [1, 2, 3, 4, 5];

miArrayOcho.reverse();
console.log(miArrayOcho);

console.log("EVERY: Verify if a condition is true");

//The return value is a boolean: true or false
const miArrayNueve = [0, 2, 5, 4, 8, 10, 44];

let sonTodosPares = miArrayNueve.every(function (elemento) {
  return elemento % 2 === 0;
});

console.log(sonTodosPares);

console.log("SOME: Verify if a condition is true at least in one element");

const miArrayDiez = [0, 2, 5, 4, 8, 10, 44];

//The return value is a boolean: true or false
let hayAlgunPar = miArrayNueve.some(function (elemento) {
  return elemento % 2 === 0;
});

console.log(hayAlgunPar);

console.log("SLICE: Obtain n elements of an Array");

const miArrayOnce = [0, 2, 5, 4, 8, 10, 44];

let primerosTres = miArrayOnce.slice(0, 3);
console.log(primerosTres);

console.log("Find values that are true in a condition: FIND");

const miArrayDoce = [0, 2, 9, 7, 3, 10, 44];

//It returns only the first element which has the condition

let hayAlgunMultTresPrimero = miArrayDoce.find(function (elemento) {
  return elemento % 2 === 0;
});

console.log(hayAlgunMultTresPrimero);

console.log("Example 1");

let persona = [
  { nombre: "a", altura: 100 },
  { nombre: "b", altura: 234 },
  { nombre: "c", altura: 156 },
  { nombre: "d", altura: 276 },
  { nombre: "e", altura: 254 },
];

let masAlto = persona.reduce(function (max, persona) {
  return persona.altura > max.altura ? persona : max;
});

console.log(masAlto);

console.log("Example 2: find duplicates");

console.log("Exercise 47");
const names = ["Luca", "Marco", "Vittorio", "Giovanni"];

/*
Remove the element Giovanni.
Add a new element called Pippo at the end of the array.
Add the element Giovanni to the beginning of the array.
*/
console.log("Initial Array");
console.log(names);
console.log("Remove Giovanni");
names.pop();
console.log("Add Pippo at the end");
names.push("Pippo");
console.log("Add Giovanni at the beginning");
names.unshift("Giovanni");

console.log("Final Array");
console.log(names);
