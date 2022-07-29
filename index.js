// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'type the title of your project',
        validate(text){
            if (text.length < 1) {
                return 'Please enter information';
            }
        
              return true;
        },
    },

    {
        type: 'input',
        name: 'description',
        message: 'type the description of your project',
        validate(text){
            if (text.length < 1) {
                return 'Please enter information';
            }
        
              return true;
        },
    },

    {
        type: 'input',
        name: 'installation',
        message: 'type the installation process of your project',
        validate(text){
            if (text.length < 1) {
                return 'Please enter information';
            }
        
              return true;
        },
    },

    {
        type: 'input',
        name: 'usage',
        message: 'type the usage of your project',
        validate(text){
            if (text.length < 1) {
                return 'Please enter information';
            }
        
              return true;
        },
    },

    {
        type: 'list',
        name: 'license',
        message: 'choose your type of license',
        choices: ['MIT', 'APACHE', 'GnuGplV3', 'BSD']
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'type the contribuiton guidelines of your project',
        validate(text){
            if (text.length < 1) {
                return 'Please enter information';
            }
        
              return true;
        },
    },

    {
        type: 'input',
        name: 'tests',
        message: 'type the tests instructions of your project',
        validate(text){
            if (text.length < 1) {
                return 'Please enter information';
            }
        
              return true;
        },
    },

    {
        type: 'input',
        name: 'github',
        message: 'enter your GitHub username',
        validate(text){
            if (text.length < 1) {
                return 'Please enter information';
            }
        
              return true;
        },
    },

    {
        type: 'input',
        name: 'email',
        message: 'enter your email address',
        validate(text){
            if (text.length < 1) {
                return 'Please enter information';
            }
        
              return true;
        },
    }
];

async function runQuery() {
    return inquirer.prompt(questions)
    .then((data)=>{
        const mark = generateMarkdown(data)
        writeToFile("README.md", mark)
        return data
    })
    .catch((error)=>{
        console.log(error)
    })
};

runQuery();

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
    })
};