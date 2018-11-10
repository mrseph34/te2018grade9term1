const READLINE = require("readline-sync");

// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  charm: 0,
  weapon: "pocket knife",
  item: "flashlight",
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE OF COURAGE ***");
player.name = READLINE.question("What is your name?: ");
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
 nf = READLINE.question(`Approach shadow figure with ${player.weapon} to get close to the noise or run away? (a or r)`)
 if (nf == "a") {
  console.log(`The shadow figure moves and inch so ${player.name} attacks with the knife and kills it in an instant.`)
  b = READLINE.question("Go down to the basement following the screams? (yes or no)")
}
if(nf == "r"){
console.log("You start to get chased by the shadow figure while running he stabs you and kills you.)")
}
  if(b == "y" || b == "yes") {
    console.log(`${player.name} turn on his ${player.item} and goes down the basement stairs and finds a chest on the bottom./`)
    c = READLINE.question("Open the chest? (yes or no)")
      }
      if(c == "y" || c == "yes"){
        console.log(`${player.name} finds a magical sword of flames, so ${player.name} ditches the ${player.weapon} and starts carrying around the sword of flames.`)
        player.weapon = "sword of flames"
        console.log(`${player.name} continues to follow the screams with his new ${player.weapon} and finds an ice monster.`)
        at = READLINE.question(`Test out your new ${player.weapon} on the ice monster? (yes or no)`)
       if(at == "y" || at == "yes"){
        console.log(` ${player.name} swings using the ${player.weapon} aimlessly but lands a hit on the ice monster and it melted with on hit.`)
        h = READLINE.question("After walking down the hallway you find a room where the screams are way louder than before will you open the door? (yes or no)")
        if(h == "y" || h == "yes"){
          console.log(`${player.name} opens the door and finds a octopus monster doing experiments on fellow humans.`)
          o = READLINE.question("Attack the octopus to try and save everyone? (yes or no)")
          if(o == "y"|| o == "yes"){
            console.log(`${player.name} tries to kill the octopus in one focused strike but the octopuses head comes off and its still moving then ${player.name} just screams and the ${player.weapon} starts to burn only the enemy to ash.`)
            console.log(`${player.name} is now a savior and earns the title of 'Demi-God' Good Job?`)
          }
          if(o == "n" || o == "no"){
            console.log(`The octopus monsters turns around and slaps the ${player.weapon} out of your hand then starts to do tests on ${player.name}, ${player.name} dies a slow death.`)
          }
        }
        if (h == "n" || h == "no"){
          console.log(`The door opens it self and swallows up ${player.name}`)
        }
       }
      if(at == "n" || at == "no"){
        console.log(`${player.name} reacted too slow then the ice monster didn't hesitate to kill`)
      }
      }
      if(c == "no" || c == "no"){
        console.log(`${player.name} keeps walking and a ice monster doesn't even bother freezing them it just eat ${player.name}`)
      }
        else if (b == "n" || b == "no"){
  console.log( `${player.name} tries to run away and gets eaten by the house.`)
 }
} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However, the sounds of footsteps are coming closer.`);
  rw = READLINE.question("Run away or keep walking? (r or w)")
  if (rw == "r"){
    console.log(`A shadow figure starts chasing ${player.name}.`)
  tr = READLINE.question("Turn around or keep running? (t or r)")
}
  if (tr == "t"){
    console.log(`${player.name} turn around too bad because ${player.name} not gets stabbed and killed by the shadow figure`)
  }
  if (tr == "r"){
    console.log(`${player.name} isn't fast enough to outrun the shadow figure gets stabbed and killed`)
  }
  else if (rw == "w"){
    console.log(`A shadow figure starts walking toward ${player.name} slowly, he soon speeds up and stabs ${player.name} in the back and leave ${player.name} to bleed out, what a sad way to die says the shadow figure.`)
  }
}
console.log("Thanks for playing, hope you enjoyed!");