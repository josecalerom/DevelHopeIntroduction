const numbers = [1,45, 23, 6, 3, 8, 2]


function primeNumbers(arr) {
  let primesArr = [];
  for (let i = 0; i < arr.length; i++) {
    let isPrime = true;
    if (arr[i] === 1) {
      isPrime = false;
    } else {
      for (let j = 2; j < arr[i]; j++) {
        if (arr[i] % j === 0) {
          isPrime = false;
          break;
        }
      }
    }
    if (isPrime) {
      primesArr.push(arr[i]);
    }
  }
  return primesArr;
}

  
console.log(primeNumbers(numbers));