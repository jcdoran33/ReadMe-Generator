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
    // console.log(renderLicenseBadge(license));
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
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // console.log(renderLicenseSection(license));
    if (license === "None") {
        return "License: "+license ;
    } else {
    return "[![License: "+license+"]("+renderLicenseBadge(license)+")]("+renderLicenseLink(license)+")"
    };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // will need to use const/let here to define the above^^ license functions as 
    // variables, we can then insert into the below MD printing
    let license = data.license;
    // console.log("Generate Markdown func: "+license);
    let badge = renderLicenseBadge(license);
    let link = renderLicenseLink(license);
    let section = renderLicenseSection(license);
    // console.log("Big test: " + badge,link,section);
    return `
  # ${data.title}
  
  ${section}

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
  This project was created under and is covered by the ${data.license}. Click the license badge at the top of the ReadMe file for more information.
  
  ## Questions
  My Github username is ${data.github}. [Click here to go to my Github profile.](https://github.com/${data.github})  
  Contact me with any questions via email at ${data.email}.
`;
};

module.exports = generateMarkdown;
