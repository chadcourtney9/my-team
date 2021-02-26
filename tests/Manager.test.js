const { test, expect } = require("@jest/globals");
const { TestScheduler } = require("jest");
const Manager = require("../staff-files/manager")

test("Can set an office room number", () => {
    const office = 103;
    const manager = new Manager('', '', '', office);
    expect(manager.office).toBe(103);
});

test("Can get the role", () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe("Manager")
})
