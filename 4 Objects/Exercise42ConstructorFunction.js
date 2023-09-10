console.log("Constructor Function");

/*In this method we are gonna treat our objects like a class
it's similar to a class approach, but instead we're gonna use a function
called a constructor function wich will give us an object
with an specific format and an specific set of keys.

This way we can make multiple versions of this object called instances
that all have the same kind of variables attached to them*/

/*The constructor function is built like normal functions
It's a good practice to begin the constructor functions with capital letters
so this way they'll be different from normal functions*/

function Person(name, age, nationality) {
  this.name = name; // it's like saying inside of an object { name: name }
  if (typeof age === "number") {
    this.age = age; // obj[age] = age
  } else {
    this.age = Number(age); //age (property) = age "parameter"
  }
  this.nationality = nationality;
}

/*The constructor function does not return anything
We have to create a new variable and
 use -new- to have a return from it
*/
let personOne = new Person("Jose", "37", "venezolano");
let personTwo = new Person("Maria", 37, "italiana");

console.log(personOne);
console.log(personTwo);

//We can compare values inside the objects
//Who's older? Jose or Maria?
if (personOne.age > personTwo.age) {
  console.log(personOne.name + " is older.");
} else if (personOne.age < personTwo.age) {
  console.log(personTwo.name + " is older.");
} else {
  console.log(
    personTwo.name + " and " + personOne.name + " have the same age."
  );
}

console.log("Filtrar tipo de valor en un objeto");

let valoresRandom = {
  a: 23,
  b: "soy dos",
  c: true,
  d: 555,
  e: [0, 1, 2],
  f: 101213,
  g: { one: 1, two: 2 },
};

for (let valores in valoresRandom) {
  if (typeof valoresRandom[valores] == "number") {
    console.log(valoresRandom[valores]);
  }
}

console.log("Ejemplo 1");

let personaFuncion = function (edad, nombre, ciudad) {
  this.edad = edad;
  this.nombre = nombre;
  this.ciudad = ciudad;
  this.presentarse = function () {
    console.log(
      `Hola, soy ${this.nombre}` + " y tengo " + this.edad + " años."
    );
  };
};

const persona1 = new personaFuncion(20, "Pedro", "Milano");
const persona2 = new personaFuncion(45, "Juan", "París");
const persona3 = new personaFuncion(69, "Carlos", "Boston");

persona1.presentarse();

console.log("Ejemplo 2");

//Otra forma de declarar la Función constructor
function productoFuncion(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.calcularPrecioTotal = function (cantidad) {
    return this.precio * cantidad;
  };
}

const producto1 = new productoFuncion("Juan", 2000);
console.log(producto1.calcularPrecioTotal(3));

console.log("Exercise 42");

/*
Create a constructor function called Smartphone that takes in 3 parameters:
brand,name, price.
To create an object from a constructor function, we use the -new- keyword.
Create two different objects.
*/

function Smartphone(brand, name, price) {
  this.brand = brand;
  this.name = name;
  this.price = price;
}

function PrintSmartphone(object) {
  console.log(
    "El teléfono " +
      object.name +
      ", de la marca " +
      object.brand +
      ", cuesta " +
      object.price +
      "€."
  );
}

let nokia45 = new Smartphone("Nokia", "45", 5500);
let samsung12 = new Smartphone("Samsung", "12", 3590);

console.log("Nokia");
console.log(nokia45);
PrintSmartphone(nokia45);

console.log("Samsung");
console.log(samsung12);
PrintSmartphone(samsung12);
