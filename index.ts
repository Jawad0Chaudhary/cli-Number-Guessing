#! /usr/bin/env node
import inquirer from "inquirer";

//1) Computer will generate a random number.

//2)User input for guessing number.

//3) Compare user input with Computer Generated Number And Show Number.


const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number with 1-6: ",
  }
]);

if(answer.userGuessedNumber === randomNumber){
  console.log("Congratulation! You Guessed Right Number.");
}else{
  console.log("Sorry! You Guessed Wrong Number.");
}

console.log("The Random Number Generated was: " + randomNumber);