let str = "String double";

//Knownign the type of data of a variable
console.log (typeof str);

//Change strings to numbers
let stringtoNumber1 = "34";
let stringtoNumber2 = "66";
let stringtoNumber3 = "Hello";

//Before changing
sum = stringtoNumber1 + stringtoNumber2;
console.log (sum);

//After changing
console.log (Number(stringtoNumber1)+Number(stringtoNumber2));

//Type Coercion: force onde type of data into another
// Java finds a way to make this divition makes sense
console.log (stringtoNumber1/stringtoNumber2);
//if we mantain an string without numbers it doesn't make sense
console.log (stringtoNumber1/stringtoNumber3);
console.log (stringtoNumber3/stringtoNumber2);


//Change booleans to numbers
let trueValue = true;
let falseValue = false;
console.log (Number(trueValue));
console.log (Number(falseValue));

//Change booleans into string
console.log (String(trueValue));
console.log (String(falseValue));

//Change undefined to numbers: it will show another way to write NaN
console.log (Number(undefined));

//Change undefined to a string
console.log (String(undefined));

//Change undefined to boolean: in JavaScript there are thruth-y and false-y values
console.log (Boolean(undefined));

//Change numbers into boolean
console.log (Boolean(1));
console.log (Boolean(0));

//Thruth-y and false-y values
// Str == Boolean
console.log(stringtoNumber1 == trueValue);
console.log(stringtoNumber3 == trueValue);
console.log(str == trueValue);
//An empty string (""), the number 0, null, NaN, a boolean false, and undefined variables are all “falsy”.
//Everything else is “truthy”.


console.log ("Las pruebas aquí---->");

console.log(Boolean(0) == trueValue);
console.log(0 == trueValue);
console.log(Boolean(1) == trueValue);
console.log(1 == trueValue);
console.log(Boolean(10) == trueValue);
console.log(10  == trueValue);
console.log(Boolean("Siiii")  == trueValue);
console.log("Siiii"  == trueValue);
console.log(Boolean("")  == trueValue);
console.log(""  == trueValue);

//Comparisons

//equality

//Double equals: performs type convertion
let bool1 = false;
let numbString1 = "1";
console.log(bool1 == trueValue);
console.log(numbString1 == 1);

//Triple equals: wont perform type convertion
let bool2 = 1;
let numbString2 = "1";
console.log(bool2 == trueValue);
console.log(numbString2 === bool2);

//Greater than
let bool = true;
console.log(bool > trueValue);

//Less than
console.log(bool < trueValue);


//The exercise beging here
console.log ("Ejercicio aquí---->");

let hello = 'Ciao';     // boolean
console.log (Boolean(hello));

let age = 18;       // string
console.log (String(age));

let isGraduated = false;     // number
console.log (Number(isGraduated));
