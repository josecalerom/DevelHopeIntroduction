//Print in the console the numbers from 0 to -10

//Only changing the positives
console.log("Only changing the positives");

let i;

for(i=0; i<11; i++){
    console.log(-1*i);
}

console.log("verificación 1");
console.log(i);

let j=0;
while(j<11){
    console.log(-1*j);
    j++;
}

//Doing the right way
console.log("Doing the right way");

for(i=0; i>-11;i--){
    console.log(i);
}

console.log("verificación 2");
console.log(i);

let j2 = 0;
while(j2 > -11){
    console.log(j2);
    j2--;
}


