// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // will need to use const/let here to define the above^^ license functions as 
    // variables, we can then insert into the below MD printing
    //ie let/const badge = renderLicenseBadge()
    // let/const link = renderLicenseLink()
    //let/const section = renderLicenseSection
    return `
  # ${data.title}
            
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
