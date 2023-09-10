const cars = [
  {
    brand: "Ferrari",
    model: "F40",
    year: 1987,
  },
  {
    brand: "Lamborghini",
    model: "Aventador",
    year: 2011,
  },
  {
    brand: "Bugatti",
    model: "Chiron",
    year: 2016,
  },
];

function makeModel(arr) {
  let makeModelArr = [];
  for (let i = 0; i < arr.length; i++) {
    let carString = arr[i].make + " " + arr[i].model;
    if (arr[i].year >= 2000) {
      makeModelArr.push(carString);
    }
  }
  return makeModelArr;
}

console.log(makeModel(cars));
