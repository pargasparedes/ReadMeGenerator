// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license) {
    const badges = {
      MIT : '[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      APACHE: '[![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      GnuGplV3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      BSD: '[![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    }
    return badges[license]
  } else {
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    const licenseLinks = {
    MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
    APACHE: '[APACHE](https://choosealicense.com/licenses/apache-2.0/)',
    GnuGplV3: '[GnuGplV3](https://choosealicense.com/licenses/gpl-3.0/)',
    BSD: '[BSD](https://choosealicense.com/licenses/bsd-3-clause-clear/)',
    }
    return licenseLinks[license]
  } else {
    return ''
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `License under the ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
};

function githubLink(github) {
  let gitURL = "[" + github + "]" + "(https://github.com/" + github + ")"
  return gitURL
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${renderLicenseBadge(data.license)}


  ## Table of Contents
  - [Project Description](#project-description)
  - [Installation Instructions](#installation-instructions)
  - [Usage Information](#usage-information)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [Questions?](#questions)

  ## Project Description
  ${data.description}

  ## Installation Instructions
  ${data.installation}

  ## Usage Information
  ${data.usage}
  
  ## Contribution Guidelines
  ${data.contributing}

  ## Test Instructions
  ${data.tests}

  ## License
  ${renderLicenseSection(data.license)}

  ## Questions?
  Here is my GitHub Profile: ${githubLink(data.github)}
  If you have any more questions, please contact me on my email: ${data.email}

`;
}

module.exports = generateMarkdown;
