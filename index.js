// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./develop/utilize/generateMarkdown');


const generateMarkdown = require('./develop/utilize/generateMarkdown');


// prompt user for questions 
const questions = [{
type: 'input',
name: 'Name',
message: 'What is the title of your project?',
validate: nameInput => {
    if (nameInput) {
        return true;
    } else {
        console.log('Please enter your name!');
        return false;
    }
}
},
{
type: 'input',
name: 'Description',
message: 'Please provide a description of the project.',

},
{
type: 'input',
name: 'Table of Contents',
message: 'Insert your Table of Contents.'
},
{
type: 'input',
name: 'Installation',
message: 'How can a user install this application?',
},
{
type: 'input',
name: 'Features',
message: 'What are the features of the application?'
},
{
type: 'checkbox',
name: 'License',
message: 'Choose a license for the application',
choices: ['MIT', 'Apache', 'IBM', 'None', ],
validate: licenseInput = () => {
    if (licenseInput) {
        return true;
    } else {
        console.log('Please select one of the four options')
        return false;
    }
}
},
{
type: 'input',
name: 'Contributors',
message: 'List other contributors to your project.'
},
{
type: 'input',
name: 'Tests',
message: 'How can a user test the application?'
},
{
type: 'input',
name: 'Email',
message: 'Add your email in order for others to ask questions.'
}
]




































]).then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
    } else {
        return portfolioData;
    }
})
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

inquirer.prompt(questions)
    // TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();