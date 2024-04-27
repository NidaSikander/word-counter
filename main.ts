#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.cyanBright("\n \t\t Welcome to Word Counter"));
console.log("=".repeat(60));

//input from user to enter a sentence
let answers =await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message:"Enter a sentence:",
}
]);

//
let words =answers.sentence.trim().split(" ");

//analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("-sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count : ${chalk.bold.green(words.length)}`));
console.log("=".repeat(60));