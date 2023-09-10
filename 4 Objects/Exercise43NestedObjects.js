console.log("Nested Objects");

/*
We can put an object inside of an object
We can access to that nested values and there are some keywords to avoid errors
*/

let nested = {
  nestObject: {
    valueOne: 1,
    valueTwo: 4,
    nested: {
      value: 3,
    },
  },
};

//We can go deeper in the object
console.log(nested.nestObject.valueOne);
console.log(nested.nestObject.nested.value);

/*We have a -?- symbol to validate if the value exist
The question mark says if this is defined, then I'll try ti access it
*/
console.log(nested.nestObject.valueOne?.nested); //undefined
//JS will stop if the value does not exist

//We can also prevent the errors that way
if (nested.nestObject.nested?.valueTwo === undefined) {
  console.log("ValueTwo does not exist.");
}

/* Another example to prevent errors
It is useful even the value does not exist
*/
let value =
  nested.nestObject.nested?.valueTwo === undefined
    ? 0
    : nested.nestObject.nested.valueTwo;

console.log(value + 10);

let valueTwo =
  nested.nestObject.nested?.value === undefined
    ? 0
    : nested.nestObject.nested.value;

console.log(valueTwo + 10);

console.log("Ejemplo 1:");

console.log("Objetos anidados");

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  motor: {
    cilindros: 4,
    potencia: "99hp",
    tipo: {
      a: "",
    },
  },
};

//Se puede acceder dentro de los objetos del objeto
console.log(coche);
console.log(coche.motor);
console.log(coche.motor.tipo);

console.log("Ejemplo 2:");

const casa = {
  dirección: "Siempre viva",
  habitaciones: {
    dormitorios: {
      camas: 2,
      armarios: 1,
    },
    cocina: {
      electrodomesticos: ["nevera", "horno", "microondas"],
    },
    sala: {
      sofas: 2,
      tv: true,
    },
  },
};

console.log(casa.habitaciones.dormitorios);
console.log(casa.habitaciones.cocina.electrodomesticos[0]);

console.log("Ejemplo objeto-objeto inventado");

let user = {
  name: "Juan",
  age: 56,
  domicilio: {
    calle: "Calle vieja",
    Número: 419,
  },
};

let newUser = {};

Object.freeze(user.domicilio);

for (key in user) {
  newUser[key] = user[key];
}

newUser.age = 80;
newUser.domicilio = { calle: "Calle nueva", Número: 428 };

// newUser.domicilio.calle = "Calle nueva"; // "Calle vieja"

console.log("Objetos Finales");
console.log(user);
console.log(newUser);

console.log("Exercise 43");

/* 
We want to add to the student object a nested object called personalData,
that has 3 properties: name, surname, age.
Print in the console the personalData object.
*/

const student = {
  id: 1,
  school: "Liceo",
  year: 3,
};

student.personalData = {
  name: "José",
  surname: "Calero",
  age: 28,
};

console.log("Object complete");
console.log(student);
console.log("Object nested");
console.log(student.personalData);
