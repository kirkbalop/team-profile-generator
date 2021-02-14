const { test, expect } = require("@jest/globals");
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

test("can set office number thru constructor arg", () => {
    const testOffice = 100;
    const emp = new Manager('dave', '2', 'dave@dave.dave', testOffice);
    expect(emp.officeNumber).toBe(testOffice);
});

test('function getRole returns "Manager"', () => {
    const testRole = "Manager";
    const emp = new Manager('Dave', '2', 'dave@dave.dave', 100);
    expect(emp.getRole()).toBe(testRole);
});

test('Can get office number thru getOffice function', () => {
    const testOffice = 100;
    const emp = new Manager('dave', '1', 'dave@dave.dave', testOffice);
    expect(emp.getOffice()).toBe(testOffice);
});