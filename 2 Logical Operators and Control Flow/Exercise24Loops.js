//Loops

console.log("for loop");
// it is the variable we are gonna be updating inside the loop
// We use when we know the start and the end
// the second condition is when to stop my loop
// for (initialize our iterator; set our stopping condition; update our iterator)

/*if I declare i befor the loop is that way:
let i = 0;
for ( i=0


if I do not declare i we begin declaring i inside the loop:
for (let i=0; i ....
*/

// i++                =            i=i+1
// i+=2               =            i=i+2

console.log("for loop ejemplo 1");
let i = 0;
for (i=2; i < 8; i+=2){
    console.log(i);
}
console.log(i);
console.log("Final loop value i:" + i + ".");

console.log("for loop ejemplo 2");
let str2 = "";

for(i=2; str2.length < 8; i+=2){
    console.log(i);
    str2 = str2 + "A";
}
console.log(str2);

console.log("for loop ejemplo 2");

//Multiplicació por 5
let numero=5;

for (i=0; i<=10; i++){
    console.log(numero + "X" + i + "=" + numero*i);
}

//Multiplicació por 5 invertida

for (i=10; i>0; i--){
    console.log(numero + "X" + i + "=" + numero*i);
}


//Doing the multiplications tables from 1 to 10.





console.log("while loop");
//We have to keep tracking the iteration somewhere else for this kind of loop
//We use it, for example, when something is different from another thing

let j = 2; //initial value

//stopping criteria
while(j < 8){
    console.log(j);
    j+=2;
} 

let str = "";
while(str.length < 8){
    str = str + "A";
} 

console.log(str);

console.log("do while loop");

let variable = 22;

do{
    console.log("Se imprime aunque no se cumpla la condición.");
    variable += 1;
}
while(variable >=22 && variable < 29)


//Exercise 24
console.log("Exercise 24");

//Print in the console the numbers from 1 to 10.
p=0;
a=1;
while (p<10){
    console.log(a);
    p++;
    a++;
}

for (i=0; i<10; i++){
    console.log("The number is:" + (i+1));
}


