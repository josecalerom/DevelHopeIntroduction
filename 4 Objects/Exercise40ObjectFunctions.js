console.log("Object Functions");

/* There are some methods to manipulate the values of an object*/

let obj = {
  key: "values",
  number: 10,
  func: (arg) => arg + 2,
  obj: {
    key: 2,
  },
};

console.log("Making an object copy:");

function changueCopyValue(object, key, value) {
  let copyObject = Object.assign({}, object);
  copyObject[key] = value;
  return copyObject;
}

console.log(obj);

let output = changueCopyValue(obj, "number", 2099);
console.log(obj.number);
console.log(output.number);

console.log("Maintain the values of an object:");

const objFijo = {
  numero: 8,
  nombre: "Pedro",
  ciudad: "Caracas",
};

objFijo.numero = 1010;
// The const keyword does not really work for objects
console.log(objFijo);

//We have to use the freeze property: it is like const keyword for objects
Object.freeze(objFijo);
objFijo.numero = 99999;

console.log(objFijo);

console.log("Equality method:");

/*It takes two elements and it tells us if they are equal
It's similiar to === */

console.log(Object.is(objFijo.numero, 1010));
console.log(objFijo.numero);

console.log(typeof objFijo.numero);

console.log("Use a function inside of an object:");

let persona = {
  edad: 34,
  nombre: "Michel",
  ciudad: "Torino",
  //Usamos el this porque es para saber que el valor está fuera de la función
  presentarse: function () {
    nombreFunc = "Soy el nombre dentro de la función";
    //nombrefunc es una variable dentro de la función solamente
    console.log(nombreFunc);
    console.log(
      `Hola, soy ${this.nombre}` + " y tengo " + this.edad + " años."
      //El símbolo ${} es para acceder a una variable dentro del template string
      // El backticks ( ` ` ) recuerda espacios, permite variables, funciones dentro, etc.
    );
  },
};

persona.presentarse();

console.log("Exercise 1:");

const calculadora = {
  sumar: function (a, b) {
    return a + b;
  },

  restar: function (a, b) {
    return a - b;
  },

  multiplicar: function (a, b) {
    return a * b;
  },

  dividir: function (a, b) {
    return a / b;
  },
};

console.log(calculadora.sumar(2, 4));
console.log(calculadora.dividir(5000, 5));

console.log("Ejemplo 2");
//Es un objeto con un método dentro

const circuloObjeto = {
  radio: 5,
  calcularArea: function () {
    return Math.PI * ath.pow(this.radio, 2); //función matemática para elevar al cuadrado
  },
};

console.log("El área del círculo es: " + circuloObjeto.calcularArea());

console.log("Ejemplo 3");
//Es un objeto con un método dentro, pero válido para cualquier radio

const circuloFuncion = function (radio) {
  this.radio = radio;
  this.calcularArea = function () {
    return Math.PI * this.radio * this.radio;
  };
};

console.log("Círculo 1");
const circuloFuncion1 = new circuloFuncion(5);
console.log(circuloFuncion1);

console.log("Círculo 2");
const circuloFuncion2 = new circuloFuncion(10);
console.log(circuloFuncion2);

console.log("Exercise 40");

/* 
Starting from the exercise 39.
Do you know any other way to copy the user object
without changing its properties?
*/

console.log("First Method: changing properties");

let user = {
  name: "Cosimo",
  age: 30,
};

function changeExampleValue(key, value, objetivo) {
  copyObjetivo = Object.assign({}, objetivo);
  copyObjetivo[key] = value;
  return copyObjetivo;
}

let newUser = changeExampleValue("name", "Jose cambio", user);

console.log(user);
console.log(newUser);

console.log("Second Method: without changing properties");

let userSecondMethod = {
  name: "Cosimo",
  age: 30,
};

newUserSecondMethod = Object.assign({}, userSecondMethod);

console.log("antes del cambio:");
console.log(userSecondMethod);
console.log(newUserSecondMethod);

newUserSecondMethod.name = "Luisito Angel";

console.log("después del cambio:");
console.log(userSecondMethod);
console.log(newUserSecondMethod);
