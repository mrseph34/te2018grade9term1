const READLINE = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);

let hw = READLINE.question("Did you do your homework? yes/no: ");


if(hw == "yes") {
	console.log("Great!");
}
else {
	let talkback = READLINE.question("You've got to do well in school if you want to get ahead in life. Go do your hw! ");
	if(talkback.includes("whatever") ||talkback.includes("I don't care")) {
		console.log("Go finish that homework, before...");

	}
	if (talkback.includes("fuck") || talkback.includes("bitch") || talkback.includes("i hate you") || talkback.includes("ass")) {
		console.log("Watch that language CHILD. GO TO YOUR ROOM!")
	}

}

let bath = READLINE.question("Did you take a shower? ");
if(bath == "no") {
	console.log("Go take a bath immediately before I take my belt off");
}
else if(bath == "yes") {
	console.log("Good.");
}

let food = READLINE.question("Did you eat when you got home? ");
if(food == "yes") {
	console.log("Good");
}
else {
	console.log("Eating well is really important to your health. Too bad you didn't so you boutta die.");
}

console.log(`
**************************************************

`);
console.log("Thanks for using The Parent Bot. Good bye for now!");
console.log(`
**************************************************

`);