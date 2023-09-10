/* Create an array called students. This array must have 3 objects literals with the following properties:

id
name
surname
age

Print the first element of the array. */

let students = [
  { id: 1, name: "Jose", surname: "Calero", age: 28 },
  { id: 2, name: "María", surname: "Ramírez", age: 57 },
  { id: 3, name: "Roberto", surname: "Maldonado", age: 30 },
];

console.log("First element of the array");
console.log(students[0]);
console.log("All the elements of the first object");
console.log(students[0].id);
console.log(students[0].name);
console.log(students[0].surname);
console.log(students[0].age);
