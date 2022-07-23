// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// prompt user for questions 
const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of the project.',

        },
        {
            type: 'input',
            name: 'Table of Contents',
            message: 'Insert your Table of Contents.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How can a user install this application?',
        },
        {
            type: 'input',
            name: 'features',
            message: 'What are the features of the application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for the application',
            choices: ['Unlincensed', 'MIT', 'Apache', 'Mozilla Public License(MPL)', 'Berkeley Source Distribution(BSO)', 'Eclipse Public License(EPL)']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'List other contributors to your project.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How can a user test the application?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Add your Github in order for others to ask questions.'
        }
    ]);
};

promptUser().then(answers => console.log(answers));



// TODO: Create an array of questions for user input
const promptQuestions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();