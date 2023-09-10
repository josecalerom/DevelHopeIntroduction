console.log("Objects");

//An object consists of key value pairs
//It's helpful for holding data that has a kind of structure to it

let objeto = {
  kirie: "value",
  joseA: 8,
  booleano: true,
  func: (argOne) => argOne + 2,
};

console.log(typeof objeto);

//find that value at that key in that object and return it for us
console.log(objeto["kirie"]);
console.log(objeto.kirie);

//Assign a new value to a key
objeto["kirie"] = 12345;
console.log(objeto.kirie);

//Add a new key to the object
objeto["New Key"] = 10;

//To know the keys of an object
console.log(Object.keys(objeto));

//We can add a function to an object
console.log(objeto.func(18));

//We can store an object inside an object
let objTwo = {
  key: 3456,
  objTwoOne: {
    Jason: 0.00005,
  },
};

console.log("Objects");

let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Ciudad 1",
};

//Al imprimir -persona- se muestra todo el objeto
console.log(persona);

//Dos formas de imprimir la edad
console.log(persona["edad"]);
console.log(persona.edad);

console.log("Iterar sobre las llaves del objeto");

/* El for...in es una función especial para objetos de JavaScript
Se usa cuando queremos iterar directamente sobre
las propiedades de un objeto (clave, valor)
entra a todo el objeto y hay que limitarlo*/
for (const key in persona) {
  console.log(key + ": " + persona[key]);
}

console.log("Iterar sobre las claves del objeto");

//Con esta propiedad de Object obtenemos una lista con todas las keys
const keys = Object.keys(persona);
console.log(keys);

//El for...of se puede controlar más, es exclusivo para los arrays, strings, map, set
//Aquí estamos iterando el array generado en -keys-
/*Para hacer el for...of debemos hacer una transformación previa que se logra
a través del -keys- para que deje de ser un objeto */
for (const key of keys) {
  console.log(key); //keys del objeto
  console.log(persona[key]); //values del objeto
}

console.log("Iterar sobre los valores del objeto");

const values = Object.values(persona);
console.log(values);

for (const value of values) {
  console.log(value); //values del objeto
}

console.log("Iterar sobre las claves del objeto con condiciones");

for (const key of keys) {
  {
    if (key == "nombre") {
      console.log(persona[key]);
    } //keys del objeto == "nombre"
  }
}

console.log("Iterar sobre pares clave-valor del objeto");

const entries = Object.entries(persona);
console.log(entries);

for (let [key, value] of entries) {
  console.log(key + ": " + value);
}

console.log("Propiedades objeto");

const propertyNames = Object.getOwnPropertyNames(persona);
console.log(propertyNames);

for (const propertyName of propertyNames) {
  console.log(propertyName + ": " + persona.propertyName);
}

const propiedadesDeseadas = ["nombre", "edad"];

for (const propiedad of propiedadesDeseadas) {
  console.log(propiedad + ": " + persona[propiedad]);
}

console.log("Cambiar propiedades objeto");

let personaDos = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Ciudad 1",
};

personaDos.ciudad = "Madrid";
console.log(personaDos);

personaDos.edad += 5;
console.log(personaDos);

//Eliminar propiedad
delete personaDos.edad;

//Crear una llave nueva
persona.apellido = "Pérez";

//Crear un objeto vacío dentro de otro
persona.apodo = {};
console.log(personaDos);

console.log("Iterar un objeto dentro de otro");

const vehiculosIterar = {
  auto: { marca: "Yamaha", fecha: 2000, motor: true },
  moto: { maraca: "Honda", fecha: 2010, motor: true },
};

for (categoria in vehiculosIterar) {
  for (propiedad in vehiculosIterar[categoria]) {
    console.log("Propiedad: " + vehiculosIterar[categoria][propiedad]);
  }
}

console.log("Contador de llaves de un objeto");

const objContador = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

let contador = 0;

for (const llave in objContador) {
  contador++;
}

console.log("El objeto tiene " + contador + " propiedades.");

console.log("Objetos y funciones");

let personaTres = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Ciudad 1",
};

console.log("Ejemplo con datos primitivos (string, boolean...) de referencia");

function functionOne(params) {
  params = 88;
  console.log(params + " dentro de la función.");
}
//La función toma -params- en su valor en este caso
let params = 10;
functionOne(params);
console.log(params + " fuera de la función.");

console.log("Ejemplo con objetos como referencia");

/* La función toma la edad del objeto como referencia denuevo valor
definitivo en este otro caso por apuntar a un objeto */

function functionPersona(personaTres) {
  personaTres.edad = 88;
  console.log(personaTres.edad + " edad dentro de la función.");
}

functionPersona(personaTres);
/* Al utilizar como referencia el objeto en la función
se modificará en todo el código */

console.log(personaTres.edad + " edad fuera de la función.");

/* La forma de mantener ambos valores independientes sería con un
Split operator (extrae los datos del objeto original y los pega en el nuevo objeto)

al copiar un objeto a otro, no copiamos el objeto, sino la referencia
objeto1 = objeto2 XXXXXXXXXX

de la siguiente forma sería correcto:

personaCuatroCopia = { ...personaCuatro };

*/

let personaCuatro = {
  nombre: "Ramiro",
  edad: 55,
  ciudad: "Bogotá",
};

function functionSplit(personaCuatro) {
  personaCuatroCopia = { ...personaCuatro };
  // personaCuatroCopia = Object.assign{{},personaCuatro };
  // También se puede así, aunque es muy engorroso
  personaCuatroCopia.edad = 478;
  console.log(personaCuatro.edad + " edad dentro de la función con Split.");
}

console.log(personaCuatro.edad + " edad fuera de la función con Split.");

functionSplit(personaTres);

console.log("Definir datos de un producto en un objeto");

let producto = {
  // nombre: "camisa",
  // cantidad: 10,
  // precio: 2,
};

//Es una mala práctica agregar las propiedades de un objeto después
producto.nombre = "camisa";
producto.cantidad = 10;
producto.precio = 2;

console.log(producto);

for (key in producto) {
  console.log(key + ": " + producto[key]);
}

console.log("2 formas de multiplicar el precio");

//Changing the value inmediatly
producto.precio = producto.precio * 2;
console.log(producto.precio);

//Using a function
function triplicarPrecio(x) {
  x.precio *= 3;
}

triplicarPrecio(producto);

console.log(producto);

console.log("Ejemplo función automática");

/*
Una IIFE o Immediately Invoked Function Expression
es una expresión de función que se ejecuta inmediatamente después de ser creada.
*/

let personaThree = {
  nombre: "Juan",
  edad: 30,
};

(function (personaThree) {
  console.log(
    "Hola, soy " +
      personaThree.nombre +
      " y tengo " +
      personaThree.edad +
      " años."
  );
})(personaThree);

console.log("Exercise 37");

/* Create an object literal called car with two properties: name and color.
Print in the console the properties values. */

let car = {
  name: "Corsa",
  color: "red",
};

console.log(Object.keys(car));

console.log(car.name);
console.log(car.color);
