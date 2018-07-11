// Author: Nalani Gomez-Curiel
let readline = require('readline-sync');

let centsAsAString = readline.question("Enter cents ");
let cents = Number(centsAsAString);

let quarters = Math.floor(cents / 25);
console.log(quarters + " quarters");
//cents -= quarters * 25;

let dimes = Math.floor((cents % 25) /10);
console.log(dimes + " dimes");

let nickles = Math.floor((cents % 10)/5);
console.log(nickles + " nickles");

let pennies = Math.floor((cents % 5)/1);
console.log(pennies + " pennies");
