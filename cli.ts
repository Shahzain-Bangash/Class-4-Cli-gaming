#! /usr/bin/env node
import inquirer from "inquirer";

//1) Computer will generate a rondom number

//2) User Input for guessing number

//3) Compare User input with Computer generated and show result

const randomNumber = Math.floor(Math.random() * 5+1)

const yourAnswer = await inquirer.prompt([{
    name:"Game_Guess_Answer",
    message:"Enter the Guess number: ",
    type:"number",
}])

if (yourAnswer.Game_Guess_Answer === randomNumber){
        console.log("Congratualation You Win");
}else{
    console.log("Better luck next time!!");
}