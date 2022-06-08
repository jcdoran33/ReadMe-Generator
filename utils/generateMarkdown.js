// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // siwtch statement?
    switch (license) {
        case "MIT License":
            return "https://img.shields.io/badge/License-MIT-yellow.svg";
            break;
        case "GNU General Public License v3.0":
            return "https://img.shields.io/badge/License-GPLv3-blue.svg";
            break;
        case "Mozilla Public License 2.0":
            return "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
            break;
        case "None":
            return "";
    };

    // return (data.license ? badgePLaceHolder : "");
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "MIT License":
            return "https://opensource.org/licenses/MIT";
            break;
        case "GNU General Public License v3.0":
            return "https://www.gnu.org/licenses/gpl-3.0";
            break;
        case "Mozilla Public License 2.0":
            return "https://opensource.org/licenses/MPL-2.0";
            break;
        case "None":
            return "";
    };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    switch (license) {
        case "MIT License":
            return "https://opensource.org/licenses/MIT";
            break;
        case "GNU General Public License v3.0":
            return "https://www.gnu.org/licenses/gpl-3.0";
            break;
        case "Mozilla Public License 2.0":
            return "https://opensource.org/licenses/MPL-2.0";
            break;
        case "None":
            return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // will need to use const/let here to define the above^^ license functions as 
    // variables, we can then insert into the below MD printing
    //ie let/const badge = renderLicenseBadge()
    // let/const link = renderLicenseLink()
    //let/const section = renderLicenseSection
    return `
  # ${data.title}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## License
  ${data.license}
  
  ## Questions
  My Github username is ${data.github}.
  Contact me via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
