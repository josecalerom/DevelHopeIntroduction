//Complete the expressions inside the console.log(), by using the correct logical operator.

const question1 = 101 < 67; // False
const question2 = 1 == true; // True
const question3 = true != 1 // False
const question4 = 4 <= 4 // True

console.log(question1 || question2); //the result must be true
console.log(question1 && question2); //the result must be false
console.log(question3 || question2); //the result must be true
console.log(question4 && !question4); //the result must be false
console.log(question2 && !question4); //the result must be false
