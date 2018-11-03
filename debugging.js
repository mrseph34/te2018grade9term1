// Remove block comments when ready to debug a program.
const READLINE = require("readline-sync");
// Program #1: "Careless"
let x = 3;
if(x >= 3) {
  x++;
} else {
  x = 2;
}
console.log(x);

// Program #2: "Bad logic and math"
let money = 28;
if(money < 50 && money >= 20) {
  money /= 2;
} else {
  money /= 0;
}
console.log(money)

// Program #3: "And what else?"
let num1 = READLINE.question("Enter num1: ");
let num2 = READLINE.question("Enter num2: ");
let num3 = READLINE.question("Enter num3: ");
if(parseInt(num1) >= parseInt(num2) && parseInt(num1) >= parseInt(num3)) {
  console.log("#1: "+num1 + " is the largest value.");
}
else if(parseInt(num2) >= parseInt(num3) && parseInt(num2) >= parseInt(num1)) {
  console.log("#2: "+num2 + " is the largest value.");
} else if(parseInt(num3) >= parseInt(num2) && parseInt(num3) >= parseInt(num1)) {
  console.log("#3: "+num3+ " is the largest value.");
}