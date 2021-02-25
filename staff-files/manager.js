const inquirer = require("inquirer")

const managerPrompt = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Insert managers name"
        },
        {
            type: "input",
            name: "ID",
            message: "Enter manager ID"
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager email"
        },
        {
            type: "input",
            name: "officeNum",
            message: "Enter managers office number"
        }
    ])
}

module.exports = managerPrompt;