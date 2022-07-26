// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'Apache') {
        return '![License: Apache](https://www.apache.org/licenses/LICENSE-2.0.txt)(https://opensource.org/licenses/Apache-2.0)'
    }
    if (license === 'Unlincense') {
        return ''
    }
    if (license === 'Mozilla Public License') {
        return '![License: MPL-2.0](https://opensource.org/licenses/MPL-2.0)(http://www.gnu.org/licenses/license-list.html#MPL-2.0)'
    }
    if (license === 'Berkeley Source Distribution') {
        return ''
    }
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