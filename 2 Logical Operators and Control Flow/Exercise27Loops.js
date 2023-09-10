console.log("Bad way: even numbers");

let numeroPar = 0;

while (numeroPar < 21) {
  console.log(numeroPar);
  numeroPar += 2;
}

console.log("Good way: Odd numbers");

let numeroImpar = 0;

while (numeroImpar < 21) {
  if (numeroImpar % 2 !== 0) {
    console.log(numeroImpar + " is not even.");
  }
  numeroImpar++;
}

//Print in the console all the even numbers from 0 to 20

console.log("Doing with While loop");

let j = 0;

while (j < 21) {
  if (j % 2 === 0) {
    console.log(j + " is even.");
  }
  j++;
}

console.log("Valor en el que queda j: " + j);

console.log("Doing with For loop");

let i;

for (i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("Valor en el que queda i: " + i);
