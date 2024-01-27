const cambiotexto = () => {
    document.getElementById('demostracion') .innerHTML='Texto transformado por JS'
}

//Tipos de datos

    //Número
    let a = 3; //entero
    let b = 9.67; //decimal, flotante

    //String
    let c = "Hola";

    //Booleano
    let d = false;
    let e = true;

    //Undefined
    let f;  //undefined no está definido

    //NULL
    let g = null;   //Null es la ausencia de valor, está definido sin valor

    //Objeto
    let objeto = {
        clave: "valor"
    };

    //Array
    let arr = [1, 2, 3, 4, 5, 6];

    //DATE
    let date = new Date("01-27-2024");

//Variables
var nombreVar;
nombreVar = "Maria";
nombreVar = "Juan";
var nombreVar = 1234;

let nombreLet;
nombreLet = 123;
nombreLet = "Adios";

const nombre = "inicial";

let x,y,z;

x=9;y=28;z=x+y;

//Operadores
let suma = 1 + 1;
let resta = 20 - 3;
let multiplicacion = 2 * 10;
let division = 6 / 2;
let exponente = 2 ** 3;
let resto = 5 % 2;

let xx = 5;
let yy = 4;

//Aumentador
xx ++;
//Disminuidor
yy --;

//Concatenar
let palabra1 = "Me llamo ";
let palabra2 = "Jose"
const palabraFinal = palabra1 + palabra2;
console.log(palabraFinal);

//Errores posibles al concatenar
let num1 = 3;
let num2 = "3";
let num3 = "3.55"
const numFinal = num1 + num2;

console.log("Concatenado: ", numFinal);

//Parsear para eliminar posibles errores
const numFinalParseo = num1 + parseInt(num2);
console.log("Concatenado y parseado: ", numFinalParseo);

const numFinalParseo2 = num1 + parseFloat(num3);
console.log("Concatenado y parseado2: ", numFinalParseo2);


//Nombres variables

let $variable = "variable 1" //Signo
let _variable = "variable 2" // guion bajo
let variable = "variable 3" //minúscula
let Variable = "variable 4" // mayúscula

let nombreApellido;
let nombreapellido;

//SCOPE
//El scope va desde afuera hacia adentro
//El scope padre está disponible en el scope hijo

const variableScope = 3;
let variableScope2 = "Scope";

{
    const variableScope = 4;
    console.log("Scope dentro llaves: ", variableScope);
    console.log(variableScope2)
}

console.log("Scope fuera llaves: ",variableScope);

//Operadores lógicos

let equis = 10;
let ye = "10";
let zeta = equis == ye;     //Compara el valor absoluto
console.log("Comparación ==: ", zeta)

let zetaDos = equis != ye;  //Comparador de negación
console.log("Comparación !=: ", zetaDos)

let zetaTres = equis === ye; //Compara el valor absoluto y el tipo
console.log("Comparación ===: ", zetaTres)

let zetaCuatro = equis !== ye; //Compara negación y tipo
console.log("Comparación !==: ", zetaCuatro)

