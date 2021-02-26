const { test, expect } = require("@jest/globals");
const { TestScheduler } = require("jest");
const Employee = require("../staff-files/employee")

test("can set an employee name", () => {
    const name = "Chad";
    const employee = new Employee(name, "", "");

    expect(employee.name).toBe("Chad");
});

test("Can set an id number", () => {
    const id = 12;
    const employee = new Employee('', id, '');

    expect(employee.id).toBe(12);
});

test("Can set an email address", () => {
    const email = "chadcourtney567@gmail.com";
    const employee = new Employee('', '', email);

    expect(employee.email).toBe("chadcourtney567@gmail.com");
});