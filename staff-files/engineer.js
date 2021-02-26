const inquirer = require("inquirer");
const { resourceUsage } = require("process");
const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email)
        this.gitHub = gitHub;
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getGitHub() {
        return this.gitHub
    }
}

module.exports = Engineer;