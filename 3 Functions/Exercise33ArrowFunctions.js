console.log("Arrow functions");

function normalFunc(arg1) {
  return arg1 + 3;
}

/*We'll rewrite the normal function as an arrow
We cannot give a name to arrow functions, we have to use them annonymously
Or use functions that we had stored into variables in order to work
The arrow functions have an "implicit return", we don't need to write return each time we use it
but only if we just have one operation */

/*If we maintain the curly brackets we have to follow the rules of a normal function, so we must use return.
Thet's because arrow functions were designed to be as short as possible

 let arrowFunc = (arg1) => {
  return arg1 + 3;
 };

 */

let arrowFunc = (arg1) => arg1 + 3;

console.log("Normal function: " + normalFunc(3));
console.log("Arrow function: " + arrowFunc(3));

console.log("Arrow functions with more than one steps");

let arrowFuncTwo = (arg1) => {
  b = arg1 + 3;
  console.log(b);
  return b;
};

arrowFuncTwo(4);

console.log("Arrow functions: rewrite the exercise 31");

function first(callback) {
  setTimeout(() => {
    console.log(1);
    callback();
  }, 500);
}

// function second() {
//   console.log(2);
// }

first(() => console.log(2));

console.log("Exercise 33");

/* Replace the function below with an arrow function.

function sum() {
return 5 + 5;
}

console.log(sum());

The output of the function doesn't have to change.
*/

let arrowExample = () => 5 + 5;

/*another solution is:
const arrowExample = () => {
 return 5 + 5;
}
*/

console.log(arrowExample());
