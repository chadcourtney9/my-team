const { test, expect } = require("@jest/globals");
const { TestScheduler } = require("jest");
const Engineer = require("../staff-files/engineer")


test("Can get the engineers GitHub", () => {
    const gitHub = "ChadCourtney9"
    const engineer = new Engineer('', '', '', gitHub);

    expect(engineer.gitHub).toBe("ChadCourtney9");
});

test("Can get the engineers role", () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe("engineer")
})
