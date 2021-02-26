const { test, expect } = require("@jest/globals");
const { TestScheduler } = require("jest");
const Intern = require("../staff-files/intern")


test("Can get where the intern goes to school", () => {
    const school = "UNH";
    const intern = new Intern('', '', '', school);

    expect(intern.school).toBe("UNH");
})

test("Can get the intern role", () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe("Intern")
})
