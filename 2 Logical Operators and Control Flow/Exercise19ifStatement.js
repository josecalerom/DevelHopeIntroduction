/*
Given the variables name and surname, create an if else statement to print the full name.
The full name must be printed only if name and surname are truthy, otherwise print the message:
Full name is invalid.
*/

let name = "Po";
let surname = "";
let stringControl = "Control";

//Simple answer
if((name && surname) == true){
    let fullname = name + " " + surname;
    console.log(fullname);
}else{
    console.log("Fullname is invalid");
}

//Complex answer, considering the type of data

// if(name && surname == true) && (typeof(name) && typeof(surname) === typeof(stringControl))){
//     let fullname = name + " " + surname;
//     console.log(fullname);
// }else{
//     console.log("Fullname is invalid");
// }