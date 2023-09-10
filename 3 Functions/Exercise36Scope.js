//Fix the function and assign to the variable sport a global scope.
//How can we do this?

// function canPlay() {
//   let sport = " Football";

//   if (true) {
//     let personName = "Cosimo";
//   }

//   console.log(personName + sport);
// }

// canPlay();

var sport = 0;

function canPlay() {
  var sport = " Football";

  if (true) {
    let personName = "Cosimo";
    console.log(personName + sport);
  }
}

console.log(sport);
canPlay();
