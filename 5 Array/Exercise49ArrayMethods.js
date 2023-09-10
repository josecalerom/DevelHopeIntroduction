const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20 },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24 },
  { id: 3, name: "Giovanni", surname: "Brambilla", age: 30 },
];

/*
Remove the last element of the array
and add the following one at the end of the array:
{ id: 3, name: "Francesco", surname: "Verdi", age: 41 }
*/

console.log("Initial Array");
console.log(students);

console.log("Remove the last element");
students.pop();
console.log("Add -id 3- at the beginnig");
students.push({ id: 3, name: "Francesco", surname: "Verdi", age: 41 });

console.log("Final Array");
console.log(students);
