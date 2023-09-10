console.log("Variables Scope");
/*Scope decides when and where certain variables are accessible and what values they might have
 */

console.log("Levels of scope");
/*In JS we have mltiple levels of scope:*/

console.log("global scope (the largest)");
//functions, if and more can access "something" because was declared in a global scope
let something = 10;
console.log(something);

console.log("block scope");
//A block scope value will overwrite the global scope value even if they have the same name
//If we use -let- or -const- that new variable will only be avaliable within our block scope

if (true) {
  let something = 25.589;
  console.log(something);
}

let somethingTwo = 99999;
console.log("One: " + somethingTwo);

if (true) {
  let somethingTwo = 25.589;
  console.log("Two:" + somethingTwo);
}

console.log("Three: " + somethingTwo);

console.log("function scope");
//A function scope value will overwrite the global scope value even if they have the same name
function globalScope() {
  let something = 20;
  console.log(something);
}

globalScope();

console.log("differences between -let- and -var-");

console.log("-VAR-");

var differenceVar = 99;

if (true) {
  var differenceVar = 1555;
  console.log(differenceVar);
}

//There is a change in in global scope when we use differenceVar
console.log(differenceVar);

console.log("-LET-");

let differenceLet = 99;

if (true) {
  let differenceLet = 1555;
  console.log(differenceLet);
}

//There is no change in global scope when we use differenceLet
console.log(differenceLet);

console.log("-THIS-");
//It's useful for calling a function that includes the context of where it's being called
//This is useful for isolating different scopes

console.log("-First This-");
this.firstExampleThis = 1200;

console.log(this.firstExampleThis);

function printThisExample() {
  this.firstExampleThis = 1555;
  console.log(this.firstExampleThis);
}

printThisExample();

console.log("-Second This-");

this.secondExampleThis = "Hola";
console.log(this.secondExampleThis);

function printSecondThisExample() {
  // this.secondExampleThis = "Chao";
  console.log(this.secondExampleThis);
}

/*It's -undefined- in the console because when we use this in the global scope
we are not allowing that variable to be accessed anywhere in the page
We can only use in global scope*/
printSecondThisExample();

console.log("Exercise 35");

//If you run this function, you'll get an error.
//Fix the function and explain briefly what's wrong.

console.log("Solution #1");

function canPlay() {
  let sport = " Football";

  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }
}

canPlay();

console.log("Solution #2");

function canPlayTwo() {
  let sportTwo = " Football";
  let personNameTwo;

  if (true) {
    personNameTwo = "Cosimo";
  }

  console.log(personNameTwo + sportTwo);
}

canPlay();
