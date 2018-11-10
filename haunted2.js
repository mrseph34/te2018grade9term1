// Haunted House by Clay @clayheart

const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "fists",
  item: "flashlight",
  monster: 0,
  //didn't get used too much work
  dead: false,
  //mh = monster height
  mh: "0 ft",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
let chance = Math.floor(Math.random() * 5) + 1; 
if(chance == 1){
  player.monster = "skinwalker"
}
if(chance == 2){
  player.monster = "superman of eveil"
}
if(chance == 3){
  player.monster = "you eveil father"
}
if(chance == 4){
player.monster = "Dr. Nugger"
}
if(chance == 5){
  player.monster = "clayheart eww"
}
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);

console.log(`${player.name}  looks around for who ever is screaming`)

console.log(`${player.name}  finds a door.`);

enterDoor = READLINE.question("will he open the door?  (yes or no)");
if(enterDoor == "y" || enterDoor == "yes") {
 console.log(`${player.name} finds a girl`)
 console.log(`${player.name} hears his/hers mothers voice calling him/her`)

 }
 if(enterDoor == "n" || enterDoor == "no") {
console.log(`the ${player.monster} appears`)
} 
 



enterDoor = READLINE.question(" will he follow the voice   (yes or no)");

if(enterDoor == "y" || enterDoor == "yes") {
  player.mh = "10 ft"
  
  console.log(`${player.name} find a lengthy yellow eyed, boney, and ${player.mh} tall ${player.monster}`)
}
}
console.log(`${player.name} the ${player.monster} turn to face them and they are frozen`)

enterDoor = READLINE.question(" will he try to move  (yes or no)");

if(enterDoor == "y" || enterDoor == "yes") {
  
  console.log(`${player.name} can't move `)
}
console.log(`${player.name} the ${player.monster} let out a blood curtaling scream which makes you both run`)

enterDoor = READLINE.question(" will you hide (yes or no)");

if(enterDoor == "y" || enterDoor == "yes") {
  
  console.log(`${player.name}  you hide in a closet only to find a trap door under you`)
}
console.log(`${player.name} you fall and end up in the basement`)

enterDoor = READLINE.question(" will you use the key  (yes or no)");

if(enterDoor == "y" || enterDoor == "yes") {
  
  console.log(`${player.name}  you find that you are 15 feet away from the front door`)
}
console.log(`${player.name} the girl falls and gets stuck but the skinwalker is running for you`)

enterDoor = READLINE.question(" will you save yourself  (yes or no)");

if(enterDoor == "y" || enterDoor == "yes") {
  
  console.log(`${player.name}  you get away but you can hear her dying screams for help and it hauntes you for the rest of your life you coward`)
}
 
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);

  console.log(`${player.name} you turn back to find a suspicious man with a knife`)

  enterDoor = READLINE.question(" will you run into the house (yes or no)");

  if(enterDoor == "y" || enterDoor == "yes") { 
    console.log("hide in closet")

  }
  else if(enterDoor == "n" || enterDoor == "no") {
    console.log("the man runs at you and you fight")
  }
console.log(`${player.name} you fight and take the knif then the man runs`)

enterDoor = READLINE.question(" will you use the knife to help break the locks (yes or no)");

if(enterDoor == "y" || enterDoor == "yes") {
  
  console.log(`${player.name}  you are now in the house because the man is calling for backup`)
}
console.log(`${player.name} you hide and wait for them to come in`)

enterDoor = READLINE.question(" will you wait for them to pass you then run  (yes or no)");

if(enterDoor == "y" || enterDoor == "yes") {
  
  console.log(`${player.name}  you find yourself at the car with no keys`)
}
if(enterDoor == "n" || enterDoor == "no") {
console.log("they find you and kill you")
}
console.log(`${player.name} the people come back out and you see the keys on a mans belt`)

enterDoor = READLINE.question(" will you take them  (yes or no)");

if(enterDoor == "y" || enterDoor == "yes") {
  
  console.log(`${player.name} finds a pump kills everyone and is the last one standing!!!`)
}
console.log("Thanks for playing!");