let totalArray = [10, 87, 17, 9, 6, 5, 11, 14, 27, 73];

let primeNumbersDetector = function (controlObject) {
  let primeArray = [];
  if (typeof controlObject == "object") {
    for (value of controlObject) {
      console.log(value);
      if (typeof value === "number") {
        if (value < 1) {
        }
        if (value == 1 || value == 2) {
          primeArray.push(value);
        }
        for (let i = 2; i < value; i++) {
          if (value % i === 0) {
          }
        }
      }
    }
  }
  return console.log(primeArray);
};

primeNumbersDetector(totalArray);
