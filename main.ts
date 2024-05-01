#! /usr/bin/env node

import inquirer from "inquirer";

//computer will generate a random number

//user input for guessing number

//computer user input with computer genereted number and show result
const randomNumber = Math.floor(Math.random()* 10 + 1);
//console.log(randomNumber);//

const answers = await inquirer.prompt([{
    name: "userGuessedNumber",
    type: "number",
    message: "please guess a number between 1-10:",


}]);

if(answers.userGuessedNumber === randomNumber){
    console.log("congragulations! you guessed the right number")
}else{
    console.log("you guessed wronge number");
}