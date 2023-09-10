const students = [
  { id: 1, name: "Luca", surname: "Rossi", age: 20, hobby: "gamer" },
  { id: 2, name: "Mario", surname: "Bianchi", age: 24, hobby: "sportsman" },
  {
    id: 5,
    name: "Elena",
    surname: "Pappalardo",
    age: 23,
    hobby: "photographer",
  },
  { id: 3, name: "Giovanna", surname: "Brambilla", age: 26, hobby: "gamer" },
  { id: 4, name: "Carmelo", surname: "Verdi", age: 18, hobby: "photographer" },
];

let youngest = students[0];
let longestSurname = students[0];

function checkAge(student) {
  if (youngest.age > student.age) {
    youngest = student;
  }
}

function checkSurname(student) {
  if (longestSurname.surname.length < student.surname.length) {
    longestSurname = student;
  }
}

function surfArray() {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);

    switch (students[i].hobby) {
      case "gamer":
        console.log("Life Is a Game, Play to Win!");
        break;
      case "sportsman":
        console.log("Never give up!");
        break;
      case "photographer":
        console.log("A picture is worth a thousand words!");
        break;
      default:
        console.error("Unknown hobby");
    }
    checkAge(students[i]);
    checkSurname(students[i]);
  }
  console.log("The youngest is", youngest.name);
  console.log("The longest surname is", longestSurname.surname);
}

surfArray();
