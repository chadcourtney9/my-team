const inquirer = require("inquirer");
const { resourceUsage } = require("process");
const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, email, office, name) {
        this.name = name;
        this.id = id;
        this.email = email;
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