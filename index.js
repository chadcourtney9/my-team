const Manager = require("./staff-files/manager");
const Engineer = require("./staff-files/engineer");
const Intern = require("./staff-files/intern");
const fs = require("fs");
const inquirer = require("inquirer");


teamInit = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "manName",
            message: "Enter name here"
        },
        {
            type: "input",
            name: "manID",
            message: "Enter manager ID"
        },
        {
            type: "input",
            name: "manEmail",
            message: "Enter managers Email"
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter manager office number"
        }
    ])
};

nextMemb = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "nextMembChoice",
            message: "Add another type of employee",
            choices: ["Manager", "Engineer", "Intern", "No more employees!"]
        }
    ])
};

engineerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "enginName",
            message: "Enter name here"
        },
        {
            type: "input",
            name: "enginID",
            message: "Enter engineer ID"
        },
        {
            type: "input",
            name: "enginEmail",
            message: "Enter engineers Email"
        },
        {
            type: "input",
            name: "gitHub",
            message: "Enter engineer GitHub username"
        }
    ])
};

internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter name here"
        },
        {
            type: "input",
            name: "internID",
            message: "Enter intern ID"
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter interns Email"
        },
        {
            type: "input",
            name: "gitHub",
            message: "Enter intern School name"
        }
    ])
};