function character(name){

this.name = name;
this.weapon;
this.color;
this.relationship = false;
this.getInfo = getCharacter;
}



function getCharacter(){

return this.name + " " + this.weapon + " " + this.color + " " + this.relationship;

}

let ramdial = new character("Reiaz Ramdial");
ramdial.color = "brown"
ramdial.relationship = false;
ramdial.weapon = "the truth";     

console.log(ramdial.getInfo());

let person = {
	isHungry:  false,
	firstName: "jane",
	gender: "female",
	age: 25,
	eyeColor: 'red'
}




let person1 = {
	isHungry:  true,
	firstName: "emanuel",
	gender: "male",
	age: 14,
	eyeColor: 'brown'
}

console.log(person.firstName + person.age)



