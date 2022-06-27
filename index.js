const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');

/* const questions = () => {
    return inquirer.prompt({
        name: "Manager",
        type: "input",
        message: "Please enter the managers name",
    })
        .then((answers) => {
            const response = answers.start;
            if (!response) {
                return questions
            }
            inquirer.prompt({
                type: 'input',
                message: "Please enter the Managers employee ID",
                name: 'ManagerID',
            })
        }

questions()
                .then(() => {
                    return inquirer.prompt({
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
                    }) */

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
        name: 'ManagerID',
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
        name: 'Manageremail',
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
        name: 'Managerofficenumber',
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
        //when: (answers) => answers.EngineerGithub || answers.InternGithub || answers.Managerofficenumber,
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
        when: (answers) => answers.EngineerUsername,
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
        when: (answers) => answers.EngineerID,
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
        when: (answers) => answers.EngineerEmail,
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
    {
        type: 'input',
        message: "Please enter Intern's ID",
        name: 'InternID',
        when: (answers) => answers.InternUsername,
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter Intern's email address",
        name: 'InternEmail',
        when: (answers) => answers.InternID,
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter Intern's GitHub Username",
        name: 'InternGithub',
        when: (answers) => answers.InternEmail,
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