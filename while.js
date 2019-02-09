const READLINE = require("readline-sync");
que = READLINE.question
print = console.log
/**** Problem 1 ****
Write a function that prints values from 10 to 0, counting down. Use a while
loop!
*/
function countdown() {
	mom = 10
while (mom >= 0) {
	console.log(mom)
		mom -= 1
}
}

// Test below
countdown();

/**** Problem 2 ****
Write a function that asks the user to enter a secret password. Until the user
enters the correct password, the program will keep asking for all eternity!
When they finally do enter the correct password, exit the loop and print a
congratulatory message.
*/
function getPassword() {
	print("HINT** THE NAME OF THE GOOGLE CODING PROGRAM")
password = que("Enter the secret passcode")
dad = false
res = password.toUpperCase()
if((res == "CODE NEXT"|| res == "CODENEXT")){
	print("You entered the correct password kiid")
	dad = true
}
while(dad == false){
	console.log("Enter the correct password foolish child!")
	password = que("Enter the secret passcode")
	res = password.toUpperCase()
if((res == "CODE NEXT"|| res == "CODENEXT")){
		print("Damn you cracked the not so hard code :/")
	dad = true
}
}
}

// Test below
getPassword();

/**** Problem 3 ****
Enhance your function above to only allow the user to try entering the correct
password three times. If they fail three times, the program should kick them
out and tell them they are a robot. Otherwise it should give them the same
congratulatory message above.
*/
function getPasswordEnhanced() {
	print("HINT** THE NAME OF THE GOOGLE CODING PROGRAM YOU HAVE 3 CHANCES!")
password = que("Enter the secret passcode")
poop = 0
dad = false
res = password.toUpperCase()
if((res == "CODE NEXT"|| res == "CODENEXT")){
	print("You entered the correct password kiid")
	dad = true
}
while(dad == false && poop < 3){
	poop ++
	if(poop == 1){
		print("You have 2 chances left to enter password")
			console.log("Enter the correct password foolish child!")
	password = que("Enter the secret passcode")
	res = password.toUpperCase()
	}
		if(poop == 2){
		print("You have 1 chances left to enter password")
			console.log("Enter the correct password foolish child!")
	password = que("Enter the secret passcode")
	res = password.toUpperCase()
	}
	if (poop == 3){
		print("You a FREAKING ROBOOT")

	}
if((res == "CODE NEXT"|| res == "CODENEXT")){
		print("Damn you cracked the not so hard code :/")
	dad = true
}
}
}

// Test below
getPasswordEnhanced();

/**** Problem 4 ****
As a final enhancement, make it so when the user enters the wrong password, the
program tells them that they are wrong, along with how many attempts they
have left.
*/
function getPasswordFinal() {
	print("HINT** THE NAME OF THE GOOGLE CODING PROGRAM YOU HAVE 10 CHANCES!")
password = que("Enter the secret passcode")
dad = false
res = password.toUpperCase()
if((res == "CODE NEXT"|| res == "CODENEXT")){
	print("You entered the correct password kiid")
	dad = true
}
while(dad == false && poop < 10){
for(poop = 0; poop <= 10; poop++){
	if((res == "CODE NEXT"|| res == "CODENEXT")){
		print("Damn you cracked the not so hard code :/")
	dad = true
	poop+=10000
}else{
		print(`You have ${(10-poop)} chances left to enter password`)
			console.log("Enter the correct password foolish child!")
	password = que("Enter the secret passcode")
	res = password.toUpperCase()
	}
}
}

}

// Test below
getPasswordFinal() ;