// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "Apache") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if (license === "IBM") {
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
    } else { return "" }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

##Description 
-${data.why}
-${data.problem}
-${data.learn}

##Table of Contents

-[License](#license)
-[Installation](#installation)
-[Usage](#usage)
-[Features](#features)
-[Credits](#contributors & credit)
-[Tests](#tests)
-[Questions](#questions)
-[How to contribute](#how to contribute)

##License 

- ${renderLicense(data.license)}

Refer to 

##Installation
To install this application, please follow the steps below:
- ${data.install}

##Usage 

![alt text][]

## Features

- ${data.features}

## Contributor & credit

- ${data.contributors}
- ${data.thirdparty}

## Tests

- ${data.test} 

## Questions 

- ${data.contribute}



`;
}

module.exports = generateMarkdown;