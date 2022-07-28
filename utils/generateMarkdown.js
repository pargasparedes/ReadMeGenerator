// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT : '[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    APACHE: '[![license](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GnuGplV3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    BSD: '[![license](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} ${this.renderLicenseBadge(data.license)}


  ## Table of Contents
  - [Project Description](#Description)
  - [Installation Instructions](#Installation)
  - [Usage Information](#Usage)
  - [Contribution Guidelines](#Contribution)
  - [Test Instructions](#Test)
  - [License](#License)
  - [Questions?](#Questions)

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
  ${data.license}

  ## Questions?
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
