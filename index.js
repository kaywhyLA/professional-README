// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



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
        type: 'list',
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

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve((
                true
            ));
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(answer) {
            console.log(answer);
            fileContent = generateMarkdown(answer);
            writeToFile(fileContent);

        });
}

// Function call to initialize app
init();

module.exports = questions;