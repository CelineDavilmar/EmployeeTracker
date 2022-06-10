const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('./src/generateMarkdown');


const questions = [
    {
        type: 'input',
        message: "Please enter the managers name",
        name: 'Manager',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Project Title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the Managers employee ID",
        name: 'Manager ID',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A Description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the Managers email",
        name: 'Manager email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the Managers office number",
        name: 'Manager office number',
        validate: function (answer) {
            if (answer.length < 9) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Would you like to add to your team or complete the process?",
        name: 'buildteam',
        choices: [
            {
                value: 'Engineer'
            },
            {
                value: 'Intern'
            },
            {
                value: 'Finish building my team'
            }
        ],

    },
    {
        type: 'input',
        message: "Please enter Engineer name",
        name: 'EngineerUsername',
        when: (answers) => answers.buildteam === 'Engineer',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter Engineer's ID",
        name: 'EngineerID',
        when: (answers) => answers.EngineerUsername === 'Engineer',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter Engineer's email address",
        name: 'EngineerEmail',
        when: (answers) => answers.EngineerUsername === 'Engineer',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter Engineer's GitHub Username",
        name: 'EngineerGithub',
        when: (answers) => answers.EngineerUsername === 'Engineer',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter Intern name",
        name: 'InternUsername',
        when: (answers) => answers.buildteam === 'Intern',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //fileName = "./ReadME.md"

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('HTML generated')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse, data) => {
            console.log("Making HTML File");
            writeToFile("index.html", generateMarkdown(inquirerResponse, data));
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();