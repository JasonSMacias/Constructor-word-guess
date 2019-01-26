
const Letter = require("./letter");

let letter3 = new Letter("x", false);
console.log(letter3.wasGuessed);
// letter3.charCompare("y");
// letter3.charCompare("x");
let letterOrDash = letter3.getLetter();
console.log(letterOrDash);

let tempArray = [];
tempArray.push(letterOrDash);
console.log(tempArray);