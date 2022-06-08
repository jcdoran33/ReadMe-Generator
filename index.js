// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Briefly describe the application",
            name: "description",
        },
        {
            type: "input",
            message: "Enter instructions for installation",
            name: "installation",
        },
        {
            type: "input",
            message: "Enter usage information",
            name: "usage",
        },
        {
            type: "input",
            message: "Enter contributors/contribution guidelines",
            name: "contribution",
        },
        {
            type: "input",
            message: "Enter Test Instructions",
            name: "test",
        },
        {
            type: "list",
            message: "Please choose a license type",
            name: "license",
        },
        {
            type: "input",
            message: "Enter your Github username",
            name: "github",
        },
        {
            type: "input",
            message: "Enter your email address",
            name: "email",
        },
    ])
    .then((response) => {
        fs.writeFileSync(
            "readme.md",
            `this is where we will add the ReadMe content, and variables from the inquirer inputs`
        );
    });
};

// Function call to initialize app
init();
