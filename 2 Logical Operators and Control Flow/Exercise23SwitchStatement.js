/*
Print in the console the price of the room according to the following scheme:

Price for Basic Room --> 50€
Price for Junior Suite Room --> 80€
Price for Master Suite --> 100€
*/

let room = "Master Suite";

const basicRoom = "Basic Room";
let basicRoomPrice = 50;
const juniorSuiteRoom = "Junior Suite Room";
let juniorSuiteRoomPrice = 80;
const masterSuite = "Master Suite";
let masterSuitePrice = 100;

switch(room){
    case basicRoom:
        console.log("Price for " + basicRoom + " --> " + basicRoomPrice + "€." );
        break;
    case juniorSuiteRoom:
        console.log("Price for " + juniorSuiteRoom + " --> " + juniorSuiteRoomPrice + "€." );
        break;
    case masterSuite:
        console.log("Price for " + masterSuite + " --> " + masterSuitePrice + "€." );
        break;
}

