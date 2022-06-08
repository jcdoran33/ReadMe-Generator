// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
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
        choices: ["MIT License","GNU General Public License v3.0", "Mozilla Public License 2.0", "None"]
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        fs.writeFileSync(
            "readme.md",
            `
# ${response.title}
            
## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contributing
${response.contribution}

## Tests
${response.test}

## License
${response.license}

## Questions
My Github username is ${response.github}.
Contact me via email at ${response.email}.

            `
        );
    });
};

// Function call to initialize app
init();
