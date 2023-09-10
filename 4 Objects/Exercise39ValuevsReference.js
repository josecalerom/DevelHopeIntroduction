console.log("Value vs Reference");

let obj = {
  key: "values",
  number: 10,
  func: (arg) => arg + 2,
  obj: {
    key: 2,
  },
};

console.log("Primitive cases");
let a = 10;
let b = 4;

//The variables are pointing a new value, but the references are not changing

function changueNumber(number) {
  number += 5;
}

number = 6;

console.log("Number before change: " + number);

changueNumber(number);
/* The change is not reflected once we left the function
When we pass a primitive to a function, we pass the value
and we are not passing the reference to that variable 
*/
console.log("Number after change: " + number);

/*We only pass the value of the variable and not the reference to the variable itself
The change is not reflected after the function is finished*/

console.log("Objects case");

console.log("Changing object");

function changueTheValue(object, key, value) {
  object[key] = value;
}

/* 
When we pass an object to a function, we are actually passing the reference
to the object itself  and not the value of the object
*/
console.log("Object number before change: " + obj.number);
changueTheValue(obj, "number", 33555555);
console.log("Object number after change: " + obj.number);

/*
Objects are references to specific points of storage in our computer's system
When we give an object to a function, we are giving a reference to that space in our computer's storage
We're able to change aspects of objects within our functions and have those changes reflected in the first version of our object
*/

console.log("Making an object copy");

function changueCopyValue(object, key, value) {
  copyObject = object;
  copyObject[key] = value;
}

console.log("Object key before copy change: " + obj.key);
changueCopyValue(obj, "akey", "Cambiooooooo");
console.log("Object kay after copy change: " + obj.key);

//Copy Object does not exist outside the function
// console.log("Copy Object existence: " + copyObject.key);

/*
There is not a true copy of an object,
the copy is just referencing the same one.
 */

console.log("Exercise 39");

/*
In the code below we have an object literal called user that has two properties:
name and age.
If we try to create a newUser starting from user and, after that,
we try to change the name, you'll notice that even the original user has been modified.
How can we modify the name of newUser without changing the name of user?
*/

let user = {
  name: "Cosimo",
  age: 30,
};

/*This is a copy of the object using a value and not a reference,
So the changes wont affec the original object
*/

let newUser = {};

for (const key in user) {
  newUser[key] = user[key];
}

console.log("Before the change:");

console.log("User:");
console.log(user);
console.log("New User:");
console.log(newUser);

console.log("After the change:");

newUser.name = "Paolo";

console.log("User:");
console.log(user);
console.log("New User:");
console.log(newUser);
