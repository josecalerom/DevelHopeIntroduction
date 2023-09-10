/*
Create a variable called primitive and assign it a value.
Check if the value is number, string or boolean type and print it in the console.
*/

let primitive = 5;

if(typeof(primitive) === "number"){
    console.log("The primitive value is a number.");
}else if(typeof(primitive) === "string"){
    console.log("The primitive value is a  string.");
}else if(typeof(primitive) === "boolean"){
    console.log("The primitive value is a boolean.");
}else{
    console.log("Invalid data.");
}




