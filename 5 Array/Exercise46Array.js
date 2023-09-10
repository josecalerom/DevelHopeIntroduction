/*
Given the following array:

Print all the elements of the array.
*/

const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

console.log("Array length");
console.log(students.length);

console.log("Print directly");
console.log(students);

console.log("Print while iterating");
for (i = 0; i < students.length; i++) {
  console.log(students[i]);
}
