// Author: FirstName LastName
var readline = require("readline-sync");

console.log();
console.log("*****************************************************************");
console.log("                          HAUNTED HOUSE");
console.log("                 A game by FirstName LastName");
console.log("*****************************************************************");
console.log("You are standing in front of a spooky haunted house.");
console.log("You hear what sounds like screaming coming from inside the house.");

var enterHouse = readline.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {

  let openDoor = readline.question("You hear a scream come from the bedroom, do you go upstairs?");
  if(openDoor == "y" || openDoor == "yes"){
    console.log("There is a dying woman on the floor, she points towards the closet,");
    let dyingWoman = readline.question("Do you open the closet door?");

    if (dyingWoman == "y" || dyingWoman == "yes") {
      console.log("You see a deranged person feasting on the legs of the woman,");
      let openCloset = readline.question("Do you close the door and run? ");
    } else {
    }
    // your code here
  } else {
    console.log("You see a child crying on the floor, upon touching them they run after you,");
    let lookAround = readline.question(" You see a crowbar on the floor, do you hit them with it?");
    if(lookAround == "y" || lookAround == "yes"){

    console.log("The child runs away, suddenly, something drags you into the basement by the feet.");
      let crowBar = readline.question("Do you look for weapons?");
      // if(basementWeapon == "y" || basementWeapon == "yes");

    } else {
      console.log("The child clawed out your eyes, you're dead. Try again!");
    }

  }
} else {

  console.log("GAME OVER!");

}
  // your code here
