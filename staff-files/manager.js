const inquirer = require("inquirer");
const { resourceUsage } = require("process");
const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office;
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
    getOffice() {
        return this.office
    }
}
module.exports = Manager;