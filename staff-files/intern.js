const inquirer = require("inquirer");
const { resourceUsage } = require("process");
const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, email, school, name) {
        super(name, id, email)
        this.school = school;
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
    getSchool() {
        return this.school
    }
}

module.exports = Intern;