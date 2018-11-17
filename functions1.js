const READLINE = require("readline-sync");
que = READLINE.question
show = console.log
name = que("What is your name?")
 show("**** Problem 1: printMessage() ****")
// Write a function that prints any message you want.
printMessage = function(){
	show(`Whats up ${name}.`)
}
printMessage()

show("**** Problem 2: printFiveMessages() ****")
// Write a function that calls printMessage() five times.
printMessage5 = function(){
	printMessage()
	printMessage()
	printMessage()
	printMessage()
	printMessage()
}
printMessage5()

show("**** Problem 3: getUserInput() ****")
// Write a function that asks the user if they'd like to print your message
// once or five times. Then call one of the two functions above based on
// what the user decides.
man = function(){
	so = que("Would you like to print my message once or 5 times?")
	if(so.includes("1") || so.includes("on")){
		printMessage()
	}
	if(so.includes("5")|| so.includes("five")){
		printMessage5()
	}
}
man()

// **** Problem 4: printGreeting() ****
// Write a function that prints a greeting message to the user.


// **** Problem 5: printClosing() ****
// Write a function that prints a goodbye message to the user.


// **** Problem 6: run() ****
// Write a function that runs the whole program by calling functions in this
// order:
// 1) printGreeting()
// 2) getUserInput()
// 3) printClosing()


// When finished, call your run() function below to run the whole program!
