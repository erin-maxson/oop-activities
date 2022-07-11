// TODO: Add a comment describing what kind of function this is - constructor es5 with function parameters/arguments to store data
function Character(name, type, age, strength, hitpoints) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.strength = strength;
  this.hitpoints = hitpoints;
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration -- prototype allows you to add properties or methods to an exisiting constructor local to your file. Local to your application
// add the printstats method to your local file
Character.prototype.printStats = function () {
  console.log(
    `Name: ${this.name}\nProfession: ${this.type}\nAge: ${this.age}\nStrength: ${this.strength}\nHitPoints: ${this.hitpoints}`
  );
  console.log('\n-------------\n');
};

// TODO: Add a comment describing the functionality of this method 
//shows that the character is still alive depending on the hit points they still have them, if not they are dead
Character.prototype.isAlive = function () {
  if (this.hitpoints > 0) {
    console.log(`${this.name} is still alive!`);
    console.log('\n-------------\n');
    return true;
  }
  console.log(`${this.name} has died!`);
  return false;
};

// TODO: Add a comment describing the functionality of this method
//removing the strength based on the hit points taken on by the character
Character.prototype.attack = function (character2) {
  character2.hitpoints -= this.strength;
};

// TODO: Add a comment describing the functionality of this method
Character.prototype.levelUp = function () {
  //adds +1 to age, +5 to strength, +25 to hitpoints 
  this.age += 1;
  this.strength += 5;
  this.hitpoints += 25;
};

const warrior = new Character('Crusher', 'Warrior', 25, 10, 75);
const rogue = new Character('Dodger', 'Rogue', 23, 20, 50);

warrior.printStats();
rogue.printStats();

rogue.attack(warrior);

// TODO: Add a comment describing what you expect to see printed in the console
// prints the stats in the console
warrior.printStats();

// TODO: Add a comment describing what you expect to see printed in the console
//prints the status of the warrior being alive and rogue leveling up
warrior.isAlive();

rogue.levelUp();

// TODO: Add a comment describing what you expect to see printed in the console
//prints the stats after those things are done
rogue.printStats();
